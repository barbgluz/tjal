import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles.module.css';

import Motion from '../../components/Motion';
import Details from '../../components/Details';
import Part from '../../components/Part';

export class Process extends Component {

  render() {

    let movimentacoes = <p>Não há movimentações.</p>
    if(this.props.motions) {
      movimentacoes = this.props.motions.map( motion => {
        return(
          <Motion title={motion.titulo}
            date={motion.data}
            content={motion.conteudo}
            key={motion.id} />
          )
      })
    }

    let partes = null
    if(this.props.parts) {
      partes = this.props.process.partes.map( part => {
        return (
          <Part name={part.nome}
            type={part.tipo}
            representation={part.representantes}
            key={part.id}/>
          )
      })
    }

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
    process: state.process,
    motions: state.process.movimentacoes,
    parts: state.process.partes
  }
}

export default connect(mapStateToProps)(Process);
