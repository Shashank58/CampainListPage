import React from "react";
import CampaignItem from "../../atoms/CampaignItem";
import styles from "./ItemList.module.scss";

const header = {
  company: "Company",
  type: "Type",
  name: "Name",
  action: "Actions"
}

const ItemList = (props) => {
  const { payload, pageNumber } = props;
  if (payload && payload.length) {
    return (
        <table className={styles.container}>
          <CampaignItem type={"Heading"} data={header}/>
          {payload.map((item, index) => <CampaignItem index={index} pageNumber={pageNumber} key={item['_id']} type={"Data"} data={item}/>)}
        </table>
    );
  }
  return null;
}

export default ItemList;
