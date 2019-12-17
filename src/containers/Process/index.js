import React, { Component } from 'react';

import motions from '../../data/motions';
import details from '../../data/details';
import parts from '../../data/parts';

import styles from './styles.module.css';

import Motion from '../../components/Motion';
import Details from '../../components/Details';
import Part from '../../components/Part';

class Process extends Component {

  render() {

    let movimentacoes = <p>Não há movimentações.</p>
    movimentacoes = motions.map(motion => {
      return(
        <Motion title={motion.title} date={motion.date} content={motion.content} />
      )
    })

    let partes = null
    partes = parts.map(part => {
      return (
        <Part name={part.nome} type={part.tipo} representation={part.representantes}/>
      )
    })

    return(
      <div className={styles.Process}>
        <div className={styles.Main}>
          <h1>Processo n. 0067154-55.2010.8.02.0001 </h1>

          <div className={styles.Movimentacoes}>
            { movimentacoes }
          </div>
        </div>

        <div className={styles.Sidebar}>
          <div className={styles.Detalhes}>
            <h4>Detalhes do processo</h4>
            <Details detail={details}/>
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

export default Process;
