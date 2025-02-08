import Button from "@/components/Button";
import ComingSoon from "@/components/ComingSoon";
import Link from "@/components/Link";

const CustomerStep = () => {
  return (
    <div className="min-h-screen">
      <ComingSoon />

      <Link href="/checkout?step=payment">
        <Button label="Go to Payment" />
      </Link>
    </div>
  );
};

export default CustomerStep
