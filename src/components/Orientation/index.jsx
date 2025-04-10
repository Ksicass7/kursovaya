import React from "react";

import sect3img1 from "../../assets/img/sect3-1.png";
import sect3img2 from "../../assets/img/sect3-2.png";
import sect3img3 from "../../assets/img/sect3-3.png";
import sect3img4 from "../../assets/img/sect3-4.png";
import sect3img5 from "../../assets/img/sect3-5.png";

import style from "./Orientation.module.scss";

function Orientation() {
  return (
    <div className={style.root} id="orientation">
      <div className="text">
        <h1>Выбери свое направление!</h1>
        <p>
          Мы предлагаем широкий спектр востребованных направлений обучения,{" "}
          <br />
          которые помогут вам построить успешную карьеру.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <img src={sect3img1} />
          <div className="text">
            <p>01/</p>
            <h1>
              Преподавание в <br />
              начальных <br />
              классах
            </h1>
          </div>
          <p>
            Учитель
            начальных классов.
          </p>
        </div>
        <div className="card">
          <img src={sect3img2} />
          <div className="text">
            <p>02/</p>
            <h1>
              Информационные <br />
              системы и <br />
              программирование
            </h1>
          </div>
          <p>Программист.</p>
        </div>
        <div className="card">
          <img src={sect3img3} />
          <div className="text">
            <p>03/</p>
            <h1>
              Педагогика <br />
              дополнительного <br />
              образования
            </h1>
          </div>
          <p>
            Педагог дополнительного <br />
            образования в области <br />
            хореографии.
          </p>
        </div>
        <div className="card">
          <img src={sect3img4} />
          <div className="text">
            <p>04/</p>
            <h1>
              Коррекционная <br />
              педагогика в начальном <br />
              образовании
            </h1>
          </div>
          <p>
            Учитель начальных классов, в том <br />
            числе для обучающихся с ограничен-
            <br />
            -ными возможностями здоровья.
          </p>
        </div>
        <div className="card">
          <img src={sect3img5} />
          <div className="text">
            <p>05/</p>
            <h1>
              Документационное <br />
              обеспечение управления <br />и архивоведение
            </h1>
          </div>
          <p>
            Специалист по документационному <br />
            обеспечению управления и <br />
            архивному делу.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Orientation;
