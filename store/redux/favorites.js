import {createSlice} from '@reduxjs/toolkit'


const favoritesSlice = createSlice({
    name:"favorites",
    initialState:{
        ids:[]
    },
    reducers:{
        addFavorite:(state, action)=>{
            console.log(action + ' add')
            state.ids.push(action.payload.mealId)
        },
        removeFavorite:(state, action)=>{
            console.log(action + ' remove')

            state.ids.splice(state.ids.indexOf(action.payload.mealId),1)
        },
    }
})

export const addFavoriteMeal = favoritesSlice.actions.addFavorite;
export const removeFavoriteMeal = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;