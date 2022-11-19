import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import MealDetail from "../components/MealDetail";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <View style={styles.mealDetail}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <Subtitle>Ingredients</Subtitle>
        <List data={selectedMeal.ingredients}/>
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps}/>
      </View>
    </View>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  mealDetail: {
    margin: 16,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  detailText: {
    color: "white",
  },
});
