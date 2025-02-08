import type { FC } from "react";
import { useTranslations } from "next-intl";

interface ComingSoonProps {
  className?: string;
}

const ComingSoon: FC<ComingSoonProps> = ({ className }) => {
  const t = useTranslations('comingSoon');
  return (
    <div className={`min-h-screen min-w-screen flex items-center justify-center p-4 ${className}`}>
      <div className="text-center space-y-8 animate-fade-in relative">
        <div className="absolute -top-16 -left-16 text-6xl opacity-20 rotate-45">
          🌿
        </div>
        <div className="absolute -bottom-16 -right-16 text-6xl opacity-20 -rotate-45">
          🌱
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-emerald-400/20">
          <h1 className="text-4xl md:text-6xl font-bold text-emerald-50 mb-4">
            {t('title')}
          </h1>

          <p className="text-lg md:text-xl text-emerald-100 mb-8">
            {t('subtitle')}
          </p>

          <div className="flex justify-center gap-4">
            <div className="text-2xl animate-bounce delay-100">🌱</div>
            <div className="text-2xl animate-bounce delay-200">🪴</div>
            <div className="text-2xl animate-bounce delay-300">🌿</div>
          </div>
        </div>

        <p className="text-emerald-200/60 text-sm mt-8">
          {t('description')}
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
