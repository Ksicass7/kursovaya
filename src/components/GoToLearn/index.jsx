import React from 'react';

import strelka from '../../assets/img/sect1-strelka.png';
import learnImg from '../../assets/img/sect1.png';

import style from './GoToLearn.module.scss';

function GoToLearn({setOpen}) {
  return (
    <div className={style.root}>
      <div className="content">
          <h1>Обучение, которое <br/>приведет к успеху!</h1>
          <p>Профессионалитет – это инновационный подход к <br/>образованию, который объединяет лучшие практики <br/>обучения и запросы рынка труда. Мы предлагаем тебе <br/>получить востребованную профессию в кратчайшие сроки, <br/>чтобы ты мог быстро начать свою карьеру.</p>
          <button
            onClick={() => setOpen(true)}
          >Начать обучение <img src={strelka} /></button>
        </div>
        <div className="learnImg">
          <img src={learnImg}/>
        </div>
    </div>
  )
}

export default GoToLearn;