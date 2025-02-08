import Button from "@/components/Button";
import ComingSoon from "@/components/ComingSoon";
import Link from "@/components/Link";

const ConfirmationStep = () => {
  return (
    <div className="min-h-screen">
      <ComingSoon />

      <Link href="/orders">
        <Button label="Finalize Order" />
      </Link>
    </div>
  );
};

export default ConfirmationStep
