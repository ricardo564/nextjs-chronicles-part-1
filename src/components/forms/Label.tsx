import type { FC } from "react";
import { ReactNode } from "react";

interface Props {
  htmlFor: string;
  children: ReactNode;
}

const Label: FC<Props> = ({ htmlFor, children }) => {
  return <label htmlFor={htmlFor}>{children}</label>;
};

export default Label;