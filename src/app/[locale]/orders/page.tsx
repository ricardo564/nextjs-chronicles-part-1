import type { FC } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import ComingSoon from "@/components/ComingSoon";

const OrdersPage: FC = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen flex items-center justify-center">
        <ComingSoon />
      </div>
    </DefaultLayout>
  );
};

export default OrdersPage;
