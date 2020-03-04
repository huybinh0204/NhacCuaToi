import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
    HomeNavigator,
    FollowingNavigator,
    MenuNavigator,
    HomePlayNavigator
} from './screen-stack-navigator';
import {Image} from 'react-native';
import {createAppContainer} from "react-navigation";

const BottomTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: 'Explore',
            },
        },
        Follow: {
            screen: FollowingNavigator,
            navigationOptions: {
                tabBarLabel: 'Following',
            },
        },
        Menu: {
            screen: MenuNavigator,
            navigationOptions: {
                tabBarLabel: 'Profile',
            },
        },HomePlay: {
            screen: HomePlayNavigator,
            navigationOptions: {
                tabBarLabel: 'Profile',
            },
        },
    },
    {
        defaultNavigationOptions: ({navigation}) => ({

            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                if (routeName === 'Home') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/icon/home_click.png')
                                    : require('../../asset/icon/home.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                } else if (routeName === 'Follow') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/icon/multiple_click.png')
                                    : require('../../asset/icon/multiple.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                }else if (routeName === 'Menu') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/icon/user_click.png')
                                    : require('../../asset/icon/user.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                }else if (routeName === 'HomePlay') {
                    return (
                        <Image
                            source={
                                focused
                                    ? require('../../asset/icon/user_click.png')
                                    : require('../../asset/icon/user.png')
                            }
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    );
                }
            }
        }),
        tabBarOptions: {
            activeTintColor: '#2979ff',
            inactiveTintColor: 'gray',
        },
    },
);
const BOTTOM1 = createAppContainer(BottomTabNavigator);
export default BOTTOM1;
