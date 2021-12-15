import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'
import Card from './Card'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from "react-native-responsive-fontsize";
export default function WeatherToday(props) {
    const weatherData = props.data.slice(0, 24)
    return(
        <Card style={styles.todayWeather}>
            <Text style={[styles.text, {color: 'black', textAlign: 'left', paddingLeft: 10,}]}>{props.weatherStatus}</Text>
            <View
            style={{
                paddingTop: 2,
                borderBottomColor: 'rgba(0,0,0, 0.2)',
                borderBottomWidth: 1,
            }}
            />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>  
            {
                weatherData.map((value, index) => 
                    <Card style={styles.weatherCard} key={index}>
                        <Text style={[styles.text, {color: 'black', fontWeight: 'bold'}]}>
                            {new Date(value['dt'] * 1000).toISOString().substr(11, 5)}</Text>
                        <Image source={{uri: 'http://openweathermap.org/img/wn/'+value['weather'][0]['icon']+'@2x.png'}} style={{width: RFValue(50), height: RFValue(50)}}/>
                        <Text style={[styles.text, {color: 'black'}]}>{Math.round(value['temp'] - 273)}°C</Text>
                    </Card>
                )
            }
            </ScrollView>
        </Card>
    );
}
const styles = StyleSheet.create({
    todayWeather: {
        backgroundColor: 'rgb(255, 255, 255)',
        elevation: 5,
        shadowColor: '#000',
        margin: RFValue(10),
        minHeight: 100,
        padding: 10,
    },
    weatherCard: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    text:{
        fontFamily: 'Sans',
        color: 'white',
    },
})