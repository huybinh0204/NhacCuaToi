import React, {Component} from 'react';
import {View, Text, ScrollView, FlatList, Image, TouchableOpacity, Picker} from "react-native";

const items = [
    {id: 1, ag: 'user 1', agm: 'full name 1', name: 'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg'},
    {id: 2, ag: 'user 2', agm: 'full name 2', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 3, ag: 'user 3', agm: 'full name 3', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 4, ag: 'user 4', agm: 'full name 4', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 5, ag: 'user 5', agm: 'full name 5', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
]
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: items,
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
            <ScrollView>
                <View style={{flex: 1}}>
                    <View>
                        <Text style={{
                            fontSize: 30,
                            marginLeft: 40,
                            color: '#757575',
                            fontWeight: 'bold',
                            marginTop: 40
                        }}>Cart ({items.length} Item)</Text>
                    </View>
                    <FlatList
                        data={this.state.data} renderItem={({item}) =>
                        <View style={{
                            margin: 10,
                            elevation: 7,
                            orderRadius: 10,
                            borderRadius: 10,
                            backgroundColor: '#f5f5f5'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                padding: 10,
                                borderBottomWidth: 1,
                                borderColor: '#656565'
                            }}>
                                <View style={{flex: 2}}>
                                    <Image style={{
                                        width: 70,
                                        height: 60,
                                        padding: 10,
                                        borderRadius: 5
                                    }}
                                           source={{uri: item.name}}/>
                                </View>

                                <View style={{flex: 6,}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{flex: 6}}>
                                            <Text>
                                                {item.ag}
                                            </Text>
                                            <Text style={{color: '#4b4b4b'}}>
                                                {item.agm}
                                            </Text>
                                        </View>
                                        <View style={{flex: 4,
                                            backgroundColor: '#4e4e4e',
                                            borderRadius:10, marginBottom:5}}>
                                            <Picker
                                                selectedValue={this.state.language}
                                                style={{height: 30, width: '100%', color:'#fff', fontSize:10}}
                                                onValueChange={(itemValue, itemIndex) =>
                                                    this.setState({language: itemValue})
                                                }>
                                                <Picker.Item label="QTY - 1" value="java" />
                                                <Picker.Item label="QTY - 2" value="js" />
                                            </Picker>

                                        </View>
                                    </View>
                                    <Text style={{color: '#2979ff'}}>14th August - 17 th August (Day -3)</Text>
                                </View>

                            </View>
                            <View style={{margin: 10, flexDirection: 'row'}}>
                                <TouchableOpacity style={{
                                    borderWidth: 1,
                                    padding: 5,
                                    height: 30,
                                    width: '30%',
                                    marginLeft: 10,
                                    borderRadius: 5,
                                    alignItems: 'center'
                                }}>
                                    <Text style={{color: '#414141'}}>REMOVE</Text>
                                </TouchableOpacity>
                                <View style={{width: '15%'}}></View>
                                <View style={{
                                    height: 30,
                                    padding: 5,
                                    marginLeft: 10
                                }}>
                                    <Text style={{color: '#414141', fontSize: 13}}>Playable Amount = 12345</Text>
                                </View>
                            </View>
                        </View>
                    }/>
                </View>
            </ScrollView>
                <View style={{justifyContent:'flex-end', }}>
                    <View style={{flexDirection:'row', margin:10}}>
                        <View><Text>Total : 2 Units</Text></View>
                        <View style={{width: '26%'}}></View>
                        <View >
                            <Text style={{color: '#414141', fontSize: 13}}>Playable Amount = 12345</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{
                        backgroundColor:'#6a4dff',
                    alignItems:'center', padding:15}}>
                        <Text style={{color:'#fff',fontWeight:'bold'}}>PROCEED TO CHECKOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
export default Cart;
