import React, { useState } from "react";

import Header from "../Header/Header";
import NavPrimary from "../NavPrimary/NavPrimary";
import Main from '../Main/Main.js';
import Footer from '../Footer/Footer.js';
import ImagePopup from '../ImagePopup/ImagePopup.js';
import NotFound from "../NotFound/NotFound.js";
import * as auth from '../../utils/auth.js';
import moviesApi from '../../utils/MoviesApi.js'
import mainApi from '../../utils/MainApi.js';

import docOne from '../../images/movie-1.png';
import docTwo from '../../images/movie-2.png';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const docs = [
    { 
      link: docOne,
      id: 1,
      name: 'Описание 1'
    },
    { 
      link: docTwo,
      id: 2,
      name: 'Описание 2'
    },
    { 
      link: docOne,
      id: 3,
      name: 'Описание 3'
    },
    { 
      link: docTwo,
      id: 4,
      name: 'Описание 4'
    },
    { 
      link: docOne,
      id: 5,
      name: 'Описание 5'
    }
  ]
  const goodCards = [
    {
      link: docOne,
      id: 1,
      name: 'Описание 1',
      pathLink: '#',
      title: 'Using Blockchain',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum vehicula vehicula. Aliquam non urna eu nisi placerat hendrerit. '
    },
    {
      link: docTwo,
      id: 2,
      name: 'Описание 2',
      pathLink: '#',
      title: 'How do i Get Started on a Cybersecurity Career',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum vehicula vehicula. Aliquam non urna eu nisi placerat hendrerit. '
    },
    {
      link: docOne,
      id: 3,
      name: 'Описание 3',
      pathLink: '#',
      title: '8 Cyber security professionals share their essential reads',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum vehicula vehicula. Aliquam non urna eu nisi placerat hendrerit. '
    },
    {
      link: docTwo,
      id: 4,
      name: 'Описание 4',
      pathLink: '#',
      title: 'How do i Get Started on a Cybersecurity Career In Intera',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum vehicula vehicula. Aliquam non urna eu nisi placerat hendrerit. '
    },
    {
      link: docOne,
      id: 5,
      name: 'Описание 5',
      pathLink: '#',
      title: 'How do i Get Started on a Cybersecurity Career In Intera',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum vehicula vehicula. Aliquam non urna eu nisi placerat hendrerit. '
    },
    {
      link: docTwo,
      id: 6,
      name: 'Описание 6',
      pathLink: '#',
      title: 'How do i Get Started on a Cybersecurity Career In Intera',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum vehicula vehicula. Aliquam non urna eu nisi placerat hendrerit. '
    }
  ]
  
  function onClose () {
    setIsMenuOpen(false);
  }

  function handleImageClick(doc) {
    setSelectedDoc(doc)
  }

  function handleImageCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setSelectedDoc({})
    setSelectedCard({})
  }
  
  return (
    <div className="page">
      
      <Header>
        <NavPrimary />
        <button className='header__menu-btn' type='button' onClick = {()=>setIsMenuOpen(true)}/>
      </Header>

      <Main
        isMenuOpen={isMenuOpen}
        onClose={onClose}
        onImageClick={handleImageClick}
        onImageCardClick={handleImageCardClick}
        docs={docs}
        goodCards={goodCards}
      />

      <Footer />

      <ImagePopup doc={selectedDoc} onClosePopup={closeAllPopups}/>
      <ImagePopup doc={selectedCard} onClosePopup={closeAllPopups}/>
        
    </div>
  );
}

export default App;
