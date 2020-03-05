import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {
    HomeNavigator,
    FollowingNavigator,
    MenuNavigator,
    HomePlayNavigator,
    NewPlayPlayNavigator,
    NewPlatAlbumPlayNavigator
} from './screen-stack-navigator';
import {Image} from 'react-native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import NewPlatAlbum from "../pages/playnhac/New_Plat_Album";
import NewPlay from "../pages/playnhac/New_Play";
import NewPlatPlaylist from "../pages/playnhac/New_Plat_Playlist";
import NewPlatChuDe from "../pages/playnhac/New_Plat_ChuDe";
import HomePlay from "../pages/playnhac/Home_Play";
const MenuD = createBottomTabNavigator(
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
        }

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
                }

            }
        }),
        tabBarOptions: {
            activeTintColor: '#2979ff',
            inactiveTintColor: 'gray',
        },
    },
);

const BottomTabNavigator = createStackNavigator(
    {
        MenuD: {
            screen: MenuD, navigationOptions: {
                header: null,
            },
        },
        NewPlay:{
            screen:NewPlay,
            navigationOptions:{
                header:null,
            }
        },
        NewPlatAlbum:{
            screen:NewPlatAlbum,
            navigationOptions:{
                header:null,
            }
        },
        NewPlatPlaylist: {
            screen: NewPlatPlaylist,
            navigationOptions: {
                header: null,
            }
        },NewPlatChuDe: {
            screen: NewPlatChuDe,
            navigationOptions: {
                header: null,
            }
        },HomePlay: {
            screen: HomePlay,
            navigationOptions: {
                header: null,
            }
        },

    },
    {initialRouteName: 'MenuD', headerLayoutPreset: 'center'},
);

const BOTTOM1 = createAppContainer(BottomTabNavigator);
export default BOTTOM1;
