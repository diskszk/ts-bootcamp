import React, { FC } from "react";
import styles from "../../styles/atoms/button.module.scss";

type Props = {
  onClick: (_ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  label: string;
};

const SearchButton: FC<Props> = React.memo(({ onClick, label }) => {
  return (
    <button className={styles.button__search} onClick={onClick}>
      {label}
    </button>
  );
});

export default SearchButton;
