import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";

class NewPlatAlbum extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.componentDidMount_A();
    }
    componentDidMount_A() {
        return fetch(
            'https://nhacmp3vip.000webhostapp.com/api_appnhac/AlbumBaiHat.php'
        )
            .then(response => response.json())
            .then(responseJson_a => {
                console.log(responseJson_a);
                this.setState({
                    dataSource_A: responseJson_a
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
                                   source={{uri: "https://avatar-nct.nixcdn.com/playlist/2017/11/21/a/d/c/5/1511254430140_500.jpg"}}/>
                        </View>
                        <View>
                            <Text style={{marginLeft: 10, fontSize: 20, color: '#fff', marginTop:20}}>Nhạc Remix Hot Tháng</Text>
                            <Text style={{marginLeft: 10, fontSize: 20, color: '#e0d2e4'}}>Binz, Orange</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={{marginTop: 30}}>
                    <FlatList
                        data={this.state.dataSource_A} renderItem={({item}) =>
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

export default NewPlatAlbum;
const styles = StyleSheet.create({});
