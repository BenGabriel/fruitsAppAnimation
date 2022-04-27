import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Details from "./src/screens/Details";
import Home from "./src/screens/Home";

type Props = {
  Home: any;
  Details: any;
};

export default function App() {
  const { Navigator, Screen } = createStackNavigator<Props>();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}
