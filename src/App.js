import React, {useState, useEffect} from 'react';
import Cards from './components/cards/Cards.jsx';
import NavBar from './components/navbar/NavBar.jsx'
import style from './App.module.css';
import logo from "./assets/logo.png";
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import Detail from './components/detail/Detail.jsx';
import About from './components/about/About.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';
import { useLocation, useNavigate } from 'react-router-dom/dist/index.js';


function App() {
  const [characters, setCharacters] = useState([]);
  const {pathname} = useLocation();
  const [acces, setAcces] = useState(false);
  const navigate = useNavigate()
   
  useEffect(() => {
   !acces && navigate ("/");
  }, [acces]);



 //************************ 
  // credenciales 
   const username = "correo@gmail.com"
   const password = "clave123"

   //************************ 




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

   const login = (userData) => {
      if (userData.username === username && userData.password===password){
         setAcces(true);
         navigate("/home");
      } else {
         alert("Acceso denegado")
      }
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
                           {                  
                                 pathname !== "/"  && <NavBar onSearch={onSearch}/>
                           }                  
                     <Routes>
                     <Route path ="/" element={<Form login={login}/>} />
                     <Route path = "/home"   element={<Cards onClose = {onClose} characters={characters} />}/>
                     <Route path= "/about" element ={<About />} />
                     <Route path="/detail/:detailID" element={<Detail/>} />
                     <Route path="*" element={<Error />} />
                  </Routes>
            </div>
      </div>
    </div>
 ); 
};

export default App;
