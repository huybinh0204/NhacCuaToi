import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";

class NewPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.componentDidMount_A();
    }
    componentDidMount_A() {
        return fetch(
            'https://nhacmp3vip.000webhostapp.com/api_appnhac/TheLoaiBaiHat.php'
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
                                   source={{uri: "https://zmp3-photo-fbcrawler.zadn.vn/cover_video/c/4/2/a/c42ae785d99d2416ed3221d528ae4b39.jpg"}}/>
                        </View>
                        <View>
                            <Text style={{marginLeft: 10, fontSize: 20, color: '#fff', marginTop:30}}>V-Pop</Text>
                        </View>
                    </View>
                </View>
                <ScrollView style={{marginTop: 30}}>
                    <FlatList
                        data={this.state.dataSource_A} renderItem={({item}) =>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('HomePlay')}} style={{flex: 1, borderBottomWidth: 1, borderColor: '#cbcbcb', flexDirection:'row'}}>
                            <View style={{margin:10}}>
                                <Image style={{height: 50, width: 50, borderRadius: 50, padding:10}}
                                       source={{uri: item.HinhBaiHat}}/>
                            </View>
                            <View style={{marginLeft: 10 ,margin:10}}>
                                <Text style={{fontSize:16}}>{item.TenBaiHat}</Text>
                                <Text style={{fontSize:16 , color:'#888888'}}>{item.CaSi} </Text>
                            </View>

                        </TouchableOpacity>
                    }/>
                </ScrollView>
            </View>
        );
    }
}

export default NewPlay;
const styles = StyleSheet.create({});
