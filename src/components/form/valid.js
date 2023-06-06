  
 export default function valid (userData, errors, setErrors) {

    if (!userData.username)
    setErrors({...errors, username: "Campo vacio"});
    else if ( userData.username.length > 35)
    setErrors ({...errors, username: "Excediste el numero maximo de caracteres (<35)"});
    else if ( 
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
    ){
        setErrors({ ...errors, username: "E-mail inválido"});
    } else {
        setErrors ({...errors, username: ""});
    }


    if(userData.password.length <6 || userData.password.length > 10){
        setErrors({...errors, password: "Max 6 - min 10 caracteres"})
    } else if (!/\d/.test(userData.password)){
        setErrors({...errors, password: "Min. un numero en la contraseña"})
    }

};