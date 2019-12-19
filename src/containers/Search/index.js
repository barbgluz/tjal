import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import tribunais from '../../data/tribunais'
import image from './background.jpg'

import styles from './styles.module.css';

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      results: this.props.results,
      processNumber: ""
    }

    this.handleChange = this.handleChange.bind(this);

  }

  search(e) {
    e.preventDefault()
    this.setState({results: !this.state.results})
  }

  handleChange(event) {
    let number = event.target.value
    number = number.replace(/[.*_*\-*]/g, '')

    this.setState({processNumber: number})
  }

  render() {
    let options = null;

    options = tribunais.map(option => {
      return(
        <option value={option.id} key={option.id}>{option.nome}</option>
        )
    })

    let classes = this.state.results? [styles.collapse] : ''

    return(
      <div className={styles.Search + ' ' + classes} id="searchContainer">
        <img src={image} alt="" />
        <h1>Buscador de Processos</h1>
        <p>Selecione um tribunal para listar os processos ou buscar pelo número unificado</p>

        <form>
          <select aria-label="Tribunal">
            <option value="">Tribunal</option>
            {options}
          </select>

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

export default Search;
