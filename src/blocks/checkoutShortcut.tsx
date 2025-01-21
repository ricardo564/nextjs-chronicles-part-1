import Button from "@/components/Button";
import { useShoppingCartStore } from "@/store/shoppingCartStore";
import { useTranslations } from "next-intl";

interface CheckoutShortcutProps {
  className?: string;
  loading?: boolean;
}

export default function CheckoutShortcut({ className, loading }: CheckoutShortcutProps) {
  const { items: cartItems } = useShoppingCartStore();
  const totalOnStore = cartItems.reduce((acc, cartItem) => acc + cartItem.item.genus_id * cartItem.quantity, 0);
  const translateCart = useTranslations('cart');

  return (
    <div className={`flex items-center justify-center w-full bottom-12 -mt-6 ${className}`}>
    <Button
      loading={loading}
      className="bg-white !text-black hover:text-white px-4 py-2 w-full grid grid-cols-2 gap-2 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 text-center"
    >
      <span className="font-bold">
        ${totalOnStore.toFixed(2)}
      </span>
      <span className="text-md font-bold">
        {translateCart('checkout')}
      </span>
    </Button>
  </div>
  )
}