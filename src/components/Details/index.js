import React from 'react';

import styles from './styles.module.css';

const details = (props) => {

  return(
    <div>
      <p><span className={styles.Label}>Juiz</span> { props.detail.juiz }</p>
      <p><span className={styles.Label}>Classe</span> { props.detail.classe }</p>
      <p><span className={styles.Label}>Área</span> { props.detail.area }</p>
      <p><span className={styles.Label}>Assunto</span> { props.detail.assunto }</p>
      <p><span className={styles.Label}>Valor</span> R$ { props.detail.valor }</p>
    </div>
  )
}

export default details;
