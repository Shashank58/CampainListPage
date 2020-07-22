import React from 'react';
import styles from './Header.module.scss';

const Index = (props) => (
    <nav className={styles.navBar}>
      <a className={styles.navComponent} href="/campaign">Campaigns</a>
      <a className={styles.navComponent} href="/employee">Employees</a>
      {props.children}
    </nav>
);

export default Index;
