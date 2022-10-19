import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { COLORS } from '../Constant/Constant'
import { deviceHeight, deviceWidth } from '../Constant/Constant'
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

export default function CardInformation() {
    return (
        <View style={styles.card}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
            >
                <Image
                    source={require('../assets/app_icon_green.png')}
                    style={{
                        height: 100,
                        width: 100,
                    }}
                />
                <AutoSizeText
                    fontSize={30}
                    numberOfLines={1}
                    mode={ResizeTextMode.max_lines}
                    style={{
                        color: COLORS.dark_green,
                        fontWeight: '500',
                    }}
                >
                    Time Keeping
                </AutoSizeText>
            </View>
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
    );
}

const styles = StyleSheet.create({
    card: {
        height: '100%',
        width: '100%',
        backgroundColor: "#fff",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 20,
        //paddingVertical: 60,
    },
});