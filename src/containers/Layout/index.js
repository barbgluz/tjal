import React, { Component } from 'react';

import styles from './styles.module.css';

import Search from '../Search/index';

class Layout extends Component {

  render() {
    return(
      <div className={styles.Layout}>
        <Search results="false" />
      </div>
    );
  }
}

export default Layout;
