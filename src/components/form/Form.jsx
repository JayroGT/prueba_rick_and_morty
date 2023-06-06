import React from "react";
import { useState } from "react";
import valid from "./valid.js";

export default function Form ({login}){

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property] : value});
        valid({...userData, [property]: value}, errors, setErrors);
    };

        const submitHandler = (event) =>{
            event.preventDefault();
            login(userData);

        }

    return(
        <form onSubmit={submitHandler}>
             <div>  
                    <label htmlFor="username">E-mail</label>
                    <input type="text" name="username" 
                    value={userData.username} onChange={handleInputChange}
                    />
                    <p>{errors.username}</p>
             </div>
             <div>
                    <label htmlFor="password">Password</label>
                    <input type="text"  name="password" 
                    value={userData.password} onChange={handleInputChange}
                    />
                    <p>{errors.username}</p>

             </div>
             <button>Login</button>
        </form>
    )
}