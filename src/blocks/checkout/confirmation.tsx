import Button from "@/components/Button";
import ComingSoon from "@/components/ComingSoon";
import Link from "@/components/Link";

const ConfirmationStep = () => {
  return (
    <div className="w-full min-h-[400px] transition-all duration-300 ease-in-out">
      <ComingSoon />

      <div className="grid grid-cols-2 gap-4 items-center justify-between">
        <Link href="/checkout?step=customer">
          <Button
            type="button"
            label="Back"
            className="w-auto"
          />
        </Link>

          <Link href="/orders">
            <Button
              type="button"
              label="Finalize Order"
              className="w-auto ml-auto"
            />
          </Link>
      </div>
    </div>
  );
};

export default ConfirmationStep
