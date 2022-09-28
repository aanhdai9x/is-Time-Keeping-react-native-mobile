import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'
import { COLORS } from '../Constant/Constant'
import SectionList from 'react-native/Libraries/Lists/SectionList'
import RowFlatList from '../components/RowFlatList';
import CardCustom from '../components/CardCustom';

const sectionLists = [
  {
    sectionTitle: '',
    data: [
      {key: 'card'}
    ],
  },
  {
    sectionTitle: 'THỐNG KÊ',
    data: [
      { key: 'check_in_statistic', icon: require('../assets/qr.png'), title: "Thống kê checkin", description: "" },
      { key: 'project_statistic', icon: require('../assets/project2.png'), title: "Thống kê dự án", description: "" },
      { key: 'application_thought', icon: require('../assets/application.png'), title: "Đơn báo nghỉ", description: "" },
      { key: 'ot_application', icon: require('../assets/ot.png'), title: "Đơn báo làm thêm", description: "" },
      { key: 'office', icon: require('../assets/office.png'), title: "Văn phòng làm việc", description: "" },
      { key: 'checkin_form', icon: require('../assets/checkin_form.png'), title: "Hình thức checkin", description: "" },
      { key: 'checkin_machine', icon: require('../assets/checkin_machine.png'), title: "Máy checkin", description: "" },
    ],
  },
  {
    sectionTitle: 'CÁ NHÂN',
    data: [
      { key: 'user', icon: require('../assets/user.png'), title: "Cá nhân", description: "" },
      { key: 'date_start_work', icon: require('../assets/seniority.png'), title: "Ngày bắt đầu làm việc", description: "" },
      { key: 'total_date', icon: require('../assets/meeting_calendar.png'), title: "Tổng số ngày", description: "" },
      { key: 'summary_year', icon: require('../assets/star.png'), title: "Tổng kết năm", description: "" },
      { key: 'not_yet_checkout', icon: require('../assets/warning.png'), title: "Danh sách chưa checkout", description: "" },
    ],
  },
  {
    sectionTitle: 'CÀI ĐẶT',
    data: [
      { key: 'language', icon: require('../assets/language.png'), title: "Ngôn ngữ", description: "" },
      { key: 'edit_information', icon: require('../assets/edit.png'), title: "Cập nhật thông tin", description: "" },
      { key: 'app_information', icon: require('../assets/warning.png'), title: "Thông tin ứng dụng", description: "" },
      { key: 'logout', icon: require('../assets/logout.png'), title: "Đăng xuất", description: "" },
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

export default function AddScreen({ navigation }) {
  return (
    <SafeAreaView>
      <SectionList
        style={styles.padding}
        sections={sectionLists}
        keyExtractor={(section, index) => section + index}
        renderSectionHeader={({ section: { sectionTitle } }) => (
          sectionTitle == '' ? null : 
          <Text style={styles.header}>{sectionTitle}</Text>
        )}
        renderItem={({ item, index }) => (
          item.key == 'card' ? <CardCustom/> :
          <RowFlatList workspace={item} />
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