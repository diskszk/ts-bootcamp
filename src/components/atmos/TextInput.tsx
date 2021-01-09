import React, { FC } from "react";
import styles from "../../styles/atoms/form.module.scss";

type Props = {
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string | number;
};
const TextInput: FC<Props> = React.memo(({ onChange, type, value }) => {
  return (
    <input
      className={styles.form__text}
      onChange={onChange}
      value={value}
      type={type}
    />
  );
});

export default TextInput;
