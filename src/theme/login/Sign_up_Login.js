import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';

class SignUpLogin extends Component {
    render() {
        return (
            <View style={{margin: 20, flex: 1}}>
                <View style={styles.view_input}>
                    <TextInput style={styles.styletextinput}
                               placeholderTextColor="#60605e"
                               numeric value
                               placeholder="Full NAme"/>
                    <TextInput style={[styles.styletextinput, {marginTop: 20}]}
                               placeholder="Email"
                               placeholderTextColor="#60605e"
                               numeric value/>
                    <TextInput style={[styles.styletextinput, {marginTop: 20}]}
                               placeholder="Phone"
                               placeholderTextColor="#60605e"
                               numeric value/>
                    <TextInput style={[styles.styletextinput, {marginTop: 20}]}
                               placeholder="Password"
                               placeholderTextColor="#60605e"
                               numeric value/>
                    <TouchableOpacity style={styles.view_touchableOpacity}>
                        <Text style={styles.text_touchableOpacity}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default SignUpLogin;
const styles = StyleSheet.create({
    view_input: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: 30,
    },
    styletextinput: {
        width: '100%',
        backgroundColor: '#F4F4F6',
        padding: 10,
        borderRadius: 10
    },
    view_touchableOpacity:{
        marginTop: 30,
        backgroundColor:'#2976ff',
        borderRadius: 10
    },
    text_touchableOpacity:{
        color:'#fff',textAlign:'center', padding: 10
    }
});



