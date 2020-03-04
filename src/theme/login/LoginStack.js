import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from "react-navigation-stack";
import SigninLogin from "./Signin_Login";
import SignUpLogin from "./Sign_up_Login";
const LoginStack = createMaterialTopTabNavigator(
    {
        'Sign in': {screen: SigninLogin},
        'Sign Up': {screen: SignUpLogin},
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: '#000',
            style: {
                backgroundColor: '#fff',

            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: '#64b5f6',
                borderBottomWidth: 3,
            },
        },
    }
);
const LoginStackp = createStackNavigator({
    LoginStackp: {
        screen: LoginStack,
        navigationOptions: {
            header: null
        }
    }
});
export default createAppContainer(LoginStackp);
