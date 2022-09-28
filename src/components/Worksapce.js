import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../Constant/Constant";
import { useNavigation } from '@react-navigation/native';
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

export default function Workspace({ workspace }) {
    const navigation = useNavigation();
    const { key, icon, title, description } = workspace;
    return (
        <View style={{
            width: '46%',
            margin: '2%',
            height: 100,
            ...styles.shadow,
        }}>
            <TouchableOpacity onPress={() => navigation.navigate(onclick_item(key))} style={{
                borderWidth: 0.75,
                borderColor: COLORS.light_grey,
                ...styles.shadow,
                width: '100%',
                height: '100%',
                padding: 10,
            }}
            >
                <View style={{
                }}
                >
                    <Image style={{ width: 30, height: 30, marginBottom: 15 }} source={icon} />
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                        {/* <Text>{description}</Text> */}
                        <AutoSizeText
                            fontSize={12}
                            numberOfLines={1}
                            mode={ResizeTextMode.max_lines}>
                            {description}
                        </AutoSizeText>
                    </View>
                </View>
            </TouchableOpacity>


        </View>
    )

}

function onclick_item(key) {
    switch (key) {
        case 'event':
            return 'EventScreen';
            break;
        case 'meeting_schedule':
            return 'MeetingScheduleScreen';
            break;
        case 'user':
            return 'UserScreen';
            break;
        case 'employee':
            return 'EmployeeScreen';
            break;
        case 'work_calendar':
            return 'WorkCalendarScreen';
            break;
        case 'meeting_calendar':
            return 'MeetingCalendarScreen';
            break;
        case 'application':
            return 'ApplicationScreen';
            break;
        case 'approve_application':
            return 'ApproveApplicationScreen';
            break;
        case 'comment':
            return 'CommentScreen';
            break;
        case 'ot':
            return 'OTScreen';
            break;
        case 'approve_ot':
            return 'ApproveOTScreen';
            break;
        case 'project2':
            return 'Project2Screen';
            break;
        case 'seniority':
            return 'SeniorityScreen';
            break;
        case 'summary':
            return 'SummaryScreen';
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

    }
});
