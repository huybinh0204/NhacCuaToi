import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity,Platform,StyleSheet } from "react-native";

const items = [
    {id: 1, ag: 'user 1', name: 'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg'},
    {id: 2, ag: 'user 2', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 3, ag: 'user 3', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 4, ag: 'user 4', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 5, ag: 'user 5', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: items,
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Title 1',
                    caption: 'Caption 1',
                    url: 'https://reactnativecode.000webhostapp.com/images/dahlia-red-blossom-bloom-60597.jpeg',
                }, {
                    title: 'Title 2',
                    caption: 'Caption 2',
                    url: 'https://reactnativecode.000webhostapp.com/images/flower-impala-lily-floral-plant-65653.jpeg',
                }, {
                    title: 'Title 3',
                    caption: 'Caption 3',
                    url: 'https://reactnativecode.000webhostapp.com/images/flowers-background-butterflies-beautiful-87452.jpeg',
                },
            ],

        }
        this.componentDidMount();
        this.componentDidMount_M();
        this.componentDidMount_K();
        this.componentDidMount_A();
    }
    componentDidMount() {
        return fetch(
            'https://nhacmp3vip.000webhostapp.com/api_appnhac/Playlist_Get.php'
        )
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                this.setState({
                    dataSource: responseJson
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
    componentDidMount_M() {
        return fetch(
            'https://nhacmp3vip.000webhostapp.com/api_appnhac/Chude_Get.php'
        )
            .then(response => response.json())
            .then(responseJson_m => {
                console.log(responseJson_m);
                this.setState({
                    dataSource_M: responseJson_m
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
    componentDidMount_K() {
        return fetch(
            'https://nhacmp3vip.000webhostapp.com/api_appnhac/Theloai_Get.php'
        )
            .then(response => response.json())
            .then(responseJson_k => {
                console.log(responseJson_k);
                this.setState({
                    dataSource_K: responseJson_k
                });
            })
            .catch(error => {
                console.error(error);
            });
    }
    componentDidMount_A() {
        return fetch(
            'https://nhacmp3vip.000webhostapp.com/api_appnhac/Album_Get.php'
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
            <ScrollView>
                <View style={{flex: 1}}>

                    <View>
                        <View style={{alignItems:'center',color:'#cbcbcb', marginBottom:15, marginTop:15}}><Text style={{fontSize:28}}>GIAI ĐIỆU CẢM XÚC</Text></View>
                        <FlatList
                            data={this.state.dataSource} renderItem={({item}) =>
                            <TouchableOpacity style={{
                                marginLeft:10, marginRight:10, marginBottom:10,
                                elevation: 3,
                                orderRadius: 10,
                                borderRadius: 10,
                                backgroundColor: '#cbcbcb',padding:10
                            }}>
                                <View>
                                    <Image style={{width: '98%',height: 130 ,borderRadius: 5, marginLeft:5, marginRight:5,}}
                                           source={{uri: item.HinhNenPlayList}}/>
                                    <View style={{flexDirection:'row', marginTop:-50}}>
                                        <Image style={{width: 50,height: 50 ,borderRadius: 5,}}
                                               source={{uri: item.InconPlayList}}/>
                                        <Text style={{padding: 10, fontSize: 20, color: '#fff', marginTop:10}}>
                                            {item.TenPlayList}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        }/>
                    </View>
                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        height: 230,
                        elevation: 7,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <Text style={{fontSize: 20, paddingBottom: 5}}>
                            CHỦ ĐỀ
                        </Text>
                        <FlatList horizontal
                                  data={this.state.dataSource_M} renderItem={({item}) =>
                            <TouchableOpacity tyle={{
                                marginLeft: 10
                            }}>
                                <Image style={{
                                    width: 130,
                                    height: 130,
                                    margin: 10,
                                    borderRadius: 10
                                }}
                                       source={{uri: item.HinhChuDe}}/>
                                <View>
                                    <Text style={{textAlign: 'center'}}>
                                        {item.TenChuDe}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        }/>
                    </View>
                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        height: 240,
                        backgroundColor: '#f5f5f5'
                    }}>
                        <Text style={{fontSize: 20, paddingBottom: 5}}>
                            THỂ LOẠI
                        </Text>
                        <FlatList horizontal
                                  data={this.state.dataSource_K} renderItem={({item}) =>
                            <TouchableOpacity tyle={{
                                marginLeft: 10
                            }}>
                                <View style={{
                                    marginRight: 10,
                                    padding: 10,
                                    borderRadius: 10,
                                    width: 160,
                                    height: 180,
                                    elevation: 7
                                }}>
                                    <Image style={{
                                        marginTop: 10,
                                        width: 130,
                                        margin: 5,
                                        height: 120,
                                        borderRadius: 5
                                    }}
                                           source={{uri: item.HinhTheLoai}}/>
                                    <View>
                                        <Text style={{marginLeft: 10}}>
                                            {item.ThenTheLoai}
                                        </Text>
                                    </View>
                                </View>

                            </TouchableOpacity>
                        }/>
                    </View>

                    <View style={{
                        marginTop: 10,
                        padding: 10,
                        elevation: 7,
                        backgroundColor: '#f5f5f5',

                    }}>
                        <Text style={{fontSize: 20, paddingBottom: 5}}>
                            ALBUM
                        </Text>
                        <FlatList
                            data={this.state.dataSource_A} renderItem={({item}) => (
                            <TouchableOpacity>
                                <View style={{
                                    padding: 10,
                                    borderRadius: 10,
                                    width: 170,
                                    height: 240,
                                    elevation: 7,
                                    alignItems:'center',
                                    marginBottom:10,
                                }}>
                                    <Image style={{
                                        width: 140,
                                        height: 120,
                                        borderRadius: 10, margin:10
                                    }}
                                           source={{uri: item.HinhAlbum}}/>
                                    <View>
                                        <Text style={{textAlign: 'center', fontSize:16}}>
                                            {item.TenAlbum}
                                        </Text>
                                        <Text style={{textAlign: 'center', color:'#636363'}}>
                                            {item.TenCaSiAlbum}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                            numColumns={2}
                            keyExtractor={(item, index) => index.toString()}/>
                    </View>

                </View>
            </ScrollView>

        );
    }
}

export default Home;
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        backgroundColor: '#FFF8E1'

    }

});
