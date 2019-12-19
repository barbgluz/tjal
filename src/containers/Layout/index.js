import React, { Component } from 'react';

import styles from './styles.module.css';

import Search from '../Search/index';
import Process from '../Process/index';

class Layout extends Component {

  constructor() {
    super()

    this.state = {
      results: true
    }
  }

  render() {

    let results = this.state.results? <Process /> : null

    return(
      <div className={styles.Layout}>
        <Search results={this.state.results} />
        <div className={styles.Container}>
          { results }
        </div>
      </div>
      );
  }
}

export default Layout;
