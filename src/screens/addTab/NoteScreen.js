import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native'
import SectionList from 'react-native/Libraries/Lists/SectionList'
import { COLORS } from '../../Constant/Constant'
import { TouchableOpacity } from "react-native-gesture-handler"

const sectionLists = [
    {
        sectionTitle: 'ĐƠN XIN NGHỈ / OT',
        data: [
            { icon: require('../../assets/check.png'), title: "Đã duyệt", description: "" },
            { icon: require('../../assets/waiting.png'), title: "Đang chờ duyệt", description: "" },
            { icon: require('../../assets/prohibition.png'), title: "Đã từ chối", description: "" },
        ],
    },
    {
        sectionTitle: 'LỊCH / CHECKIN',
        data: [
            { icon: require('../../assets/green_circle.png'), title: "Ngày đi làm", description: "" },
            { icon: require('../../assets/orange_circle.png'), title: "Ngày đi làm muộn", description: "" },
            { icon: require('../../assets/grey_circle.png'), title: "Ngày nghỉ cuối tuần, nghỉ lễ, ngày nghỉ có phép", description: "" },
            { icon: require('../../assets/red_circle.png'), title: "Nghỉ không lý do", description: "" },
        ],
    },
    {
        sectionTitle: 'DỰ ÁN',
        data: [
            { icon: require('../../assets/green_circle.png'), title: "Đã đánh giá", description: "" },
            { icon: require('../../assets/orange_circle.png'), title: "Chưa đánh giá", description: "" },
            { icon: require('../../assets/grey_circle.png'), title: "Ngày nghỉ cuối tuần, nghỉ lễ, nghỉ có phép không phải đánh giá", description: "" },
        ],
    },
    {
        sectionTitle: '',
        data: [],
    },
    {
        sectionTitle: '',
        data: [],
    },
];

export default function Note({ navigation }) {
    return (
        <SafeAreaView>
            <SectionList
                style={styles.padding}
                sections={sectionLists}
                keyExtractor={(section, index) => section + index}
                renderSectionHeader={({ section: { sectionTitle } }) => (
                    sectionTitle = <Text style={styles.header}>{sectionTitle}</Text>
                )}
                renderItem={({ item, index }) => (
                    <View style={{
                        height: 60,
                        paddingVertical: 10,
                    }}>
                        <TouchableOpacity style={{
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
                                <Image style={{ width: 20, height: 20, marginRight: 15 }} source={item.icon} />
                                <View style={{ 
                                    flex: 1,
                                }}>
                                    <Text>{item.title}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    padding: {
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 14,
        marginVertical: 20,
        color: COLORS.light_grey,
        fontWeight: 'bold',
    },
});