import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { Route } from "react-router-dom";
// import Error from "../error/Error";

export default function Details () {
    const {detailID} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${detailID}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [detailID]);


     return(
    
        <div>
            
            {
                character.name ? (
            <>         
            <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src = {character.image} alt="img" />
            </>    
            ): (
                <h3>Loading</h3>
            )
            }
            
        </div>
        );

}