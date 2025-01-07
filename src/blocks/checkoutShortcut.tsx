interface CheckoutShortcutProps {
  total: number;
  className?: string;
}

export default function CheckoutShortcut({ total = 0, className }: CheckoutShortcutProps) {
  return (
    <div className={`flex items-center justify-center w-full bottom-12 -mt-6 ${className}`}>
    <button className="bg-white text-primary hover:text-white px-4 py-2 w-full grid grid-cols-2 gap-2 border border-white/20 rounded-lg hover:bg-white/10 transition-all duration-300 text-center">
      <span className="font-bold">
        ${total.toFixed(2)}
      </span>
      <span className="text-md font-bold">
        Checkout
      </span>
    </button>
  </div>
  )
}