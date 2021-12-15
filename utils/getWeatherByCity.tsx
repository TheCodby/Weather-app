import React, {useState, useEffect} from 'react'
import axios from 'axios';
import * as Location from 'expo-location';

export default async function getWeatherByCity()
{
    let weatherNowData = [];
    let weatherPredictions = [];
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    //NOW
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?&lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=210bb5d80f56ca2086df3dd44c471818`)
    .then(response => {
      weatherNowData = response.data
    })
    .catch(error => {
      console.log(error)
    });
    //HOURLY
    await axios.get(`https://api.openweathermap.org/data/2.5/onecall?&lat=${location.coords.latitude}&lon=${location.coords.longitude}&exclude=minutely&appid=210bb5d80f56ca2086df3dd44c471818`)
    .then(response => {
      weatherPredictions = response.data
    })
    .catch(error => {
      console.log(error)
    });
    return [weatherNowData, weatherPredictions];
}