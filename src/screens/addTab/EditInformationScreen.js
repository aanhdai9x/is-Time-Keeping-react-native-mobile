import React from 'react'
import { COLORS } from '../../Constant/Constant';
import { Image, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import user from '../../Model/user';
import SectionList from 'react-native/Libraries/Lists/SectionList'
import { TextInput } from 'react-native-paper';
import AvatarInfor from '../../components/AvatarInfor';

const sectionLists = [
  {
    sectionTitle: 'HỌ VÀ TÊN',
    data: [
      { label: 'Avatar' }
    ],
  },
  {
    sectionTitle: 'HỌ VÀ TÊN',
    data: [
      { label: "Họ và tên", value: user.name },
      { label: "Ngày sinh", value: user.birthday },
      { label: "Giới tính", value: user.gender },
    ],
  },
  {
    sectionTitle: 'THÔNG TIN LIÊN HỆ',
    data: [
      { label: "Số điện thoại", value: user.phoneNumber },
      { label: "Skype", value: user.skype },
      { label: "Facebook", value: user.facebook },
      { label: "Địa chỉ thường trú", value: user.permanent_address },
      { label: "Địa chỉ tạm trú", value: user.temporary_address },
    ],
  },
  {
    sectionTitle: 'TRÌNH ĐỘ HỌC VẤN',
    data: [
      { label: "Trường", value: user.school },
      { label: "Trình độ học vấn", value: user.literacy },
      { label: "Bằng cấp", value: user.degree },
    ],
  },
  {
    sectionTitle: 'THÔNG TIN CƠ BẢN',
    data: [
      { label: "Số CMND", value: user.idNumber },
      { label: "Ngày cấp CMND", value: user.dateForID },
      { label: "Nơi cấp CMND", value: user.placeForID },
    ],
  },
  {
    sectionTitle: 'HỌ VÀ TÊN',
    data: [
      { label: 'Cập nhật thông tin' }
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
export default function EditInformationScreen({ navigation }) {
  const [text, setText] = React.useState("");

  return (
    <View>
      <SectionList
        style={styles.padding}
        sections={sectionLists}
        keyExtractor={(section, index) => section + index}
        renderSectionHeader={({ section: { sectionTitle } }) => (
          sectionTitle == 'HỌ VÀ TÊN' ? null :
            <Text style={styles.header}>{sectionTitle}</Text>
        )}
        renderItem={({ item, index }) => (
          item.label == 'Avatar' ? <AvatarInfor /> :
            (
              item.label == 'Cập nhật thông tin' ?
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.dark_green,
                    marginVertical: 5,
                    paddingVertical: 20,
                    borderRadius: 5,
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                    }}
                  >CẬP NHẬT THÔNG TIN</Text>
                </TouchableOpacity> :
                <TextInput
                  style={{ marginVertical: 5 }}
                  mode='outlined'
                  activeOutlineColor={COLORS.dark_green}
                  label={item.label}
                  value={item.value}
                  onChangeText={text => setText(text)}
                />
            )
        )}
      />
    </View>
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