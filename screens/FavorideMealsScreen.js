import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/favorite-context";
import {useSelector} from 'react-redux'
import { StyleSheet, Text, View } from "react-native";

function FavorideMealsScreen() {
    // const favorideMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state)=> state.favorideMeals.ids);
    const favorideMeals = MEALS.filter((item)=> favoriteMealIds.includes(item.id));
    if (favorideMeals.length <= 0) {
        return <View style={style.container}><Text style={style.text}>You have no favorite meal yet.</Text></View>
    }
    return <MealList items={favorideMeals}/>
}

export default FavorideMealsScreen;

const style = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:'center',
    },
    text:{
        textAlign:'center',
        fontSize:26
    }
})