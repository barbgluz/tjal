import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.css';

import Search from '../Search/index';
import Process from '../Process/index';
import Spinner from '../../ui/Spinner/index';

class Layout extends Component {

  constructor(props) {
    super(props)

    this.state = {
      results: this.props.results
    }
  }

  render() {

    let results = this.props.process != null? <Process process={this.props.process}/> : null
    let loading = this.props.loading? <div className={styles.Spinner}> <Spinner /> </div> : null

    return(
      <div className={styles.Layout}>
        <Search results={this.state.results} />
        <div className={styles.Container}>
          { loading }
          { results }
        </div>
      </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    results: state.process != null,
    process: state.process
  }
}

export default connect(mapStateToProps)(Layout);
