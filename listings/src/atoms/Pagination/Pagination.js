import React from "react";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Pagination.module.scss";

const Pagination = (props) => {
  return (
      <div className={styles.container}>
        <span className={styles.results}>{props.totalItems}</span>
        <FontAwesomeIcon
            onClick={() => props.pageNumberChange(props.selectedPageNumber - 1)}
            className={styles.arrows}
            icon={faChevronLeft}
        />
        <ul>
          {props.pages?.map((pageNum) => {
            return (
                <li className={props.selectedPageNumber === pageNum ? styles.selected : ""} onClick={() => props.pageNumberChange(pageNum)}>{pageNum}</li>
            );
          })}
        </ul>
        <FontAwesomeIcon
            onClick={() => props.pageNumberChange(props.selectedPageNumber + 1)}
            className={styles.arrows}
            icon={faChevronRight}
        />
      </div>
  );
}

export default Pagination;
