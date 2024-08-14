import { loadStripe } from "@stripe/stripe-js";
import {
  addDoc,
  collection,
  doc,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../../App.style";
import db from "../../firebase";
import { selectUser } from "../../state/features/userSlice";
import { SubscribeButton as Button } from "./Plans.style";

const SubscribeButton: React.FC<{
  priceId: string;
  isCurrentPlan: boolean;
  disabled: boolean;
  onCheckoutRequestFired: (value: boolean) => void;
}> = ({ isCurrentPlan, priceId, onCheckoutRequestFired, disabled }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const user = useSelector(selectUser);

  const loadCheckout = async () => {
    setIsLoading(true);
    onCheckoutRequestFired(true);

    try {
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
          throw new Error(`An error occured: ${error.message}`);          
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
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button onClick={loadCheckout} disabled={disabled}>
      {isLoading ? (
        <Spinner size={20} color="#fbfaf9" />
      ) : isCurrentPlan ? (
        "Current Plan"
      ) : (
        "Subscribe"
      )}
    </Button>
  );
};

export default React.memo(
  SubscribeButton,
  (prev, next) =>
    prev.disabled === next.disabled &&
    prev.isCurrentPlan === next.isCurrentPlan &&
    prev.onCheckoutRequestFired === next.onCheckoutRequestFired &&
    prev.priceId === next.priceId
);
