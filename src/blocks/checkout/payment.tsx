import Button from "@/components/Button";
import Link from "@/components/Link";

const PaymentStep = () => {
  return (
    <div className="min-h-screen">
      <h1>Payment</h1>
      <Link href="/checkout?step=confirmation">
        <Button label="Go to Confirmation" />
      </Link>
    </div>
  );
};

export default PaymentStep
