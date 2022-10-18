import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../Constant/Constant";
import { useNavigation } from '@react-navigation/native';

export default function RowWorkplace({ workspace }) {
    const navigation = useNavigation();
    const { key, icon, title, description } = workspace;
    return (
        <View style={{
            marginTop: 10,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate(onclick_item(key))} style={{
                borderTopWidth: 0.75,
                borderBottomWidth: 0.75,
                borderColor: COLORS.light_grey,
                ...styles.shadow,
                padding: 10,
            }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: 70,
                }}
                >
                    <Image style={{ width: 50, height: 50 }} source={icon} />
                    <View style={{ flex: 1, alignContent: 'center' }}>
                        <Text style={{
                            paddingLeft: 20,
                            color: key != 'honor' ? 'black' : COLORS.dark_green,
                            fontWeight: 'bold'
                        }}>{title}</Text>
                    </View>
                    <Image style={{ width: 30, height: 30, tintColor: COLORS.light_grey }} source={require('../assets/next.png')} />
                </View>
            </TouchableOpacity>
        </View>
    )

}

function onclick_item(key) {
    switch (key) {
        case 'colleague_birthday':
            return 'ColleagueBirthdayScreen';
            break;
        case 'honor':
            return 'HonorScreen';
            break;

        default:
            break;
    }
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: "#fff",
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    }
});
