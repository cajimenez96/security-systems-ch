import { ReactNode } from "react";

export interface IAlert {
  children?: ReactNode;
  show: boolean;
  duration?: number;
}