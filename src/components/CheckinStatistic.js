import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { COLORS } from '../Constant/Constant'

export default function CheckinStatistic() {
    return <View style={styles.container}>
        <View
            style={{
                marginBottom: 10,
            }}
        >
            <Text style={styles.bold}>
                Thống kê checkin tháng 09/2022
            </Text>
            <Text>
                Lịch sử checkin trong tháng
            </Text>
        </View>
        <View style={{
            ...styles.border_shadow,
            flexDirection: 'row',
            justifyContent: 'space-between',
        }}>
            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: COLORS.dark_green,
                        ...styles.bold,
                    }}
                >0/0</Text>
                <Text
                    style={{
                        fontSize: 15,
                    }}
                >Ngày công</Text>
            </View>
            <View
                style={{
                    justifyContent: 'space-around',
                }}
            >
                <Image style={styles.image} source={require('../assets/dot.png')} />
            </View>
            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: 'orange',
                        ...styles.bold
                    }}
                >0</Text>
                <Text
                    style={{
                        fontSize: 15,
                    }}
                >Đi muộn</Text>
            </View>
            <View
                style={{
                    justifyContent: 'space-around',
                }}
            >
                <Image style={styles.image} source={require('../assets/dot.png')} />
            </View>
            <View
                style={{
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        color: 'red',
                        ...styles.bold,
                    }}
                >0</Text>
                <Text
                    style={{
                        fontSize: 15,
                    }}
                >Nghỉ làm</Text>
            </View>
        </View>
        <View style={{
            ...styles.border_shadow,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <Text>Số ngày phép còn lại trong năm</Text>
            <Text
                style={{
                    fontWeight: 'bold',
                }}
            >0</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 20,
        height: 20,
    },
    border_shadow: {
        borderWidth: 0.75,
        borderColor: COLORS.light_grey,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
        padding: 20,
        marginVertical: 10,
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    text: {
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 12,
    },
    container: {

    }
})