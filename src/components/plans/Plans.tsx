import React from "react";
import db from "../../firebase";
import { collection, where, getDocs, query } from "firebase/firestore";
import type { Plan as PlanType, Product } from "../../types";
import { Plan } from "./Plans.style";
import { useSelector } from "react-redux";
import { selectSubscription } from "../../state/features/userSlice";
import SubscribeButton from "./SubscribeButton";

const Plans = React.memo(
  () => {
    const subscription = useSelector(selectSubscription);
    const [products, setProducts] = React.useState<Product>();
    const [checkoutRequestFired, setCheckoutRequestFired] =
      React.useState<boolean>(false);

    React.useEffect(() => {
      // Fetch all available plans
      const productRef = collection(db, "products");
      const q = query(productRef, where("active", "==", true));
      getDocs(q).then((querySnapshot) => {
        const products: Product = {};
        querySnapshot.forEach(async (productDoc) => {
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
              <Plan
                key={productId}
                isCurrentPlan={isCurrentPlan}
                checkoutRequestFired={checkoutRequestFired}
              >
                <div>
                  <h5>{productData.name}</h5>
                  <h6>{productData.description}</h6>
                </div>
                <SubscribeButton
                  isCurrentPlan={isCurrentPlan}
                  priceId={productData.prices?.priceId}
                  onCheckoutRequestFired={(value) =>
                    setCheckoutRequestFired(value)
                  }
                  disabled={checkoutRequestFired}
                />
              </Plan>
            );
          })}
      </div>
    );
  },
  () => true
);

export default Plans;
