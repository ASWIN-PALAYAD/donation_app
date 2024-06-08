
import { createStackNavigator } from "@react-navigation/stack";
import { Routes } from "./Routes";
import Home from "../screens/Home";
import SingleDonationItem from "../screens/SingleDonationItem";
import Login from "../screens/Login";
import Registration from "../screens/Registration";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Login} screenOptions={{header:()=>null,headerShown:false}}>
        <Stack.Screen name={Routes.Login} component={Login}/>
        <Stack.Screen name={Routes.Registration} component={Registration}/>
        <Stack.Screen name={Routes.Home} component={Home}/>
        <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItem}/>
    </Stack.Navigator>
  )
}

export default MainNavigation

