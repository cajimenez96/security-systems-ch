import { InputProps } from "./Input.types";
import styles from "./input.module.css";

const Input: React.FC<InputProps> = ({ 
  label,
  placeholder,
  type = 'text',
  name,
  id,
  hasError = false,
  required = false,
  error,
  handleChange,
}) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea 
          className={`${styles.input} ${styles.textarea}`}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          onChange={handleChange}
          id={id}
          required={required}
          placeholder={placeholder}
          className={styles.input}
        />
      )}
      {hasError && (<p className={styles.alert}>{error}</p>)}
    </div>
  );
};

export default Input;
