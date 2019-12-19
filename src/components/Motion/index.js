import React from 'react';

import styles from './styles.module.css';

const motion = (props) => {
  let content = props.content? <p className={styles.Content}>{ props.content }</p> : null

  return(
    <div className={styles.Motion}>
      <h3>{ props.title }</h3>
      <span className={styles.Date}>{ props.date }</span>
      { content }
    </div>
  )
}

export default motion;
