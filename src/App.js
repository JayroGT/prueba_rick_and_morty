import React, {useState} from 'react';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navbar/NavBar.jsx'
import style from './App.module.css';
import logo from "./assets/logo.png";
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';


function App() {
  const [characters, setCharacters] = useState([]);

function onSearch(id) {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
       } else {
          window.alert('¡No hay personajes con este ID!');
       }
    });
 };

 const onClose = (id) => {
   setCharacters(characters.filter( (char) => char.id !== id));
 };


//  function onClose(id) {
//    const parsedId = parseInt(id);
//    setCharacters((oldChars) => oldChars.filter((ch) => ch.id !== parsedId));
//  };

 
   return (
    <div className={style.App}>
      <div>
            <div>
                <img src = {logo} alt='logo' className={style.tittle} />
                  <NavBar onSearch={onSearch}/>
            </div>
            <hr />  
            <div>
                <Cards 
                onClose = {onClose}  
                characters={characters} />
            </div>
      </div>
    </div>
 );
};

export default App;
