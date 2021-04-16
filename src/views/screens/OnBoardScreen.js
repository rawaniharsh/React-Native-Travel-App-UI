import React from 'react';
import COLORS from '../../constants/colors';
import {View, StyleSheet, ImageBackground, StatusBar, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OnBoardScreen = ({navigation}) => {
    return <View style={{flex:1}}>
        <StatusBar translucent={false} backgroundColor="rgb(0,0,0,0)"/>
        <ImageBackground
        style={{flex:1}}
        source={require('../../assets/onBoardImage.jpg')}>    
        <View style={style.details}>
            <Text style={{color: COLORS.white, fontSize: 35, fontWeight:'bold'}}>Discover</Text>
            <Text style={{color: COLORS.white, fontSize: 35, fontWeight:'bold'}}>World with us</Text>
            <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15}}>This is a travel UI App in react native which we can use to discover new places in the world.</Text>
            <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 5}}>Share my profile with everyone.</Text>
        </View>
        <TouchableOpacity 
        activeOpacity={0.8}
        onPress={()=>navigation.navigate('HomeScreen')}>
        <View style={style.btn}>
            <Text style={{fontWeight:'bold'}}>Get Started</Text>
        </View>
        </TouchableOpacity>
        </ImageBackground>
    </View>;
};

const style = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        paddingHorizontal: 20,
        position: 'absolute',
    },
    btn: {
        height: 45,
        width: 120,
        backgroundColor: COLORS.white,
        marginTop: 590,
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
    },
});

export default OnBoardScreen;