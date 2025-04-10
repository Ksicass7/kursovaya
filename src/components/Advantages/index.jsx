import React from 'react';

import sect5img1 from '../../assets/img/sect5-1.png';
import sect5img2 from '../../assets/img/sect5-2.png';
import sect5img3 from '../../assets/img/sect5-3.png';

import style from './Advantages.module.scss';

function Advantages() {
  return (
    <div className={style.root}>
        <h1>Почему выбирают <br/>«Профессионалитет»?</h1>
        <div className="cards">
          <div className="card1">
            <img src={sect5img1} />
            <p>Обучение в кратчайшие <br/>сроки, чтобы быстрее <br/>начать свою карьеру.</p>
          </div>
          <div className="card2">
            <img src={sect5img2} />
            <p>Приобретение реальных <br/>навыков, необходимых для <br/>работы на современном <br/>производстве.</p>
          </div>
          <div className="card3">
            <img src={sect5img3} />
            <p>Стажировки для понимания профессии и повышения шансов на трудоустройство.</p>
          </div>
        </div>
    </div>
  )
}

export default Advantages;