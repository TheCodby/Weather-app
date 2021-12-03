import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
  Text, 
  ScrollView, 
  View, 
  Button, 
  ImageBackground,
  Image,
  Dimensions} from 'react-native';
import Card from './components/Card';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Almarai: require('./assets/fonts/Almarai-Regular.ttf'),
  });
  const windowHeight = Dimensions.get('screen').height;
  const windowWidth = Dimensions.get('screen').width;
  return (
    <>
      <StatusBar hidden={false} />
      <View>
        <ImageBackground source={require('./assets/images/sunset.jpg')} style={{width: windowWidth, height: windowHeight, backgroundColor: 'rgba(0,0,0)'}} resizeMode="cover">
          <View style={{
            flex:1,
            top:150,
            }}>
            <Card>
              <Text style={{color: 'white', fontFamily: 'Almarai', alignSelf: 'center', fontSize: 28}}>Riyadh</Text>
              <Text style={{color: 'white', fontFamily: 'Almarai', alignSelf: 'center', fontSize: 14}}>Friday, December 3, 2021</Text>
              <Text style={{color: 'white', fontFamily: 'Almarai', alignSelf: 'center', fontSize: 72}}>15<Text style={{color: 'white', fontFamily: 'Almarai', alignSelf: 'center', fontSize: 12}}>°C</Text></Text>
            </Card>
            <View
            style={{
              borderBottomColor: 'white',
              borderBottomWidth: 2,
              width: 300,
              alignSelf: 'center'
            }}
          />
          </View>
          <View style={{
            flex:2,
            top:50,
            }}>
            <Card>
              
            </Card>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
});
