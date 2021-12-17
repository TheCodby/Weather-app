import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from 'react-native'
import Card from './Card'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {images} from '../assets/ImagesManager';

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function filterWeatherData(data)
{
    const filterdArr = []
    data.map((value, index) => {
        let day = new Date(Number(value['dt']) * 1000);
        let temp = `Min: ${Math.round(value['temp']['min'] - 273)}°C | Max: ${Math.round(value['temp']['max'] - 273)}°C`
        let icon = value['weather'][0]['icon']
        filterdArr.push([days[day.getDay()], temp, icon])
    })
    filterdArr[0][0] = 'Today';
    return filterdArr
}
export default function WeatherWeek(props) {
    const weatherData = filterWeatherData(props.data);
    return(
        <Card style={[styles.weather, {height: 150}]}>
            <Text style={[styles.text, {color: 'black', textAlign: 'left', paddingLeft: 10,}]}>7-day forecast</Text>
            <View
            style={{
                paddingTop: 2,
                borderBottomColor: 'rgba(0,0,0, 0.2)',
                borderBottomWidth: 1,
            }}
            />
            <View style={styles.rows}>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={weatherData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.row}>
                        {
                        item.map((value, index) =>
                            index == 2 ?
                            <Image key={index} source={images[`x${value}`].uri} style={{width: RFValue(30), height: RFValue(30)}}/>
                            :
                            <Text key={index} style={[styles.cell, styles.text, {color: 'black'}]}>{value}</Text>
                        )
                        }
                    </View>
                )}
                />
            </View>
        </Card>
    );
}
const styles = StyleSheet.create({
    weather: {
        backgroundColor: 'rgb(255, 255, 255)',
        elevation: 5,
        shadowColor: '#000',
        margin: RFValue(10),
        minHeight: RFValue(280),
        padding: RFValue(15),
    },
    rows: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0, 0.2)',
        padding: RFValue(4),
        alignItems: 'center'
    },
    cell: {
        flex: 1,
    },
    text:{
        fontFamily: 'Sans',
    },
})