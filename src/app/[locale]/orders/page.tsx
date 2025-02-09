import type { FC } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import ComingSoon from "@/components/ComingSoon";
import { locales } from "@/config/i18n-config";

const OrdersPage: FC = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen flex items-center justify-center">
        <ComingSoon />
      </div>
    </DefaultLayout>
  );
};

export async function generateStaticParams() {
  return locales.map((locale) => ({
    params: { locale },
  }));
}

export default OrdersPage;
