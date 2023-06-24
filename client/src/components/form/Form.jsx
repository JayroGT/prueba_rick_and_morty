import style from "./Form.module.css"
import React from "react";
import { useState } from "react";
import valid from "./valid.js";

export default function Form ({login}){

    const [userData, setUserData] = useState({    
        username: "",                                     // useState para setearlo con el dato nuevo que va ingresar en el input.              
        password: "",
    });
    
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;                 // Metemos los valores ingresados en una variable.
        const value = event.target.value;      

        setUserData({...userData, [property] : value});     // Seteamos UserData 
        valid({...userData, [property]: value}, errors, setErrors);     // conjugamos con la validacion y devolvemos error segun corresponda.
    };

        const submitHandler = (event) =>{
            event.preventDefault();
            login(userData);

        }

    return(
        <div className={style.container}>
        <form onSubmit={submitHandler} className={style.form}>
            <span className={style.input_span}>  
                    <label htmlFor="email" className={style.label}>E-mail</label>
                    <input type="email" name="username" value={userData.email} id="email" onChange={handleInputChange}/></span>
                    {/* <p>{errors.username}</p> */}
            <span className={style.input_span}>
                    <label htmlFor="password" className={style.label}>Password</label>
                    <input type="password"  name="password" value={userData.password} onChange={handleInputChange} /></span>
                    <p>{errors.username}</p>
            
             <button className={style.submit} type= "submit" >Login</button>

        </form>
        </div>
    )
}





{/* <form class="form">                                                             todos los type estaban en text
            <span class="input-span">
                <label for="email" class="label">Email</label>
                <input type="email" name="email" id="email"></span>
            <span class="input-span">
            <label for="password" class="label">Password</label>
                <input type="password" name="password" id="password"></span>
            <span class="span"><a href="#">Forgot password?</a></span>
                <input class="submit" type="submit" value="Log in">
            <span class="span">Don't have an account? <a href="#">Sign up</a></span>
    </form> */}