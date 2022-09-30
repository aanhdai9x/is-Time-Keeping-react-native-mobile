import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export default function RadioCustom({ value, changeValue, leftImage, text, radioValue }) {
    return <TouchableOpacity
        style={{
            ...radioStyle.btn,
            ...styles.shadow,
            marginBottom: 20,
            paddingVertical: 20,
        }}
        onPress={changeValue}
    >
        <Image source={leftImage} style={radioStyle.leftImg} />
        <Text style={radioStyle.txt}>{text}</Text>
        {value == radioValue ? <Image source={require("../assets/check.png")} style={radioStyle.tick} /> : null}
    </TouchableOpacity>
}

const radioStyle = StyleSheet.create({
    btn: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 15
    },
    leftImg: { height: 40, width: 40, marginLeft: 10, marginRight: 20, resizeMode: 'contain' },
    txt: { fontSize: 20, color: 'black' },
    tick: { position: 'absolute', right: 0, height: 30, width: 30, marginRight: 30, tintColor: 'green' }
});

const styles = StyleSheet.create({
    shadow: {
      backgroundColor: "#fff",
      borderRadius: 10,
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 10,
      elevation: 10,
    }
  });