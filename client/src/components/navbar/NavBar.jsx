// import React from "react";
import SearchBar from "../searchbar/SearchBar";
import style from './NavBar.module.css'
import { Link } from "react-router-dom";

export default function NavBar (props) {
    return (
       <nav className={style.nav}>
            <SearchBar onSearch={props.onSearch } />
            <Link to = "/about"> 
               <h3>About</h3> 
            </Link>
            <Link to = "/home"> 
               <h3>Home</h3> 
            </Link>
            <Link to = "/favorites"> 
               <h3>Favorites</h3>
            </Link>
       </nav>
    );
  }