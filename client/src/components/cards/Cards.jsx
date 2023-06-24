import React from "react";
import style from "./Cards.module.css";
import Card from "../card/Card";




export default function Cards({characters, onClose}) {
    return (
        <div className={style.stylecards}>
          { characters.map(({id, name, species, gender, image}) => {    // en esta parte pasamos ID para que refleje en card ya que la funcion onCLose necesita el ID para funcionar correctamente.
            return (
                <Card 
                id = {id}
                name = {name}
                species = {species}
                gender = {gender}
                image = {image}
                onClose = {onClose}
                />
              );  
            })}
        </div>
    );
}
