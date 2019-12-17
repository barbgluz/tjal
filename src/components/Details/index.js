import React from 'react';

import styles from './styles.module.css';

const details = (props) => {

  return(
    <div>
      <h4>Detalhes do processo</h4>

      <p><span class={styles.Label}>Juiz</span> { props.detail.juiz }</p>
      <p><span class={styles.Label}>Classe</span> { props.detail.classe }</p>
      <p><span class={styles.Label}>Área</span> { props.detail.area }</p>
      <p><span class={styles.Label}>Assunto</span> { props.detail.assunto }</p>
      <p><span class={styles.Label}>Valor</span> R${ props.detail.valor }</p>
    </div>
  )
}

export default details;
