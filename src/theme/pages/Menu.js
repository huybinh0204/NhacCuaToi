import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from "react-native";
import {ScrollView} from "react-navigation";

const items = [
    {id: 1, ag: 'Tên ứng dụng', name: 'Nhac_Fistly'},
    {id: 2, ag: 'Phiên bản', name: '1.0.0'},
    {id: 3, ag: 'Nhóm viết', name: 'Nhóm 1'},
    {id: 4, ag: 'Năm', name: '2020'},
    {id: 5, ag: 'Nghành học', name: 'MOB'},
    {id: 5, ag: 'Khóa học', name: '14251'},
    {id: 6, ag: 'Môn học', name: 'Quan ly dự án với phần mềm Agile'},
    {id: 7, ag: 'Trường học', name: 'FPT PolyHN'},
]

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: items,
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#e8d9ec'}}>
                <View>
                    <Image style={{
                        width: '100%',
                        height: 140,
                    }}
                           source={require("../../asset/gioithieu.jpg")}/>
                </View>
                <ScrollView style={{marginTop: 30}}>
                    <FlatList
                        data={this.state.data} renderItem={({item}) =>
                        <View style={{flex:1,  borderBottomWidth:1, borderColor:'#cbcbcb'}}>
                            <View style={{marginLeft: 10,flexDirection:'row',padding:10}}>
                                <Text style={{fontSize:16}}>{item.ag} : </Text>
                                <Text style={{fontSize:16}}>{item.name}</Text>
                            </View>

                        </View>
                    }/>
                </ScrollView>
            </View>
        );
    }
}

export default Menu;
