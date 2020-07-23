import React from "react";
import ItemRow from "../../atoms/CampaignItem";
import styles from "./ItemList.module.scss";

const ItemList = (props) => {
  const { payload, pageNumber, header, deleteAction } = props;
  if (payload && payload.length) {
    return (
        <table className={styles.container}>
          <ItemRow type={"Heading"} data={header}/>
          {payload.map((item, index) => {
            return (
                <ItemRow
                    index={index}
                    pageNumber={pageNumber}
                    key={item['_id']}
                    type={"Data"}
                    data={item}
                    deleteAction={deleteAction}
                />
                );
          })}
        </table>
    );
  }
  return null;
}

export default ItemList;
