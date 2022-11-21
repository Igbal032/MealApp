import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { Ionicons } from "@expo/vector-icons";
// import FavoritesContextProvider from "./store/favorite-context";
import {Provider} from 'react-redux'
import FavorideMealsScreen from "./screens/FavorideMealsScreen";
import {store} from './store/redux/store'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigotor() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#583636",
        },
        headerTintColor: "#ffffff",
        tabBarStyle:{backgroundColor: '#583636'},
        tabBarActiveTintColor:'white'
      }}
    >
      <Tab.Screen name="All Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        tabBarLabelStyle:{fontSize:11,fontWeight:'bold'},
        tabBarIcon:({size, color})=>{
         return <Ionicons name="home" color={color} size={size}/>
        }
      }}/>
      <Tab.Screen name="Favorites" component={FavorideMealsScreen} options={{
        title: 'Favorites',
        tabBarLabelStyle:{fontSize:11,fontWeight:'bold'},
        tabBarIcon:({size, color})=>{
         return <Ionicons name="star" color={color} size={size}/>
        }
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#583636",
            },
            headerTintColor: "#ffffff",
            contentStyle: { backgroundColor: "#aa6464" },
          }}
        >
          <Stack.Screen
            name="MealCategories"
            component={TabNavigotor}
            options={{
              // title: "All Categories",
              // headerTitleAlign: "center",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealOverview"
            component={MealOverviewScreen}
            // options={{
            //   title: "Meal Overview",
            // }}
            // options={({route, navigation})=>{
            //   const catId = route.params.categoryId;
            //   return {
            //     title: catId
            //   }
            // }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "Details",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({});
