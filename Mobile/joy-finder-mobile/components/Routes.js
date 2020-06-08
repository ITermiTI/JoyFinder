import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import GuestPage from "../pages/GuestPage";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import ParticipationPage from "../pages/ParticipationPage";
import SearchMapPage from "../pages/SearchMapPage";
import SearchByTypePage from "../pages/SearchByTypePage";
import SearchByCityPage from "../pages/SearchByCityPage";
import Drawer from "./Drawer";
import SearchByAllPage from "../pages/SearchAllPage";
import AddEventPage from "../pages/AddEventPage";
import EventDetails from "../pages/EventDetails"

const drawerPages = {
  YourEvents: {
    screen: HomePage,
  },
  Participation: {
    screen: ParticipationPage,
  },
  SearchMap: {
    screen: SearchMapPage,
  },
  SearchByType: {
    screen: SearchByTypePage,
  },
  SearchByCity: {
    screen: SearchByCityPage,
  },
  SearchAll: {
    screen: SearchByAllPage,
  },
  AddEvent:{
    screen: AddEventPage,
  },
  EventDetails:{
    screen: EventDetails,
  }
};

const drawer = createDrawerNavigator(drawerPages, {
  edgeWidth: 0,
  contentComponent: Drawer,
  drawerWidth: 270,
});

const stackPages = {
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
    screen: drawer,
    navigationOptions: {
      headerShown: false,
    },
  },
  Register: {
    screen: AddEventPage,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const pagesStack = createStackNavigator(stackPages);

export default createAppContainer(pagesStack);
