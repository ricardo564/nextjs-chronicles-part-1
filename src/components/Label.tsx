import type { FC } from "react";

interface Props {
  value: string;
  className?: string;
  htmlFor?: string;
}

const Label: FC<Props> = ({ value, className, htmlFor }: Props) => {
  return (
    <div className={className}>
      <label className="d-label" htmlFor={htmlFor}>
        <span className="d-label-text text-[1rem] font-medium">{value}</span>
      </label>
    </div>
  );
};

export default Label;
