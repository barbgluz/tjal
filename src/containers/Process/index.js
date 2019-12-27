import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.css';

import Motion from '../../components/Motion';
import Details from '../../components/Details';
import Part from '../../components/Part';

class Process extends Component {

  render() {

    let movimentacoes = <p>Não há movimentações.</p>
    movimentacoes = this.props.process.movimentacoes.map((motion, i) => {
      return(
        <Motion title={motion.titulo} date={motion.data} content={motion.conteudo} key={i} />
      )
    })

    let partes = null
    partes = this.props.process.partes.map((part, i) => {
      return (
        <Part name={part.nome} type={part.tipo} representation={part.representantes} key={i}/>
      )
    })

    return(
      <div className={styles.Process}>
        <div className={styles.Main}>
          <h1>Processo n. {this.props.process.numero_unico} </h1>

          <div className={styles.Movimentacoes}>
            { movimentacoes }
          </div>
        </div>

        <div className={styles.Sidebar}>
          <div className={styles.Detalhes}>
            <h4>Detalhes do processo</h4>
            <Details detail={this.props.process}/>
          </div>
          <hr />
          <div className={styles.Partes}>
            <h4>Partes envolvidas</h4>
            { partes }
          </div>
        </div>
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    process: state.process
  }
}

export default connect(mapStateToProps)(Process);
