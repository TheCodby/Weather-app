import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

const Card: React.FC = (props) => {
    return (
    <View style={props.style}>
        {props.children}
    </View>
    );
};
const styles = StyleSheet.create({
    
});

export default Card;