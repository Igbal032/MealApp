import { useContext, useLayoutEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import IconButton from "../components/IconButton";
import MealDetail from "../components/MealDetail";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import { MEALS } from "../data/dummy-data";
import {useDispatch, useSelector} from 'react-redux'
import {addFavoriteMeal, removeFavoriteMeal} from '../store/redux/favorites'
// import { FavoritesContext } from "../store/favorite-context";
function MealDetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const favoriteMealIds = useSelector((state)=> state.favorideMeals.ids)
  // const FavoriteMealsCtx = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  console.log(favoriteMealIds);
  // const mealIsFavoride = FavoriteMealsCtx.ids.includes(mealId);
  const mealIsFavoride  = favoriteMealIds.includes(mealId);
  useLayoutEffect(() => {
    console.log(mealIsFavoride + ' mealIsFavoride')
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            color="white"
            icon={mealIsFavoride ? 'star' : 'star-outline'}
            onPress={changeFavoriteStatusButtonHandler}
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusButtonHandler]);
  function changeFavoriteStatusButtonHandler() {
    if (mealIsFavoride) {
      console.log(favoriteMealIds + '  adding')
      // FavoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavoriteMeal({mealId: mealId}))
    }
    else{
      console.log(favoriteMealIds + '  removing')

      // FavoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavoriteMeal({mealId: mealId}))
    }
  }

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetail
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={styles.detailText}
        />
        <View style={styles.listOutherContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
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
  listContainer: {
    width: "80%",
  },
  listOutherContainer: {
    alignItems: "center",
  },
});
