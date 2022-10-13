import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { COLORS, deviceWidth } from '../Constant/Constant'

export default function QR() {
    return (
        <View style={styles.shadow}>
            <Image source={require('../assets/qr.png')} style={styles.image} />
            <Text
                style={{
                    ...styles.centerText,
                    fontWeight: 'bold',
                    marginVertical: 20,
                    fontSize: 16,
                }}
            >Để cài đặt máy Checkin, vui lòng mở ứng dụng Timekeeping và quét mã QR này.</Text>
            <Text
                style={{
                    ...styles.centerText,
                    fontSize: 10,
                    color: COLORS.light_grey,
                }}
            >(Tải ứng dụng Timekeeping tại https://timekeeping.vn/download)</Text>
            
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: deviceWidth * 0.8,
        height: deviceWidth * 0.8,
    },
    shadow: {
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
        padding: 20,
        marginHorizontal: 20,
    },
    centerText: {
        textAlign: 'center',
    }
})



