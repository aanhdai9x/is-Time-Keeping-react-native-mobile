import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../Constant/Constant";
import { useNavigation } from '@react-navigation/native';
import OnTimeScreen from "../screens/addTab/checkinStatisticTab/OnTimeScreen";

export default function RowCheckinStatistic({ workspace }) {
    const navigation = useNavigation();
    const { key, icon, title, description } = workspace;
    return (
        <View style={{
            paddingHorizontal: 20,
            paddingVertical: 5,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate(onclick_item(key))} style={{
                borderWidth: 0.75,
                borderColor: COLORS.light_grey,
                ...styles.shadow,
            }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 20,
                }}
                >
                    {!icon ? null : <Image style={{ width: 35, height: 35 }} source={icon} />}
                    <View style={{
                        flex: 1,
                        paddingLeft: 20,
                    }}>
                        <Text style={{ fontWeight: '500', fontSize: 18, }}>{title}</Text>
                        <Text style={{ color: COLORS.dark_green }}>{description}</Text>
                    </View>
                    <Image style={{ width: 30, height: 30, tintColor: COLORS.light_grey }} source={require('../assets/next.png')} />
                </View>
            </TouchableOpacity>
        </View>
    )

}

function onclick_item(key) {
    switch (key) {
        case 'on_time':
            return 'OnTimeScreen';
            break;
        case 'late_time':
            return 'LateTimeScreen';
            break;
        case 'not_yet_chekin':
            return 'NotYetCheckinScreen';
            break;

        default:
            break;
    }
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 10,

    },

});
