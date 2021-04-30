import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox, ScrollView } from "react-native";
import Header from "./shared/Header";
//Screens
import ProductContainer from "./Screens/Products/ProductContainer";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./Navigators/Main";
import {Provider} from 'react-redux' ;
import store from './Redux/store' ;
import Toast from "react-native-toast-message";
import Auth from "./Context/store/Auth";

export default function App() {
  return (
    <Auth>
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Main />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  </Auth>
  );
}


