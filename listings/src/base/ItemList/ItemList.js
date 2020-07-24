import React from "react";
import ItemRow from "../../atoms/ItemRow";
import styles from "./ItemList.module.scss";

const ItemList = (props) => {
  const { payload, pageNumber, header, deleteAction, dataType, validKeys } = props;
  if (payload && payload.length) {
    return (
        <table className={styles.container}>
          <ItemRow type={"Heading"} data={header} validKeys={validKeys} />
          {payload.map((item, index) => {
            return (
                <ItemRow
                    index={index}
                    pageNumber={pageNumber}
                    key={item['_id']}
                    type={"Data"}
                    data={item}
                    validKeys={validKeys}
                    dataType={dataType}
                    meta={{title: item[0], index, pageNumber}}
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
