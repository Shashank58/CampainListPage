import React, {useRef, useState} from 'react';
import styles from './Header.module.scss';
import {useHistory} from "react-router";

const Header = (props) => {
  const history = useHistory();
  const location = history.location.pathname;
  const onRouteChanged = (route) => {
    if (location === route) return;
    history.push(route);
  }
  return (
      <nav className={styles.navBar}>
        <span onClick={() => onRouteChanged("/campaign")} className={location === "/campaign" ? styles.selectedNavComponent : styles.navComponent}>
          Campaigns
        </span>
        <span onClick={() => onRouteChanged("/employee")} className={location === "/employee" ? styles.selectedNavComponent : styles.navComponent}>
          Employees
        </span>
        {props.children}
      </nav>
  );
}

export default Header;
