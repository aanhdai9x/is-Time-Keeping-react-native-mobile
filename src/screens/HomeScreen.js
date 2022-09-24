import React from 'react'
import SectionList from 'react-native/Libraries/Lists/SectionList'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';
import Workspace from '../components/Worksapce'

const sectionLists = [
  {
    sectionTitle: 'Công việc',
    data: [
      { key: 'event', icon: require('../assets/event.png'), title: "Thêm sự kiện", description: "" },
      { key: 'meeting_schedule', icon: require('../assets/meeting_schedule.png'), title: "Đặt lịch họp", description: "" },
    ],
  },
  {
    sectionTitle: 'Workspace của bạn',
    data: [
      {key: 'user', icon: require('../assets/user.png'), title: "Cá nhân", description: "Thông tin cá nhân" },
      {key: 'employee', icon: require('../assets/employee.png'), title: "Nhân viên", description: "Danh sách nhân viên" },
      {key: 'work_calendar', icon: require('../assets/work_calendar.png'), title: "Lịch làm việc", description: "Danh sách ca làm việc" },
      {key: 'meeting_calendar', icon: require('../assets/meeting_calendar.png'), title: "Lịch họp", description: "Đặt lịch họp" },
      {key: 'application', icon: require('../assets/application.png'), title: "Đơn báo", description: "Viết đơn, lịch sử nghỉ" },
      {key: 'approve_application', icon: require('../assets/approve_application.png'), title: "Duyệt đơn", description: "Danh sách báo nghỉ" },
      {key: 'comment', icon: require('../assets/comment.png'), title: "Lời chào", description: "Đặt lời chào checkin" },
      {key: 'ot', icon: require('../assets/ot.png'), title: "Làm ngoài giờ", description: "Đăng ký, lịch sử" },
      {key: 'approve_ot', icon: require('../assets/approve_ot.png'), title: "Duyệt OT", description: "Đơn báo làm ngoài giờ" },
      {key: 'project2', icon: require('../assets/project2.png'), title: "Dự án", description: "Thống kê dự án" },
      {key: 'seniority', icon: require('../assets/seniority.png'), title: "Thâm niên", description: "x ngày làm việc" },
      {key: 'summary', icon: require('../assets/summary.png'), title: "Tổng kết", description: "Tổng kết năm" },
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

function _renderList({ section, index }) {
  if (index !== 0) return null;

  return (
    <FlatList
      style={{ marginHorizontal: '2%' }}
      numColumns={2}
      data={section.data}
      renderItem={({ item }) => (<Workspace workspace={item} />)}
    />

  )
}

export default function HomeScreen({ navigation }) {

  return (
    <SafeAreaView>
      <SectionList
        sections={sectionLists}
        keyExtractor={(section, index) => section + index}
        renderSectionHeader={({ section: { sectionTitle } }) => (
          <Text style={styles.header}>{sectionTitle}</Text>
        )}
        renderItem={_renderList}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
});