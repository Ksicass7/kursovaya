import React, { useState } from 'react';

import imgModal from '../../assets/img/modal-1.png';
import krestik from '../../assets/img/modal-krestik.png';

import style from './Modal.module.scss';

function Modal({setOpen}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [education, setEducation] = useState('');
    const [skills, setSkills] = useState('');
    const [reason, setReason] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (e) =>{
        const inputValue = e.target.value

        if (/^[а-яА-ЯёЁ\s]*$/.test(inputValue)) {
            setName(inputValue);
            setError(""); 
          } 
    }
    const handleEmailChange = (e) =>{
        const inputValue = e.target.value

        if (/^[a-zA-Z0-9._+-@\s]*$/.test(inputValue)) {
            setEmail(inputValue);
            setError(""); 
          } 
    }
    const handleEducationChange = (e) =>{
        const inputValue = e.target.value

        if (/^[а-яА-ЯёЁ0-9._+=-\s]*$/.test(inputValue)) {
            setEducation(inputValue);
            setError(""); 
          } 
    }
    const handleSkillsChange = (e) =>{
        const inputValue = e.target.value

        if (/^[а-яА-ЯёЁ0-9._+=-\s]*$/.test(inputValue)) {
            setSkills(inputValue);
            setError(""); 
          } 
    }
    const handleReasonChange = (e) =>{
        const inputValue = e.target.value

        if (/^[а-яА-ЯёЁ0-9._+=-\s]*$/.test(inputValue)) {
            setReason(inputValue);
            setError(""); 
          } 
    }
  return (
    <div className={style.root}>
        <img src={imgModal}/>
        <div className='content'>
            <h1>Оставить заявку на участие</h1>
            <div className="input">
                <p>ФИО</p>
                <input type="text" value={name} onChange={handleNameChange} required/>
            </div>
            <div className="input">
                <p>E-mail</p>
                <input type="text" value={email} onChange={handleEmailChange} required />
            </div>
            <form action="" className='form'>
            <div className="input">
                <p>Образование</p>
                <input type="text" value={education} onChange={handleEducationChange} required/>
            </div>
            <div className="input">
                <p>Навыки и квалификация</p>
                <input type="text" value={skills} onChange={handleSkillsChange} required/>
            </div>
            <div className="input">
                <p>Причина заявки</p>
                <input type="text" value={reason} onChange={handleReasonChange} required className='input-message'/>
            </div>
            <button>Отправить</button>
            </form>

        </div>
        <img src={krestik} onClick={() => setOpen(false)}/>
    </div>
  )
}
export default Modal;