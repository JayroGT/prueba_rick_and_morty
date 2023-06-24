  
 export default function valid (userData, errors, setErrors) {

    if (!userData.email)
    setErrors({...errors, email: "Campo vacio"});
    else if ( userData.email.length > 35)
    setErrors ({...errors, email: "Excediste el numero maximo de caracteres (<35)"});
    else if ( 
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)
    ){
        setErrors({ ...errors, email: "E-mail inválido"});
    } else {
        setErrors ({...errors, email: ""});
    }


    if(userData.password.length <6 || userData.password.length > 10){
        setErrors({...errors, password: "Max 6 - min 10 caracteres"})
    } else if (!/\d/.test(userData.password)){
        setErrors({...errors, password: "Min. un numero en la contraseña"})
    }

};