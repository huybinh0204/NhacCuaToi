import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';

class OnboardingLogin extends Component {
    render() {
        return (
            <ImageBackground style={{flex: 1, justifyContent: 'center'}}
                             source={require("../../asset/login.png")}>
                <View style={{margin: 20}}>
                    <View>
                        <Text style={{color: '#fff',
                            fontSize: 60,
                            textAlign: 'center',
                            fontWeight:'bold', marginTop:110
                        }}>Welcome to OLSO </Text>
                        <Text style={{color: '#fff',fontSize:16,
                            marginTop:80,
                        textAlign: 'center'}}>The Best place to rent thousands of products
                        and earn on the go.</Text>
                        <Text style={{color:'#fff', marginTop:30}}>Continue with</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={{backgroundColor:'#64B5f6', marginTop:10, borderRadius:10}}>
                            <Text style={{color:'#fff', padding:15, textAlign:'center'}}>EMAIL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{backgroundColor:'#353A50', marginTop:20,borderRadius:10}}>
                            <Text style={{color:'#fff', padding:15,textAlign:'center'}}>FACEBOOK</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ImageBackground>
        );
    }
}

export default OnboardingLogin;
