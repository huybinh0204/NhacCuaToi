import React, {Component} from 'react';
import {View, Text, ScrollView, Image, FlatList, TouchableOpacity,Dimensions,StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
// const height = width * 0.2844;
const items = [
    {id: 1, ag: 'user 1', name: 'https://cdn.pixabay.com/photo/2015/02/09/20/03/koala-630117__340.jpg'},
    {id: 2, ag: 'user 2', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 3, ag: 'user 3', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 4, ag: 'user 4', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
    {id: 5, ag: 'user 5', name: 'https://cdn.pixabay.com/photo/2019/07/25/01/38/kangaroo-4361467__340.jpg'},
]
const asd = [
    {
        id: 20,
        TenBaiHat: "Tình Đẹp Đến Mấy Cũng Tàn",
        HinhBaiHat: "https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/7/3/2/5/73257d3f2cb6b1c16719bebc443980f9.jpg",
        NoiDungQuangCao: "Câu Lạc Bộ Hits Vol 4",
        HinhanhQuangCao: "https://nhom1mp3.000webhostapp.com/public/images/banner/8.jpg"
    },
    {
        id: 56,
        TenBaiHat: "Cô Đơn Không Muốn Về Nhà",
        HinhBaiHat: "https://i.ytimg.com/vi/rH7e4hXtYGA/hqdefault.jpg",
        NoiDungQuangCao: "Hit Mới Nhất Của Mr Siro",
        HinhanhQuangCao: "https://nhom1mp3.000webhostapp.com/public/images/banner/cdkmvn.jpg"
    },
    {
        id: 57,
        TenBaiHat: "Hơn Cả Yêu",
        HinhBaiHat: "https://billboardvn.vn/wp-content/uploads/2020/02/vlcsnap-2020-02-08-12h49m54s975.png",
        NoiDungQuangCao: "Ca khúc mới nhất của Đức Phúc",
        HinhanhQuangCao: "https://nhom1mp3.000webhostapp.com/public/images/banner/hcy.png"
    }
]

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: items,
            search: '',
            sliderIndex: 0,
            maxSlider: 2,
            banners: asd,

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
    setRef = (c) => {
        this.listRef = c;
    }

    scrollToIndex = (index, animated) => {
        this.listRef && this.listRef.scrollToIndex({ index, animated })
    }

    componentWillMount() {
        setInterval(function() {
            const { sliderIndex, maxSlider } = this.state
            let nextIndex = 0

            if (sliderIndex < maxSlider) {
                nextIndex = sliderIndex + 1
            }

            this.scrollToIndex(nextIndex, true)
            this.setState({sliderIndex: nextIndex})
        }.bind(this), 3000)
    }
    render() {
        return (
            <ScrollView>
                <View style={{flex: 1}}>
                    <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                        <FlatList
                            ref={this.setRef}
                            data={this.state.banners}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled
                            keyExtractor={item => item._id}
                            renderItem={({item, i}) => (
                                <View key={i} style={{ height:180, width}}>
                                    <Image style={{ height:180, width }} source={{ uri: item.HinhanhQuangCao }} />
                                </View>
                            )}
                            onMomentumScrollEnd={(event) => {
                                let sliderIndex = event.nativeEvent.contentOffset.x ? event.nativeEvent.contentOffset.x/width : 0
                                this.setState({sliderIndex})
                            }}
                        />
                        <View style={styles.sliderContainer}>
                            {
                                this.state.banners.map(function(item, index) {
                                    return (
                                        <View key={index} style={styles.sliderBtnContainer}>
                                            <View style={styles.sliderBtn}>
                                                {
                                                    this.state.sliderIndex == index ? <View style={styles.sliderBtnSelected}/> : null
                                                }
                                            </View>
                                        </View>
                                    )
                                }.bind(this))
                            }
                        </View>
                    </ScrollView>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    scrollContainer: {
        flex: 1
    },
    sliderContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 150,
        alignSelf: 'center'
    },
    sliderBtn: {
        height: 13,
        width: 13,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10
    },
    sliderBtnSelected: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: 'white',
    },
    sliderBtnContainer: {
        flexDirection: 'row', marginBottom: 24
    },
});
