import React, {Fragment} from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ItemRow.module.scss";

const ItemRow = (props) => {
  const { data, type, pageNumber, index, deleteAction } = props;

  const isHeading = type === "Heading";
  return (
      <tr>
        {data.map((item) => <Column data={item} isHeading={isHeading} />)}
        {isHeading ? null :
            <td>
              <FontAwesomeIcon className={styles.actionIcon} icon={faEdit} />
              <FontAwesomeIcon onClick={() => deleteAction(pageNumber, index)} className={styles.actionIcon} icon={faTrash} />
            </td>}
      </tr>
  );
}

const Column = (props) => {
  const { isHeading, data } = props;
  return (
      <Fragment>
        {isHeading ? <th>{data}</th> : <td>{data}</td>}
      </Fragment>
  );
}

export default ItemRow;
