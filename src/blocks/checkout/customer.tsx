import Button from "@/components/Button";
import Link from "@/components/Link";

const CustomerStep = () => {
  return (
    <div className="min-h-screen">
      <h1>Customer</h1>
      <Link href="/checkout?step=payment">
        <Button label="Go to Payment" />
      </Link>
    </div>
  );
};

export default CustomerStep
