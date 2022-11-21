import {createSlice} from '@reduxjs/toolkit'


const favoritesSlice = createSlice({
    name:"favorites",
    initialState:{
        ids:[]
    },
    reducers:{
        addFavorite:(state, action)=>{
            state.ids.push(action.payload.mealId)
        },
        removeFavorite:(state, action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.mealId),1)
        },
    }
})

export const addFavoriteMeal = favoritesSlice.actions.addFavorite;
export const removeFavoriteMeal = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;