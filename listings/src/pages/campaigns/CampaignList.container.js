import React, { useEffect } from "react";
import Header from "../../base/Header";
import SearchInput from "../../atoms/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { getCampaigns } from "../../actions/campaignActions";
import ItemList from "../../base/ItemList";

const CampaignList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);
  const campaigns = useSelector((state) => state.campaign);
  return (
      <div>
        <Header />
        <SearchInput />
        <ItemList payload={campaigns.payload} />
      </div>
  );
}

export default CampaignList;
