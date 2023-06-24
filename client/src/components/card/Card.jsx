import style from "./Card.module.css"
import { Link } from "react-router-dom/dist";
import { connect } from "react-redux";    
import { addFavorite, removeFavorite } from "../../redux/actions";
import {useState, useEffect} from "react";

function Card({
      id, 
      name, 
      species, 
      gender, 
      image, 
      onClose, 
      addFavorite, 
      removeFavorite, 
      myFavorites,
}) {

  const [isFav, setIsFav] = useState (false);
 
  const handleFavorite = () => {
      if(isFav){  
            setIsFav(false);
            removeFavorite(id);
      }else{
            setIsFav(true);
            addFavorite({id, name, species, gender, image, onClose, addFavorite, removeFavorite});
      }
  };

useEffect(() => {
      myFavorites.forEach((fav) => {
         if(fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

                                                                                    // Pasamos los datos mediante un "{destructuring}" para especificar que datos vamos a utilizar
         <div className={style.flipcard}>

            <div className={style.flipcardinner}>
               
                     <div className={style.flipcardfront}> 
                           <img src={image} alt={'Imagen del personje.'} className={style.img}/>
                     </div>

                  <div className={style.flipcardback}>
                        <button  
                        onClick={()=>onClose(id)} 
                        className={style.btn}>X</button> 
                        {
                              isFav ? (
                                    <button onClick={handleFavorite}>❤️</button>
                              ) : (
                                    <button onClick={handleFavorite}>🤍</button>
                              )
                        } 
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

const mapDispatchToprops = (dispatch) =>{
      return {
            addFavorite:(character)=>{
                  dispatch(addFavorite(character))
            },
            removeFavorite:(id)=>{
                  dispatch(removeFavorite(id))
            },
      }
};    


const mapStateToprops = (state)=>{
      return {    
            myFavorites: state.myFavorites,
      };
};

export default  connect(mapStateToprops, mapDispatchToprops)(Card);

















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
 