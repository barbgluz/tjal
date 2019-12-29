import React from 'react';

import styles from './styles.module.css';
import image from '../../containers/Search/background.jpg'

const error = () => {
  return(
    <div className={styles.Error}>
      <img src={image} alt="#" className={styles.ErrorImg}/>
      <div>
        <h1>ERRO</h1>
        <p>Não encontramos seu processo. <br />Verifique o numero de processo e tente novamente.</p>
      </div>
    </div>
    )
}

export default error;
