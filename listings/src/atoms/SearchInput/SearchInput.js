import React from "react";
import styles from "./SearchInput.module.scss";

const SearchInput = (props) => {
  return (
      <div className={styles.inputContainer}>
        <input onChange={props.searchCampaign} className={styles.searchInput} placeholder={'Search by campaign name...'} />
        <span className={styles.results}>{props.totalItems}</span>
      </div>
  );
}

export default SearchInput;
