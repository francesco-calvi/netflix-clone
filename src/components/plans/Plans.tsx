import React from "react";
import db from "../../firebase";
import {
  collection,
  where,
  getDocs,
  query,
  doc,
  addDoc,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import type { Plan as PlanType } from "../../types";
import { Plan, SubscribeButton } from "./Plans.style";
import { useSelector } from "react-redux";
import { selectSubscription, selectUser } from "../../state/features/userSlice";
import { loadStripe } from "@stripe/stripe-js";

const Plans = () => {
  const user = useSelector(selectUser);
  const subscription = useSelector(selectSubscription);
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    const productRef = collection(db, "products");
    const q = query(productRef, where("active", "==", true));
    getDocs(q).then((querySnapshot: any) => {
      const products: any = {};
      querySnapshot.forEach(async (productDoc: any) => {
        products[productDoc.id] = productDoc.data();
        const priceSnap = await getDocs(
          query(collection(productDoc.ref, "prices"))
        );
        priceSnap.docs.forEach((price: any) => {
          products[productDoc.id].prices = {
            priceId: price.id,
            priceData: price.data(),
          };
          setProducts(products);
        });
      });
    });
  }, []);

  const loadCheckout = async (priceId: string) => {
    const docRef = doc(db, "customers", user.uid);
    const checkOutRef = collection(docRef, "checkout_sessions");
    const sessionRef = await addDoc(checkOutRef, {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

    onSnapshot(sessionRef, async (snap: DocumentData) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        // We have a session, let's redirect to Checkout
        // Init Stripe
        const stripe = await loadStripe(
          "pk_test_51LfUqDLFC3vmHF5tcl8HtSdwKdOLDzwMUx0dwWTMxpTb9EDI6tiKicLedo1t9MtV05S6XhI3uZ2w0KSxzXENJBBi00GJBplTRU"
        );

        stripe?.redirectToCheckout({
          sessionId,
        });
      }
    });
  };

  return (
    <div className="plansScreen">
      <br />
      {subscription && (
        <p>
          Renewal date:{" "}
          {new Date(
            subscription?.current_period_end * 1000
          ).toLocaleDateString()}
        </p>
      )}
      {products &&
        (
          Object.entries(products) as [
            productId: string,
            productData: PlanType
          ][]
        ).map(([productId, productData]) => {
          const isCurrentPlan =
            !!subscription?.role &&
            productData.name.toLowerCase().includes(subscription.role);

          return (
            <Plan key={productId} isCurrentPlan={isCurrentPlan}>
              <div>
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>
              <SubscribeButton
                onClick={() =>
                  !isCurrentPlan && loadCheckout(productData.prices.priceId)
                }
              >
                {isCurrentPlan ? "Current Plan" : "Subscribe"}
              </SubscribeButton>
            </Plan>
          );
        })}
    </div>
  );
};

export default Plans;
