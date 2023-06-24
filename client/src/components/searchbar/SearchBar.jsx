import {useState} from "react";
import style from "./SearchBar.module.css";
 
export default function SearchBar( {onSearch} ) {
  
  const [id, setId] =  useState("");  
  
  function handleChange (event){
    setId(event.target.value);    
  };
  
  return (
     <div>
        <input 
        name = "search"
        type='search' 
        value= {id}
        placeholder = 'Escribir...'
        className={style.input} 
        onChange={handleChange}
        />
        <button 
        onClick = {()=> onSearch(id)}  
        className={style.btnsearch}
        > Agregar </button>
     </div>
  );
};
 