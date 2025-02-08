import Button from "@/components/Button";
import Link from "@/components/Link";

const ConfirmationStep = () => {
  return (
    <div className="min-h-screen">
      <h1>Confirmation</h1>
      <Link href="/orders">
        <Button label="Finalize Order" />
      </Link>
    </div>
  );
};

export default ConfirmationStep
