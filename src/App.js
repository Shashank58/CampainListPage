import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import CampaignList from "./pages/campaigns";
import EmployeeList from "./pages/employee";
import Modal from "./base/Modal";
import {useSelector} from "react-redux";

const App = () => {
  const base = useSelector(state => state.base);
  return (
      <div>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/campaign"/>
            <Route path="/campaign" component={CampaignList}/>
            <Route path="/employee" component={EmployeeList}/>
          </Switch>
        </Router>
        <Modal {...base.payload} />
      </div>
  );
}

export default App;
