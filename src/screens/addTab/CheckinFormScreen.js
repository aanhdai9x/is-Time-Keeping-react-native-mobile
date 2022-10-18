import React, { useState } from 'react'
import RadioMultiChoiceCustom from '../../components/RadioMultiChoiceCustom'
import { TouchableOpacity, View, Text, StyleSheet, ScrollView } from 'react-native'
import { COLORS } from '../../Constant/Constant'

const initialCheckinLists = {
  qr_code: {
    choose: true,
    leftImage: require('../../assets/qr.png'),
    text: 'Checkin bằng QR Code',
    subText: 'Ghi nhận dữ liệu chấm công khi nhân viên dùng điện thoại quét mã QR Code tại công ty. Có thể thiết lập QR Code tĩnh hoặc động.',
    color: '#FF5723',
  },
  position_wf: {
    choose: false,
    leftImage: require('../../assets/wifi.png'),
    text: 'Checkin bằng Vị trí và WiFi',
    subText: 'Ghi nhận dữ liệu chấm công qua việc sử dụng quyền vị trí kết hợp với yêu cầu phải đăng nhập vào mạng wifi công ty để tăng cường tính chính xác.',
    color: '#8F12FE',
  },
  position: {
    choose: false,
    leftImage: require('../../assets/map.png'),
    text: 'Checkin bằng Vị trí',
    subText: 'Ghi nhận dữ liệu chấm công qua việc sử dụng quyền vị trí của thiết bị nhân viên. Độ sai lệch phụ thuộc vào thiết bị của nhân viên.',
    color: '#009EED',
  },
  wf_system: {
    choose: false,
    leftImage: require('../../assets/setting.png'),
    text: 'Checkin bằng hệ thống WiFi',
    subText: 'Ghi nhận dữ liệu chấm công dựa trên việc truy cập vào hệ thống wifi của công ty.',
    color: '#4FE3C1',
  },
};

export default function CheckinFormScreen({ navigation }) {
  const [checkinLists, setCheckinLists] = useState(initialCheckinLists);

  const [radioQRCodeValue, setRadioQRCodeValue] = useState(false);
  const [radioPositionWfValue, setRadioPositionWfValue] = useState(false);
  const [radioPositionValue, setRadioPositionValue] = useState(false);
  const [radioWfSystemValue, setRadioWfSystemValue] = useState(false);

  return (
    <ScrollView>
      <View
        style={{
          paddingBottom: 70,
          paddingTop: 10,
          paddingHorizontal: 10,
        }}
      >
      <RadioMultiChoiceCustom
        changeValue={() => setRadioQRCodeValue(!radioQRCodeValue)}
        leftImage={checkinLists.qr_code.leftImage}
        radioValue={radioQRCodeValue}
        text={checkinLists.qr_code.text}
        subText={checkinLists.qr_code.subText}
        color={checkinLists.qr_code.color}
      />
      <RadioMultiChoiceCustom
        changeValue={() => setRadioPositionWfValue(!radioPositionWfValue)}
        leftImage={checkinLists.position_wf.leftImage}
        radioValue={radioPositionWfValue}
        text={checkinLists.position_wf.text}
        subText={checkinLists.position_wf.subText}
        color={checkinLists.position_wf.color}
      />
      <RadioMultiChoiceCustom
        changeValue={() => setRadioPositionValue(!radioPositionValue)}
        leftImage={checkinLists.position.leftImage}
        radioValue={radioPositionValue}
        text={checkinLists.position.text}
        subText={checkinLists.position.subText}
        color={checkinLists.position.color}
      />
      <RadioMultiChoiceCustom
        changeValue={() => setRadioWfSystemValue(!radioWfSystemValue)}
        leftImage={checkinLists.wf_system.leftImage}
        radioValue={radioWfSystemValue}
        text={checkinLists.wf_system.text}
        subText={checkinLists.wf_system.subText}
        color={checkinLists.wf_system.color}
      />
      <View
        style={{paddingVertical: 50}}
      >
        <TouchableOpacity
          style={styles.shadow}
          onPress={() => {
            checkinLists.qr_code.choose = radioQRCodeValue;
            setCheckinLists(checkinLists);
          }}
        >
          <Text
            style={{
              borderRadius: 10,
              ...styles.textButton,
              backgroundColor: COLORS.dark_green,
              color: 'white',
              fontWeight: '500',
              fontSize: 18,
            }}
          >XÁC NHẬN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.shadow}
          onPress={() => {
            navigation.pop();
          }}
        >
          <Text
            style={{
              ...styles.textButton,
              color: COLORS.light_grey,
              fontWeight: '500',
              fontSize: 15,
            }}
          >HỦY BỎ</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
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
    marginVertical: 5,
  },
  textButton: {
    textAlign: 'center',
    paddingVertical: 20,
  }
})