import React from 'react';

import sect4img1 from '../../assets/img/sect4-1.png';
import sect4img2 from '../../assets/img/sect4-2.png';
import sect4img3 from '../../assets/img/sect4-3.png';
import sect4img4 from '../../assets/img/sect4-4.png';
import sect4img5 from '../../assets/img/sect4-5.png';
import sect4img6 from '../../assets/img/sect4-6.png';
import sect4img7 from '../../assets/img/sect4-7.png';
import sect4img8 from '../../assets/img/sect4-8.png';
import sect4img9 from '../../assets/img/sect4-9.png';

import style from './Partners.module.scss';

function Partners() {
  return (
    <div className={style.root} id='partners'>
      <h1>Наши надежные партнеры</h1>
        <div className="cards">
          <div className="card">
            <img src={sect4img1} />
              <a href="https://25shk.02edu.ru" className="school-link" target="_blank">ГБОУ Стерлитамакская КШ <br />№ 25, г. Стерлитамак, <br />Республика Башкортостан</a>
          </div>
          <div className="card">
            <img src={sect4img2} />
              <a href="https://schoolinternat1.02edu.ru" className="school-link" target="_blank">МАОУ «Школа-интернат №1 <br />СОО» ГО г. Стерлитамак, <br />Республики Башкортостан</a>
          </div>
          <div className="card">
            <img src={sect4img3} />
              <a href="http://msoshn17.ru" className="school-link" target="_blank">МАОУ «СОШ № 17»ГО г. <br />Стерлитамак, Республики <br />Башкортостан</a> 
          </div>
          <div className="card">
            <img src={sect4img4} />
              <a href="https://dp-str.eduface.ru" className="school-link" target="_blank">МАУДО «Дворец пионеров и <br />школьников им. А.П. <br />Гайдара» ГО г. Стерлитамак, <br />Республики Башкортостан</a>
          </div>
          <div className="card">
            <img src={sect4img5} />
              <a href="https://copp-rb.ru" className="school-link" target="_blank">ГАУ ДПО «Центр <br />опережающей <br />профессиональной подготовки <br />Республики Башкортостан»</a>
          </div>
          <div className="card">
            <img src={sect4img6} />
              <a href="http://school11str.ru" className="school-link" target="_blank">МАОУ «СОШ № 11» городского <br />округа г. Стерлитамак, <br />Республики Башкортостан</a>
          </div>
          <div className="card">
            <img src={sect4img7} />
              <a href="https://school23-str.ru" className="school-link" target="_blank">МАОУ «Полилингвальная <br />многопрофильная школа №23» <br />ГО г. Стерлитамак, Республики <br />Башкортостан</a>
          </div>
          <div className="card">
            <img src={sect4img8} />
              <a href="https://strschool35.ru" className="school-link" target="_blank">МАОУ «СОШ № 35» ГО г. <br />Стерлитамак, Республики <br />Башкортостан</a>
          </div>
          <div className="card">
            <img src={sect4img9} />
              <a href="https://tuim8.02edu.ru" className="school-link" target="_blank">МАОУ «Средняя <br />общеобразовательная школа с <br />углубленным изучением отдельных <br />предметов №8» ГО г. Туймазы, <br />Республики Башкортостан</a>
          </div>
          </div>
              </div>
  )
}

export default Partners;