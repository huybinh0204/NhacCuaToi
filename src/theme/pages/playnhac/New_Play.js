import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";

class NewPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View>
                    <View style={{height: 200, width: '100%', marginTop:-200,backgroundColor: 'rgba(0,0,0,0.4)'}}></View>
                    <Image style={{height: 300, width: '100%', marginTop:-120}}
                           source={{uri: "https://billboardvn.vn/wp-content/uploads/2020/02/vlcsnap-2020-02-08-12h49m54s975.png"}}/>

                </View>

            </View>
        );
    }
}

export default NewPlay;
const styles = StyleSheet.create({

});
