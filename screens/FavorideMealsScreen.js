import { useContext } from "react";
import MealList from "../components/MealList/MealList";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/favorite-context";
import {useSelector} from 'react-redux'

function FavorideMealsScreen() {
    // const favorideMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state)=> state.favorideMeals.ids);
    const favorideMeals = MEALS.filter((item)=> favoriteMealIds.includes(item.id));
    return <MealList items={favorideMeals}/>
}

export default FavorideMealsScreen;