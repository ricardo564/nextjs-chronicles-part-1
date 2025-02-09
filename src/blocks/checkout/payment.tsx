import Button from "@/components/Button";
import ComingSoon from "@/components/ComingSoon";
import Link from "@/components/Link";
import { useTranslations } from "next-intl";


const PaymentStep = () => {
  const t = useTranslations('checkout');

  return (
    <div className="min-h-screen">
      <ComingSoon />

      <div className="grid grid-cols-2 gap-4 items-center justify-between">
        <Link href="/checkout?step=confirmation">
          <Button
            type="button"
            label={t('payment.back.label')}
            className="w-auto"
          />
        </Link>

        <Link href="/checkout?step=confirmation">
          <Button
            type="submit"
            label={t('payment.next.label')}
            className="w-auto ml-auto"
          />
        </Link>
      </div>
    </div>
  );
};

export default PaymentStep
