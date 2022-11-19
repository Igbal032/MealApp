import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";
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

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displeyedMeal}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  texColor: {
    color: "red",
  },
});
