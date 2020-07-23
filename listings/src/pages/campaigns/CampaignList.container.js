import React, {useEffect, useState} from "react";
import Header from "../../base/Header";
import SearchInput from "../../atoms/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import {deleteCampaign, getCampaigns, searchCampaigns} from "../../actions/campaignActions";
import ItemList from "../../base/ItemList";
import Pagination from "../../atoms/Pagination";
import styles from "./CampaignList.module.scss";

const header = ["Company", "Type", "Name", "Actions"];

const CampaignList = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const onPageNumberChanged = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  useEffect(() => {
    dispatch(getCampaigns(pageNumber));
  }, [dispatch, pageNumber]);
  const searchCampaign = (event) => {
    if (event.target?.value) {
      dispatch(searchCampaigns(event.target.value));
    } else {
      dispatch(getCampaigns(pageNumber));
    }
  };
  const campaigns = useSelector((state) => state.campaign);
  const deleteAction = (pageNumber, index) => dispatch(deleteCampaign(pageNumber, index))
  return (
      <div className={styles.container}>
        <Header />
        <div className={styles.campaignContainer}>
          <SearchInput searchCampaign={searchCampaign} totalItems={campaigns.payload?.totalItems} />
          <ItemList
              payload={campaigns.payload?.campaigns}
              pageNumber={pageNumber}
              header={header}
              deleteAction={deleteAction}
          />
          <Pagination
              pageNumberChange={onPageNumberChanged}
              pages={campaigns.payload?.pages}
              selectedPageNumber={pageNumber}
          />
        </div>
      </div>
  );
}

export default CampaignList;
