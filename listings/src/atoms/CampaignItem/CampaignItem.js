import React from "react";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import styles from "./CampaignItem.module.scss";
import {deleteCampaign} from "../../actions/campaignActions";

const CampaignItem = (props) => {
  const { data, type, pageNumber, index } = props;
  const dispatch = useDispatch();
  const isHeading = type === "Heading";
  return (
      <tr>
        {isHeading ? <th>{data.company}</th> : <td className={styles.company}>{data.company}</td>}
        {isHeading ? <th>{data.name}</th> : <td>{data.name}</td>}
        {isHeading ? <th>{data.type}</th> : <td>{data.type}</td>}
        {isHeading ? <th>{data.action}</th> :
            <td>
              <FontAwesomeIcon className={styles.actionIcon} icon={faEdit} />
              <FontAwesomeIcon onClick={() => dispatch(deleteCampaign(pageNumber, index))} className={styles.actionIcon} icon={faTrash} />
            </td>}
      </tr>
  );
}

export default CampaignItem;
