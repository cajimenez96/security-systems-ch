import React from "react";
import styles from "./text.module.css";
import { TextProps } from "./Text.types";

const Text = ({children, className, ...rest}: TextProps) => {
  return (
    <p className={`${styles.text} ${className}`} {...rest}>
      {children}
    </p>
  )
};

export default Text;
