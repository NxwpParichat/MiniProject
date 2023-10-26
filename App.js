import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AntDesign } from '@expo/vector-icons';
import { Provider } from "./src/context/BlogContext";
import { FontAwesome } from '@expo/vector-icons';

import HomeScreen from "./src/screens/HomeScreen";
import IndexScreen from "./src/screens/IndexScreen";
import CreateScreen from "./src/screens/CreateScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ShowScreen from "./src/screens/ShowScreen";
import EditScreen from "./src/screens/EditScreen";
import AboutScreen from "./src/screens/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider>
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
            headerStyle: { backgroundColor: "#9575DE" },
            headerTintColor: "#000",
            headerTitleStyle: { fontWeight: 'bold' },
            
          }}
        >
          <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerTitle: 'Home',
                headerShown: false,
          }}
        />
        <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{
              headerTitle: 'About Us',
              headerShown: true,  
          }}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerTitle: 'Login',
              headerShown: false,
          }}
        />

          <Stack.Screen
              name="Index"
              component={IndexScreen}
              options={({navigation}) => ({
              headerTitle: 'Exam Schedule List 📅',
              headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate("Create")}>
                    <AntDesign name="pluscircleo" size={24} color="white" />
                  </TouchableOpacity>
                ),
              })}
        />
          <Stack.Screen
            name='Create'
            component={CreateScreen}
        />
          <Stack.Screen
            name='Show'
            component={ShowScreen}
            options={({navigation, route})=>({
              headerRight: () => (
                <TouchableOpacity onPress={ () => navigation.navigate('Edit',{id: route.params.id})}>
                  <FontAwesome name="pencil-square-o" size={26} color="#fff" />
                </TouchableOpacity>
              )
            })}
        />
        <Stack.Screen
            name='Edit'
            component={EditScreen}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E5CFF7",
      alignItems: "center",
      justifyContent: "center",
  },
});
