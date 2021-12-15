import React, {useEffect, useState} from 'react';
import { StyleSheet,
  Text, 
  ScrollView, 
  View, 
  ImageBackground,
  Dimensions,
  Platform, 
  StatusBar} from 'react-native';
import Card from './components/Card';
import WeatherToday from './components/WeatherToday';
import WeatherWeek from './components/WeatherWeek';
import Header from './components/Header';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from "react-native-responsive-fontsize";
import getWeatherByCity from './utils/getWeatherByCity'
import axios from 'axios';

export default function App() {
  const [fontLoaded] = useFonts({
    Sans: require('./assets/fonts/Sans.ttf'),
  });
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState(false);
  const [weatherPredictions, setWeatherPredictions] = useState(false);
  useEffect(() => {
    const getAsyncInfo = async () => {
      const result = await getWeatherByCity()
      setWeatherData(result[0])
      setWeatherPredictions(result[1])
    }
    getAsyncInfo()
  }, [])  
  if(fontLoaded & weatherData != false & weatherPredictions != false){
    return (
        <View style={styles.app}>
          <View style={styles.section1}>
            <Header data={weatherData} />
          </View>
          <View style={styles.section2}>
            < WeatherToday data={weatherPredictions.hourly} weatherStatus={`Weather will be ${weatherPredictions.daily[0]['weather'][0]['description']} most of the day`} />
            < WeatherWeek data={weatherPredictions.daily} />
          </View>
        </View>
    );
  }else{
    return(
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  section1:{
    backgroundColor: '#0d6efd',
    flex:3,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
  },
  section2:{
    backgroundColor: '#f0f0f0',
    flex:5,
  },
});
