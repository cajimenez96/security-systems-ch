"use client"
import { useState, useEffect } from "react";
import { IAlert } from "./Alert.types";
import styles from "./alert.module.css";

const Alert: React.FC<IAlert> = ({ children, show, duration = 30000 }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    let timer;
    if (show) {
      setVisible(true);
      timer = setTimeout(() => {
        setVisible(false);
      }, duration);
    } else {
      setVisible(false);
    }
    return () => clearTimeout(timer);
  }, [show, duration]);

  return (
    visible && (
      <div className={styles.alert}>
        {children}
      </div>
    )
  );
};

export default Alert;
