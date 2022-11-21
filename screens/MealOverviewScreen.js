import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealList from "../components/MealList/MealList";
import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  useLayoutEffect(()=>{
  const categoryName = CATEGORIES.find((category)=>category.id===catId).title;
  console.log(categoryName)
  navigation.setOptions({
    title: categoryName,
    headerTitleAlign:'center'
  })
},[catId, navigation])

  const displeyedMeal = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  return (
    <MealList items={displeyedMeal}/>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  }
});
