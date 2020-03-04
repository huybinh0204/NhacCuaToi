import React from "react";
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../pages/Home';
import Following from "../pages/Following";
import Menu from "../pages/Menu";
import Cart from "../pages/Cart";
import HomePlay from "../pages/playnhac/Home_Play";
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
export const HomePlayNavigator = createStackNavigator({
    HomePlay: { screen: HomePlay ,
        navigationOptions:{
            header:null,
        }}
});


