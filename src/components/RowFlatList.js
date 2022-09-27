import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../Constant/Constant";
import { useNavigation } from '@react-navigation/native';

export default function RowFlatList({ workspace }) {
    const navigation = useNavigation();
    const { key, icon, title, description } = workspace;
    return (
        <View style={{
            height: 60,
            paddingVertical: 10,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate(onclick_item(key))} style={{
                borderBottomWidth: 0.75,
                borderColor: COLORS.light_grey,
                width: '100%',
                height: '100%',
            }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
                >
                    <Image style={{ width: 30, height: 30, marginBottom: 15 }} source={icon} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ paddingLeft: 20 }}>{title}</Text>
                        <Text>{description}</Text>
                    </View>
                    <Image style={{ width: 30, height: 30, marginBottom: 15, tintColor: COLORS.light_grey }} source={require('../assets/next.png')} />
                </View>
            </TouchableOpacity>
        </View>
    )

}

function onclick_item(key) {
    switch (key) {
        case 'check_in_statistic':
            return 'CheckinStatisticScreen';
            break;
        case 'project_statistic':
            return 'ProjectStatisticScreen';
            break;
        case 'application_thought':
            return 'ApplicationThoughtScreen';
            break;
        case 'ot_application':
            return 'OTApplicationScreen';
            break;
        case 'office':
            return 'OfficeScreen';
            break;
        case 'checkin_form':
            return 'CheckinFormScreen';
            break;
        case 'checkin_machine':
            return 'CheckinMachineScreen';
            break;
        case 'user':
            return 'UserScreen';
            break;
        case 'date_start_work':
            return 'DateStartWorkScreen';
            break;
        case 'total_date':
            return 'TotalDateScreen';
            break;
        case 'summary_year':
            return 'SummaryYearScreen';
            break;
        case 'not_yet_checkout':
            return 'NotYetCheckoutScreen';
            break;
        case 'language':
            return 'LanguageScreen';
            break;
        case 'edit_information':
            return 'EditInformationScreen';
            break;
        case 'app_information':
            return 'AppInformationScreen';
            break;
        case 'logout':
            return 'LogoutScreen';
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
