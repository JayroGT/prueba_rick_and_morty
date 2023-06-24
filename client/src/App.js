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
import Favorites from './components/favorites/Favorites.jsx';


function App() {
  const [characters, setCharacters] = useState([]);  //<< Permite setear el "estado" o en este caso jugar con el personaje cada vez que ingresamos en el input.
  const {pathname} = useLocation();
  const [acces, setAcces] = useState(false);    //<< permite jugar con los datos ingresados en el FORM
  const navigate = useNavigate()
   
  useEffect(() => {
   !acces && navigate ("/");
  }, [acces]);                        // <<< esto evita que se redirija a /home hasta que las credenciales sean conrrectas (true)



 //************************ 
  // credenciales para el login.
   const username = "correo@gmail.com"
   const password = "clave123"

   //************************ 




function onSearch(id) {
    axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);                            // Esto hace consulta al servidor para retornar el valor de consulta, tambien se puede usar Fetch                           
       } else {                                                                        // para Axios es necesario instalar e importar.
          window.alert('¡No hay personajes con este ID!');
       }
    });
 };

 const onClose = (id) => {
   setCharacters(characters.filter( (char) => char.id !== id));     // esta funcion permmite cerrar la card del ID en mencion.  
      };                                                            // se usa .filter ya que asi no estamos modificando el array principal.
 

   const login = (userData) => {
      if (userData.username === username && userData.password===password){
         setAcces(true);                                                         // Esta funcion permite el acceso al /home siempre y cuando los datos de logeo sean correctos. 
         navigate("/home");                                                      // Junto al pathname de la linea 76, usamos el hook. 
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
                <img src = {logo} alt='logo' className={style.tittle} />
                           {                  
                                 pathname !== "/"  && <NavBar onSearch={onSearch}/>
                           }          
            <div className={style.div2}>
                  <Routes>     
                     <Route path ="/" element={<Form login={login}/>} />                   
                     <Route path = "/home"   element={<Cards onClose = {onClose} characters={characters} />} /> 
                     <Route path= "/about" element ={<About />} />
                     <Route path="/detail/:detailID" element={<Detail/>} />
                     <Route path="/favorites" element = {<Favorites />} />
                     <Route path="*" element={<Error />} />
                  </Routes>
            </div>
      </div>   
    </div>
 ); 
};

export default App;


// Arriba podemos visualizar las estructura inicial de la APP, los ROUTE permiten el acceso de otros componentes sin "cambiar la pagina"