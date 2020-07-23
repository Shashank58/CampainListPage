import React, {useEffect, useState} from "react";
import Header from "../../base/Header";
import SearchInput from "../../atoms/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { getCampaigns } from "../../actions/campaignActions";
import ItemList from "../../base/ItemList";
import Pagination from "../../atoms/Pagination";

const CampaignList = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const onPageNumberChanged = (pageNumber) => {
    setPageNumber(pageNumber);
  };
  useEffect(() => {
    dispatch(getCampaigns(pageNumber));
  }, [dispatch, pageNumber]);
  const campaigns = useSelector((state) => state.campaign);
  return (
      <div>
        <Header />
        <SearchInput />
        <ItemList payload={campaigns.payload?.campaigns} pageNumber={pageNumber} />
        <Pagination
            pageNumberChange={onPageNumberChanged}
            totalItems={campaigns.payload?.totalItems}
            pages={campaigns.payload?.pages}
            selectedPageNumber={pageNumber}
        />
      </div>
  );
}

export default CampaignList;
