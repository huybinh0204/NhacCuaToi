import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../pages/Home';
import Following from "../pages/Following";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import Login from "../login/Login";
export const HomeNavigator = createStackNavigator({
    Home: { screen: Home,navigationOptions:{
            header:null,
        }}
});
export const FollowingNavigator = createStackNavigator({
    Following: { screen: Following ,
    navigationOptions:{
        header:null,
    }}
});
export const CartNavigator = createStackNavigator({
    Cart: { screen: Cart ,
        navigationOptions:{
            header:null,
        }}
});
export const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu ,
        navigationOptions:{
            header:null,
        }}
});
export const LoginNavigator = createStackNavigator({
    Login: { screen: Login ,
        navigationOptions:{
            header:null,
        }}
});

