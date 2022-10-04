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
import user from '../../../Model/user';

const sectionLists = [
    {
        sectionTitle: 'THÔNG TIN LIÊN HỆ',
        data: [
            { title: "Họ tên", description: user.name },
            { title: "Vị trí", description: user.position },
            { title: "Email", description: user.email },
            { title: "Ngày bắt đầu làm việc", description: user.startWork },
            { title: "Số điện thoại", description: user.phoneNumber },
            { title: "Leader", description: user.leaderName },
            { title: "Email leader", description: user.leaderEmail },
            { title: "Số lần đi muộn trong tháng", description: user.LatePerMonth },
            { title: "Số lần đi muộn trong năm", description: user.LatePerYear },
        ],
    },
    {
        sectionTitle: 'THÔNG TIN CƠ BẢN',
        data: [
            { title: "Ngày sinh", description: user.birthday },
            { title: "Giới tính", description: user.gender },
            { title: "Số CMND", description: user.IDnumber },
            { title: "Ngày cấp CMND", description: user.dateForID },
            { title: "Nơi cấp CMND", description: user.placeForID },
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