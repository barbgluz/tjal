import React, { Component } from 'react';

import motions from '../../data/motions';
import details from '../../data/details';

import styles from './styles.module.css';

import Motion from '../../components/Motion';
import Details from '../../components/Details';

class Process extends Component {

  render() {

    let movimentacoes = <p>Não há movimentações.</p>
    movimentacoes = motions.map(motion => {
      return(
        <Motion title={motion.title} date={motion.date} content={motion.content} />
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
            <Details detail={details}/>
          </div>
          <hr />
          <div className={styles.Partes}>
            <p>parte</p>
          </div>
        </div>
      </div>
      )
  }
}

export default Process;
