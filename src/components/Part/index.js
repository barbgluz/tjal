import React from 'react';

import styles from './styles.module.css';

const part = (props) => {

  let representation = null
  representation = props.representation.map((rep, i) => {
    return(
      <div className={styles.Part} key={i}>
        <p className={styles.Name}>{ rep.nome } </p>
        <p className={styles.Type}>{ rep.tipo }</p>
      </div>
      )
  })

  return(
    <div className={styles.Part}>
      <p className={styles.Name}>{ props.nome }</p>
      <p className={styles.Type}>{ props.tipo }</p>
      { representation }
    </div>
    )
}

export default part;
