import React from "react";
import style from "./Card.module.css"
import { Link } from "react-router-dom/dist";

export default function Card({id, name, species, gender, image, onClose}) {
   return (


         <div className={style.flipcard}>

            <div className={style.flipcardinner}>
               
                     <div className={style.flipcardfront}> 
                           <img src={image} alt={'Imagen del personje.'} className={style.img}/>
                     </div>

                  <div className={style.flipcardback}>
                        <button  
                        onClick={()=>onClose(id)} 
                        className={style.btn}>X</button>
                        <Link to = { `/detail/${id}` }>
                              <h2 className= {style.tittle}> {name} </h2>
                        </Link>
                              <p>Species: {species}</p>
                              <p>Gender: {gender}</p>
               
                  </div>
            </div>

         </div>
   );
};


// export default function Card ({name, species, gender, image}) {
// const onCLose = () => window.alert("Se cierra la card.")

//    return (
//      <div className={style.flipcard}>

//             <div className={style.flipcardinner}>
//                 <div className={style.flipcardfront}> 

//                  <img src={image} alt={name} className={style.img}/>
//                  </div>

//              <div className={style.flipcardback}>
//                   <button onClick={onCLose} >X</button>

//                   <p className= {style.tittle}>Name: {name}</p>
//                   <p>Species:{species}</p>
//                   <p>Gender:{gender}</p>

//                 </div>
//           </div>
//      </div>
//    );
//  };
 