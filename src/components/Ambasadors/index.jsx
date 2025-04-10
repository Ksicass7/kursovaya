import React from 'react';

import sect6img1 from '../../assets/img/sect6-1.png';
import sect6img2 from '../../assets/img/sect6-2.png';
import sect6img3 from '../../assets/img/sect6-3.png';
import sect6img4 from '../../assets/img/sect6-4.png';
import sect6img5 from '../../assets/img/sect6-5.png';

import style from './Ambasadors.module.scss';

function Ambasadors() {
  return (
    <div className={style.root}>
      <h1>Наши амбассадоры</h1>
      <div className={style.row1}>
        <img src={sect6img1} alt="Амбассадор 1" />
        <img src={sect6img2} alt="Амбассадор 2" />
      </div>
      <div className={style.row2}>
        <img src={sect6img3} alt="Амбассадор 3" />
        <img src={sect6img4} alt="Амбассадор 4" />
        <img src={sect6img5} alt="Амбассадор 5" />
      </div>
    </div>
  );
}

export default Ambasadors;