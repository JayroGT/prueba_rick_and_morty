import React from "react";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions"

const initialState = {
    myFavorites :[],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state, 
                myFavorites : [...state.myFavorites, action.playload],
            };
        
        case REMOVE_FAVORITE:
            return {
                ...state, 
                myFavorites: state.myFavorites.filter(
                (char) => char.id !== action.playload
              ),
            };

        default:
            return {...state};
    }
};


export default rootReducer;