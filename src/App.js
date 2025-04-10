import React from 'react';
import './scss/App.scss';

import Advantages from './components/Advantages';
import Header from './components/Header';
import GoToLearn from './components/GoToLearn';
import Professionalitet from './components/Professionalitet';
import Orientation from './components/Orientation';
import Partners from './components/Partners';
import Ambasadors from './components/Ambasadors';
import HowToBecomeAStudent from './components/HowToBecomeAStudent';
import Form from './components/Form';
import Footer from './components/Footer';

import bgImg from './assets/img/sect1-BG.png';

import Modal from './components/Modal';

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="container">
      <Header />
      {open && [
        <Modal setOpen={setOpen} />
      ]}
      <div className='bgImg'>
        <img src={bgImg}/>
      </div>
      <GoToLearn setOpen={setOpen} />
      <Professionalitet />
      <Orientation />
      <Partners />
      <Advantages />
      <Ambasadors />
      <HowToBecomeAStudent />
      <Form />
      <Footer />
      
    </div>
  );
}

export default App;