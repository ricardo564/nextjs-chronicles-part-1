import type { FC } from "react";
import { ReactNode } from "react";

interface Props {
  value: string;
  className?: string;
  htmlFor?: string;
  children?: ReactNode;
}

const Label: FC<Props> = ({ value, className, htmlFor, children }: Props) => {
  return (
    <div className={className}>
      <label
        className="aimation-fade-in-from-left transition-all duration-300 flex flex-row items-center justify-center"
        htmlFor={htmlFor}
      >
        <span className="text-[1rem] font-medium w-full">{value}</span>
        {children}
      </label>
    </div>
  );
};

export default Label;
