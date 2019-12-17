import React, { Component } from 'react';

import styles from './styles.module.css';

class Process extends Component {

  render() {
    return(
      <div className={styles.Process}>
        <div className={styles.Main}>
          <h1>Processo n. </h1>

          <div className={styles.Movimentacoes}>
            <p>movimentacao</p>
          </div>
        </div>

        <div className={styles.Sidebar}>
          <div className={styles.Detalhes}>
            <p>Detalhe</p>
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
