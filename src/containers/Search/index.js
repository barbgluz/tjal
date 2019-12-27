import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';

import image from './background.jpg'

import * as actions from '../../store/index';
import styles from './styles.module.css';

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      results: null,
      processNumber: ""
    }

    this.handleChange = this.handleChange.bind(this);

  }

  search(e) {
    e.preventDefault()

    this.props.onSearch(this.state.processNumber)
    this.setState({'results': this.props.results})
  }

  handleChange(event) {
    let number = event.target.value
    number = number.replace(/[.*_*\-*]/g, '')

    this.setState({processNumber: number})
  }

  render() {

    let classes = this.props.results? [styles.collapse] : ''

    return(
      <div className={styles.Search + ' ' + classes} id="searchContainer">
        <img src={image} alt="" />
        <h1>Buscador de Processos</h1>
        <p>Selecione um tribunal para listar os processos ou buscar pelo número unificado</p>

        <form>
          <InputMask
            mask="9999999-99.9999.9.99.9999"
            aria-label="Número do processo"
            value={this.state.processNumber}
            onChange={this.handleChange}
            placeholder="Número do processo"/>

          <button onClick={(event) => this.search(event)}>Buscar</button>
        </form>
      </div>
      );
}
}

const mapStateToProps = state => {
  return {
    results: state.process != null,
    process: state.process
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: (num) => {
      dispatch(actions.fetchProcess(num))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
