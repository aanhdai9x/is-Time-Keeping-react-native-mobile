import React from 'react'
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { COLORS } from '../../../Constant/Constant'
import SectionList from 'react-native/Libraries/Lists/SectionList'
import RowInformation from '../../../components/RowInformation';

const sectionLists = [
    {
        sectionTitle: 'THÔNG TIN LIÊN HỆ',
        data: [
            { title: "Họ tên", description: "Administrator" },
            { title: "Vị trí", description: "" },
            { title: "Email", description: "nvduong@cmc.com.vn" },
            { title: "Ngày bắt đầu làm việc", description: "21/09/2022" },
            { title: "Số điện thoại", description: "" },
            { title: "Leader", description: "Administrator" },
            { title: "Email leader", description: "abc@gmail.com" },
            { title: "Số lần đi muộn trong tháng", description: "0" },
            { title: "Số lần đi muộn trong năm", description: "0" },
        ],
    },
    {
        sectionTitle: 'THÔNG TIN CƠ BẢN',
        data: [
            { title: "Ngày sinh", description: "" },
            { title: "Giới tính", description: "Nam" },
            { title: "Số CMND", description: "" },
            { title: "Ngày cấp CMND", description: "" },
            { title: "Nơi cấp CMND", description: "" },
        ],
    },
    {
        sectionTitle: 'BUTTON',
        data: [
            { title: "CẬP NHẬT THÔNG TIN", description: "" },
        ],
    },
    {
        sectionTitle: '',
        data: [

        ],
    },
    {
        sectionTitle: '',
        data: [

        ],
    },
];

export default function InformationScreen({ navigation }) {
    return (
        <SafeAreaView>
            <SectionList
                style={styles.padding}
                sections={sectionLists}
                keyExtractor={(section, index) => section + index}
                renderSectionHeader={({ section: { sectionTitle } }) => (
                    sectionTitle == 'BUTTON' ? null : 
                    <Text style={styles.header}>{sectionTitle}</Text>
                  )}
                renderItem={({ item, index }) => (
                    <RowInformation workspace={item} />
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