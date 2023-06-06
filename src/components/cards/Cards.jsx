import React from "react";
import style from "./Cards.module.css";
import Card from "../card/Card";




export default function Cards({characters, onClose}) {
    return (
        <div className={style.stylecards}>
          { characters.map(({id, name, species, gender, image}) => {
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
