import type { FC } from "react";

interface Props {
  value: string;
  className?: string;
  htmlFor?: string;
}

const Label: FC<Props> = ({ value, className, htmlFor }: Props) => {
  return (
    <div className={className}>
      <label className="animation-fade-in-from-left transition-all duration-300" htmlFor={htmlFor}>
        <span className="text-[1rem] font-medium">{value}</span>
      </label>
    </div>
  );
};

export default Label;
