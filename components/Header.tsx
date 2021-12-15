import React, { Component } from 'react'
import { StyleSheet,
    Text, 
    View, 
    ImageBackground,
    Platform,
    Image} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Card from './Card';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Header(props) {
    let weatherData = props.data
    return(
        <ImageBackground style={{width: '100%', height: '100%', justifyContent: 'center',alignItems: 'center',}} imageStyle={{opacity:0.5}} source={require('../assets/images/sun.jpg')} resizeMode="cover">
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.weather}>
                    <Text style={[styles.text, {fontSize: RFValue(25)}]}>{weatherData['name']}</Text>
                    <Text style={[styles.text, {fontSize: RFValue(72)}]}><Image source={{uri: 'http://openweathermap.org/img/wn/'+weatherData['weather'][0]['icon']+'@2x.png'}} style={{width: RFValue(80), height: RFValue(80)}}/>{Math.round(weatherData['main']['temp'] - 273)}<Text style={{fontSize: RFValue(15)}}>°C</Text></Text>
                    <Text style={[styles.text, {fontSize: RFValue(15)}]}>{weatherData['weather'][0]['main']}</Text>
                    <View style={styles.cards}>
                      <Card style={styles.card}>
                        <Icon name="tint" solid size={RFValue(14)} color='#fff' >
                          {' '}{weatherData['main']['humidity']}%
                        </Icon>
                      </Card>
                      <Card style={styles.card}>
                        <Icon name="wind" solid size={RFValue(14)} color='#fff' >
                          {' '}{weatherData['wind']['speed']} KM/H
                        </Icon>
                      </Card>
                    </View>
                </View>
              </View>
            </ImageBackground>
    )
}
const styles = StyleSheet.create({
    text:{
        fontFamily: 'Sans',
        color: 'white',
    },
    cards: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor:'#297EFC',
        elevation: 5,
        shadowColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        width: RFValue(100),
        height: RFValue(30),
        margin: RFValue(5),
    },
    weather:{
        flexDirection:'column', 
        flexWrap:'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
})