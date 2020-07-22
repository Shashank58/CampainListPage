import React, { Fragment } from "react";
import CampaignItem from "../../atoms/CampaignItem";

const ItemList = (props) => {
  if (props.payload && props.payload.length) {
    console.log("Payload at Item List", props.payload);
    return (
        <Fragment>
          {props.payload.map((item) => <CampaignItem key={item['_id']} {...item} />)}
        </Fragment>
    );
  }
  return null;
}

export default ItemList;
