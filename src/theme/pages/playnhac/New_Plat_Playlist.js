import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";

class NewPlatPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.componentDidMount_ML();
    }
    componentDidMount_ML() {
        return fetch(
            'https://nhacmp3vip.000webhostapp.com/api_appnhac/PlaylistBaiHat.php'
        )
            .then(response => response.json())
            .then(responseJson_ml => {
                console.log(responseJson_ml);
                this.setState({
                    dataSource_ML: responseJson_ml
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View>
                    <View style={{height: 230, width: '100%', backgroundColor: '#574f47'}}></View>
                    <View style={{marginLeft: 20, marginTop: -130, flexDirection: 'row'}}>
                        <View>
                            <Image style={{height: 100, width: 100}}
                                   source={{uri: "https://nhom1mp3.000webhostapp.com/public/images/banner/chart-new-release-vn.png"}}/>
                        </View>
                        <View>
                            <Text style={{marginLeft: 10, fontSize: 20, color: '#fff', marginTop:30}}>Nhạc Hot 2020</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={{marginTop: 30}}>
                    <FlatList
                        data={this.state.dataSource_ML} renderItem={({item}) =>
                        <TouchableOpacity style={{flex: 1, borderBottomWidth: 1, borderColor: '#cbcbcb', flexDirection:'row'}}>
                            <View style={{margin:10}}>
                                <Image style={{height: 50, width: 50, borderRadius: 50, padding:10}}
                                       source={{uri: item.HinhBaiHat}}/>
                            </View>
                            <View style={{marginLeft: 10 ,margin:10}}>
                                <Text style={{fontSize:16}}>{item.TenBaiHat}</Text>
                                <Text style={{fontSize:16,color:'#888888'}}>{item.CaSi} </Text>
                            </View>

                        </TouchableOpacity>
                    }/>
                </ScrollView>
            </View>
        );
    }
}

export default NewPlatPlaylist;
const styles = StyleSheet.create({});
