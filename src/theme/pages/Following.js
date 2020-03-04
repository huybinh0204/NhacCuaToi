import React, {Component} from 'react';
import {View, Text, Image, FlatList, ScrollView, TouchableOpacity, Alert, TextInput} from "react-native";

const items = [
    {id: 1, ag: 'user 1', agm: 'full name 1', name: 'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg'},
    {id: 2, ag: 'user 2', agm: 'full name 2', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 3, ag: 'user 3', agm: 'full name 3', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 4, ag: 'user 4', agm: 'full name 4', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 5, ag: 'user 5', agm: 'full name 5', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
]

class Following extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: items,
            tenbaihat: '',
        }
        this.componentDidMount_BaiH();
    }
    componentDidMount_BaiH() {
        return fetch(
            'https://nhacmp3vip.000webhostapp.com/api_appnhac/Baihat_Get.php'
        )
            .then(response => response.json())
            .then(responseJson_baih => {
                console.log(responseJson_baih);
                this.setState({
                    dataSource_BaiH: responseJson_baih
                });
            })
            .catch(error => {
                console.error(error);
            });
    }



    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flexDirection:'row', borderWidth:1 , borderColor:'#cbcbcb', alignItems:'center'}}>
                    <TextInput style={{fontSize:20, width:'80%'}}
                               placeholder="Tìm kiếm"
                               keyboardType='numeric'
                               returnKeyType='next'
                               autoCorrect={false}
                               onChangeText={(tenbaihat) => this.setState({tenbaihat})}
                               value={this.state.tenbaihat}
                    />
                    <TouchableOpacity style ={{width:'20%',height:50, borderWidth:1, borderColor:'#cbcbcb', justifyContent:'center', alignItems:'center'}}>
                        <Image style={{
                            width:30,
                            height: 30,
                            marginRight: 10,
                            borderRadius: 10
                        }}
                               source={require('../../asset/iconsearch.png')}/>
                    </TouchableOpacity>

                </View>
                <ScrollView>
                    <View style={{flex: 1}}>
                        <View>
                            <FlatList
                                data={this.state.dataSource_BaiH} renderItem={({item}) =>
                                <TouchableOpacity onPress={()=>{}} style={{
                                    marginLeft: 10,
                                    marginRight: 10,
                                    marginTop: 5,
                                    marginBottom:5,
                                    elevation: 3,
                                    orderRadius: 10,
                                    borderRadius: 10,
                                    backgroundColor: '#f5f5f5'
                                }}>
                                    <View  style={{flexDirection: 'row', padding: 10}}>
                                        <View style={{flex: 1}}>
                                            <Image style={{
                                                width: 50,
                                                height: 50, borderRadius: 10
                                            }}
                                                   source={{uri: item.HinhBaiHat}}/>
                                        </View>
                                        <View style={{flex: 5, marginLeft: 15, justifyContent:'center'}}>
                                            <Text style={{color: '#4b4b4b'}}>
                                                {item.TenBaiHat}
                                            </Text>
                                            <Text style={{color: '#4b4b4b'}}>
                                                {item.CaSi}
                                            </Text>
                                        </View>
                                        <View style={{flex: 1, alignItems: 'flex-end', marginTop: 5}}>
                                            <Image style={{
                                                width: 40,
                                                height: 40
                                            }}
                                                   source={require('../../asset/iconplay.png')}/>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }/>
                        </View>

                    </View>
                </ScrollView>
            </View>

        );
    }
}

export default Following;
