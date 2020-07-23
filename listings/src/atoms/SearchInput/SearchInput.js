import React from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = () => {
  return (
      <div className={styles.inputContainer}>
        <input className={styles.searchInput} placeholder={'Search by campaign name...'} />
      </div>
  );
}

export default SearchInput;
