import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import tribunais from '../../data/tribunais'

import styles from './styles.module.css';

class Search extends Component {

  constructor(props) {
    super(props)

    this.state = {
      results: this.props.results === 'true'
    }
  }

  search(e) {
    e.preventDefault()
    this.setState({results: !this.state.results})
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
        <h1>Buscar</h1>
        <p>Selecione um tribunal para listar os processos ou buscar pelo número unificado</p>

        <form>
          <select>
            <option value="">Tribunal</option>
            {options}
          </select>

          <InputMask mask="9999999-99.9999.9.99.9999" placeholder="Número do processo"/>

          <button onClick={(event) => this.search(event)}>Buscar</button>
        </form>
      </div>
      );
}
}

export default Search;
