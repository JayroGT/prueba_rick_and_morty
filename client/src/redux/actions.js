export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (Character) => {
    return {type:ADD_FAVORITE, playload : Character};
}; 

export const removeFavorite = (id) => {
    return {type: REMOVE_FAVORITE, playload:id};
};