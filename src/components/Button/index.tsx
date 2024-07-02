import Link from "next/link";
import { ButtonProps, buttonComponentProps} from "./Button.types";
import styles from './button.module.css';


const ButtonContent: React.FC<buttonComponentProps> = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}

const Button: React.FC<ButtonProps> = ({
  href,
  children,
  className = "",
  type = "button",
  handleClick
}) => {

  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      type={type}
    >
      {href ? (
        <Link href={href}>
          <ButtonContent>
            {children}
          </ButtonContent>
        </Link>
      ) : (
        <ButtonContent>
          {children}
        </ButtonContent>
      )}
    </button>
  );
}

export default Button;
