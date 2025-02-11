import type { FC } from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import ComingSoon from "@/components/ComingSoon";
import RandomBackground from "@/blocks/randomBackground";

const OrdersPage: FC = () => {
  return (
    <DefaultLayout>
      <RandomBackground />

      <div className="min-h-screen flex items-center justify-center">
        <ComingSoon />
      </div>
    </DefaultLayout>
  );
};

export default OrdersPage;
