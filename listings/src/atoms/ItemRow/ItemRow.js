import React, {Fragment} from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ItemRow.module.scss";
import {toggleModal} from "../../actions/baseAction";
import {useDispatch} from "react-redux";

const ItemRow = (props) => {
  const { data, type, dataType, pageNumber, index, deleteAction, meta, validKeys } = props;
  const dispatch = useDispatch();

  const isHeading = type === "Heading";
  return (
      <tr>
        {Object.keys(data).filter(key => validKeys?.includes(key)).map((key) => <Column data={data[key]} isHeading={isHeading} />)}
        {isHeading ? null :
            <td>
              <FontAwesomeIcon onClick={() => dispatch(toggleModal(true, dataType, meta))} className={styles.actionIcon} icon={faEdit} />
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
