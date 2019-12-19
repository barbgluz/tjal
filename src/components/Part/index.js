import React from 'react';

import styles from './styles.module.css';

const part = (props) => {

  let representation = null
  representation = props.representation.map(rep => {
    return(
      <div className={styles.Part}>
        <p className={styles.Name}>{rep.nome} </p>
        <p className={styles.Type}>{ rep.tipo }</p>
      </div>
      )
  })

  return(
    <div className={styles.Part}>
      <p className={styles.Name}>{ props.name }</p>
      <p className={styles.Type}>{ props.type }</p>
      { representation }
    </div>
    )
}

export default part;
