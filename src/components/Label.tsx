import type { FC } from "react";

interface Props {
  value: string;
  className?: string;
}

const Label: FC<Props> = ({ value, className }: Props) => {
  return (
    <div className={className}>
      <label className="d-label">
        <span className="d-label-text text-[1rem] font-medium">{value}</span>
      </label>
    </div>
  );
};

export default Label;
