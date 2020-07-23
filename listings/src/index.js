import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from 'redux';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import './index.css';
import EmployeeList from './pages/employee';
import * as serviceWorker from './serviceWorker';
import CampaignList from "./pages/campaigns";
import Modal from "./pages/Modal";

const store = createStore(rootReducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/campaign"/>
            <Route path="/campaign" component={CampaignList} />
            <Route path="/employee" component={EmployeeList} />
            <Route exact path="/modal/:id" component={Modal} />
          </Switch>
        </Router>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
