import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import { COLORS } from '../Constant/Constant';

export default function Empty({ title, subTitle }) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Image
                source={require('../assets/multi_file.png')}
                style={{
                    tintColor: COLORS.dark_green,
                    width: 100,
                    height: 100,
                }}
            />
            <View
                style={{
                    paddingVertical: 20,
                    alignItems: 'center',
                }}
            >
                <Text
                    style={styles.title}
                >{title}</Text>
                <Text
                    style={styles.subTitle}
                >{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 18,
    }
})
