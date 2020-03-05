import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity, StyleSheet, ImageBackground} from "react-native";
import Sound from 'react-native-sound';
const audioList = [
    {
        title: 'Play mp3 sound from Local',
        url: "https://nhom1mp3.000webhostapp.com/public/images/product/B%C3%A1nh_Tr%C3%B4i_N%C6%B0%E1%BB%9Bc_Ho%C3%A0ng_Th%C3%B9y_Linh_-1075552421.mp3",
    },
];
var sound1, sound2, sound3, sound4, sound5, sound6;
function playSound(item, index) {
    if (index == 0) {
        sound1 = new Sound(item.url, '', (error, sound) => {
            if (error) {
                alert('error' + error.message);
                return;
            }
            sound1.play(() => {
                sound1.release();
            });
        });
    }
    // else if (index == 1) {
    //     sound2 = new Sound(item.url, '', (error, sound) => {
    //         if (error) {
    //             alert('error' + error.message);
    //             return;
    //         }
    //         sound2.play(() => {
    //             sound2.release();
    //         });
    //     });
    // } else if (index == 2) {
    //     sound3 = new Sound(item.url, '', (error, sound) => {
    //         if (error) {
    //             alert('error' + error.message);
    //             return;
    //         }
    //         sound3.play(() => {
    //             sound3.release();
    //         });
    //     });
    // } else if (index == 3) {
    //     sound4 = new Sound(item.url, '', (error, sound) => {
    //         if (error) {
    //             alert('error' + error.message);
    //             return;
    //         }
    //         sound4.play(() => {
    //             sound4.release();
    //         });
    //     });
    // } else if (index == 4) {
    //     sound5 = new Sound(item.url, '', (error, sound) => {
    //         if (error) {
    //             alert('error' + error.message);
    //             return;
    //         }
    //         sound5.play(() => {
    //             sound5.release();
    //         });
    //     });
    // } else if (index == 5) {
    //     sound6 = new Sound(item.url, '', (error, sound) => {
    //         if (error) {
    //             alert('error' + error.message);
    //             return;
    //         }
    //         sound6.play(() => {
    //             sound6.release();
    //         });
    //     });
    // }
}

function stopSound(item, index) {
    if (index == 0 && sound1) {
        sound1.stop(() => {
            console.log('Stop');
        });
    } else if (index == 1 && sound2) {
        sound2.stop(() => {
            console.log('Stop');
        });
    }
    // else if (index == 2 && sound3) {
    //     sound3.stop(() => {
    //         console.log('Stop');
    //     });
    // } else if (index == 3 && sound4) {
    //     sound4.stop(() => {
    //         console.log('Stop');
    //     });
    // } else if (index == 4 && sound5) {
    //     sound5.stop(() => {
    //         console.log('Stop');
    //     });
    // } else if (index == 5 && sound6) {
    //     sound6.stop(() => {
    //         console.log('Stop');
    //     });
    // }
}

function componentWillUnmount() {
    sound1.release();
    sound2.release();
    // sound3.release();
    // sound4.release();
    // sound5.release();
    // sound6.release();
}
class HomePlay extends Component {
    constructor(props) {
        super(props);
        Sound.setCategory('Playback', true); // true = mixWithOthers
        this.state = {
            tests: {},
        };
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
                {audioList.map((item, index) => {
                    return (
                <View style={{height:100,flexDirection:'row', alignItems:'center', justifyContent:"center", marginBottom:20}}>
                    <TouchableOpacity style={{ padding:10, paddingRight:30}}>
                        <Image style={{height: 25 ,width: 25}}
                               source={require('../../../asset/iconsuffle.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ padding:10}}>
                        <Image style={{height: 30 ,width: 30}}
                               source={require('../../../asset/iconpreview.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        return playSound(item, index);
                    }}  style={{ padding:10}}>
                        <Image style={{height: 45 ,width: 45}}
                               source={require('../../../asset/iconpause.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        return stopSound(item, index);
                    }}  style={{ padding:10}}>
                        <Image style={{height: 45 ,width: 45}}
                               source={require('../../../asset/iconplaybanner.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{ padding:10}}>
                        <Image style={{height: 30 ,width: 30}}
                               source={require('../../../asset/iconnext.png')}/>
                    </TouchableOpacity>

                </View>
                    );
                })}
            </View>
        );
    }
}

export default HomePlay;
const styles = StyleSheet.create({

});
