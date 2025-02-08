import Button from "@/components/Button";
import ComingSoon from "@/components/ComingSoon";
import Link from "@/components/Link";

const PaymentStep = () => {
  return (
    <div className="min-h-screen">
      <ComingSoon />

      <Link href="/checkout?step=confirmation">
        <Button label="Go to Confirmation" />
      </Link>
    </div>
  );
};

export default PaymentStep
