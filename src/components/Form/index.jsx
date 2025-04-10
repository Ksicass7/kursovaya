import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { ModalMessage } from '../ModalMessage';
import style from './Form.module.scss';
import contactUsImg from '../../assets/img/sect8.png'

function Form() {
  const fakeSubmit = (data) => new Promise((resolve) => setTimeout(() => resolve(data), 500));

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [isOpen, setIsOpen] = useState(false);

  const mutation = useMutation({
    mutationFn: fakeSubmit,
    onSuccess: () => {
      setIsOpen(true);
      setTimeout(() => setIsOpen(false), 2000);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && /[^а-яА-ЯёЁ-\s]/.test(value)) return;
    if (name === 'email' && /[^a-zA-Z0-9@._+-]/.test(value)) return;

    setErrors((prev) => ({ ...prev, [name]: '' }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Введите имя';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(formData);
    }
  };

  return (
    <>
      <img className={style.bgimg} src={contactUsImg} alt="" />
      <div className={style.root} id="form">
        <h1>Свяжитесь с нами!</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <p>ФИО</p>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <p>Email</p>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <p>Сообщение</p>
          <input type="text" required />

          <button type="submit" disabled={mutation.isPending}>
            Отправить
          </button>

          <ModalMessage isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </form>
      </div>
    </>
  );
}

export default Form;