import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import GuestPage from "../pages/GuestPage";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";

const pages = {
  GuestPage: {
    screen: GuestPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: RegisterPage,
    navigationOptions: {
      headerShown: false,
    },
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const pagesStack = createStackNavigator(pages);

export default createAppContainer(pagesStack);