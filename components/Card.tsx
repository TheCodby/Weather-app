import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

const Card: React.FC = (props) => {
    return (
    <View style={[styles.card, props.style]}>
        {props.children}
    </View>
    );
};
const styles = StyleSheet.create({
    card: {
      borderRadius: 35
    }
});

export default Card;