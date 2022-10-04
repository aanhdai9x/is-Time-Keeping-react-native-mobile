import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../Constant/Constant";
import { useNavigation } from '@react-navigation/native';

export default function RowInformation({ workspace }) {
    const navigation = useNavigation();
    const { title, description } = workspace;
    return (
        <View style={{
            height: 60,
            paddingVertical: 10,
        }}>
            <View style={{
                borderBottomWidth: title != 'CẬP NHẬT THÔNG TIN' ? 0.75 : 0,
                borderColor: COLORS.light_grey,
                width: '100%',
                height: '100%',
            }}
            >
                {
                    title != 'CẬP NHẬT THÔNG TIN' ?
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                        >
                            <Text style={{ flex: 1 }}>{title}</Text>
                            <Text style={{ color: COLORS.light_grey }}>{description}</Text>
                        </View> :
                        <TouchableOpacity
                            style={{
                                backgroundColor: COLORS.dark_green,
                                alignItems: 'center',
                                ...styles.shadow,
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                }}
                            >{title}</Text>
                        </TouchableOpacity>
                }

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    shadow: {
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,
        paddingVertical: 10,
    },

});
