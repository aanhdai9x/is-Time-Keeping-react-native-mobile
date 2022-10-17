import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';

export default function RadioMultiChoiceCustom({ value, changeValue, leftImage, text, subText, radioValue, color }) {
    return <TouchableOpacity
        style={{
            ...radioStyle.btn,
            ...styles.shadow,
            marginBottom: 10,
            paddingVertical: 20,
        }}
        onPress={changeValue}
    >
        <View
            style={{
                backgroundColor: color,
                alignItems: 'center',
                padding: 15,
                borderRadius: 50,
                marginRight: 10,
            }}
        >
            <Image source={leftImage} style={radioStyle.leftImg} />
        </View>
        <View>
            <Text style={radioStyle.txt}>{text}</Text>
            <Text style={radioStyle.sub_txt}>{subText}</Text>
        </View>
        {radioValue ? <Image source={require("../assets/check.png")} style={radioStyle.tick} /> : null}
    </TouchableOpacity>
}

const radioStyle = StyleSheet.create({
    btn: {
        flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', borderRadius: 15, padding: 15
    },
    leftImg: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        tintColor: 'white',
    },
    txt: { fontSize: 15, color: 'black', fontWeight: '500' },
    sub_txt: { fontSize: 13, paddingRight: 120 },
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