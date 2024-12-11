import { CheckboxProps } from "./checkbox.props";
import styles from "./checkbox.module.css";
import { nanoid } from "nanoid";

export const Checkbox = ({
  title,
  value,
  checked,
  onChange,
  setSelectedStops,
}: CheckboxProps) => {
  return (
    <div className={styles.box} onClick={onChange}>
      <div className={styles.checkboxContainer}>
        <label className={styles.customCheckbox}>
          <input
            type="checkbox"
            value={value}
            id={nanoid() + value}
            checked={checked}
            onChange={() => {}}
            className={styles.checkbox}
          />
          <span className={styles.span}></span>
        </label>
        <span className={styles.title}>{title}</span>
      </div>
      <button
        className={styles.button}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedStops([value]);
        }}
      >
        ТОЛЬКО
      </button>
    </div>
  );
};
