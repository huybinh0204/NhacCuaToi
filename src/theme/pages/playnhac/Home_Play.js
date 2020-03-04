import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";

class HomePlay extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <View>
                    <Image style={{height: 300, width: '100%', marginTop:-120}}
                              source={{uri: "https://billboardvn.vn/wp-content/uploads/2020/02/vlcsnap-2020-02-08-12h49m54s975.png"}}/>
                    <View style={{height: 200, width: '100%', marginTop:-200,backgroundColor: 'rgba(0,0,0,0.4)'}}></View>
                </View>
                <View style ={{flex:1, marginTop:-60}}>
                    <View style={{alignItems:'center'}}>
                        <Image Image style={{height: 130, width: '60%' , borderRadius:5}}
                               source={{uri: "https://billboardvn.vn/wp-content/uploads/2020/02/vlcsnap-2020-02-08-12h49m54s975.png"}}/>
                    </View>
                </View>
                <View style={{height:1, backgroundColor:'#000', marginRight:30, marginLeft:30}}>

                </View>
                <View style={{height:100,flexDirection:'row', alignItems:'center', justifyContent:"center", marginBottom:20}}>
                    <TouchableOpacity style={{ padding:10, paddingRight:50}}>
                        <Image style={{height: 30 ,width: 30}}
                               source={require('../../../asset/iconsuffle.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ padding:10}}>
                        <Image style={{height: 30 ,width: 30}}
                               source={require('../../../asset/iconpreview.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ padding:10}}>
                        <Image style={{height: 40 ,width: 40}}
                               source={require('../../../asset/iconplaybanner.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ padding:10}}>
                        <Image style={{height: 30 ,width: 30}}
                               source={require('../../../asset/iconnext.png')}/>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

export default HomePlay;
const styles = StyleSheet.create({

});
