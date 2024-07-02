import { ReactNode } from "react";

export interface ButtonProps {
  href?: string;
  children: ReactNode;
  handleClick?: () => void;
  className?: string;
  type?: "submit" | "button";
}

export type buttonComponentProps = Pick<ButtonProps, "children">