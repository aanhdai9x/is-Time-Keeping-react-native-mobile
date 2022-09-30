import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { COLORS } from '../Constant/Constant'
import { deviceHeight, deviceWidth } from '../Constant/Constant'
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

export default function CardInformation() {
    return <View style={styles.card}>
        <TouchableOpacity>
            <Image
                source={require('../assets/timekeeping_logo.png')}
                style={{
                    tintColor: COLORS.dark_green,
                    width: deviceWidth * 0.8,
                    height: deviceHeight * 0.1,
                }}
            />
        </TouchableOpacity>
        <View
            style={{
                alignItems: 'center',
            }}
        >
            <AutoSizeText
                fontSize={22}
                numberOfLines={2}
                mode={ResizeTextMode.max_lines}
                style={{
                    textAlign: 'center',
                    paddingHorizontal: 30,
                }}
            >
                Giải pháp quản lý tài nguyên doanh nghiệp
            </AutoSizeText>
            <Text
                style={{
                    color: COLORS.light_grey,
                }}
            >15/09/2000 - v1.2</Text>
        </View>
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                }}
            >Website:{' '}
                <Text
                    style={{
                        color: COLORS.dark_green,
                        paddingHorizontal: 5,
                    }}
                >
                    https://timekeeping.com
                </Text></Text>
            <Text></Text>
            <Text
                style={{ fontSize: 20 }}
            >Hotline:{' '}
                <Text
                    style={{
                        color: COLORS.dark_green,
                        paddingHorizontal: 5,
                    }}
                >
                    0123456789
                </Text></Text>
            <Text></Text>
            <Text
                style={{
                    fontSize: 20,
                }}
            >Sale:{' '}
                <Text
                    style={{
                        color: COLORS.dark_green,
                        paddingHorizontal: 5,
                    }}
                >
                    sale.timekeeping@gmail.com
                </Text></Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    card: {
        height: '100%',
        width: '100%',
        backgroundColor: "#fff",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 20,
        paddingVertical: 60,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        borderWidth: 3,
        borderColor: COLORS.dark_green,
        backgroundColor: COLORS.dark_green,
        alignItems: 'center',
        justifyContent: 'center',
    }
});