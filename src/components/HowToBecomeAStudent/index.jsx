import React from 'react';

import sect7img1 from '../../assets/img/sect7-1.png';
import sect7img2 from '../../assets/img/sect7-2.png';
import sect7img3 from '../../assets/img/sect7-3.png';

import style from './HowToBecome.module.scss';

function HowToBecomeAStudent() {
  return (
    <div className={style.root}>
      <h1>Как стать студентом <br/>«Профессионалитета»?</h1>
        <div className="line"></div>
        <div className="row1">
          <div className="text">
            <h1>Изучите </h1>
            <p>Ознакомьтесь с описанием каждого <br/>направления, изучите учебный план <br/>и узнайте о карьерных перспективах, <br/>которые вас ждут после окончания <br/>обучения. </p>
          </div>
          <img src={sect7img1} />
        </div>
        <div className="line"></div>
        <div className="row2">
          <div className="text">
            <h1>Подайте</h1>
            <p>Укажите свои личные данные, <br/>выберите интересующее вас <br/>направление и загрузите <br/>необходимые документы. </p>
          </div>
          <img src={sect7img2} />
        </div>
        <div className="line"></div>
        <div className="row3">
          <div className="text">
            <h1>Пройдите</h1>
            <p>После рассмотрения заявки и <br/>результатов вступительных <br/>испытаний, может быть назначено <br/>собеседование. </p>
          </div>
          <img src={sect7img3} />
        </div>
        <div className="line"></div>
    </div>
  )
}

export default HowToBecomeAStudent;