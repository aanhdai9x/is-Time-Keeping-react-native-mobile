import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../../../Constant/Constant';

export default function ProjectChartScreen({ navigation }) {
  return (
    <View
      style={{paddingHorizontal: 10}}
    >
      <View style={{...styles.row, alignItems: 'flex-end'}}>
        <TouchableOpacity style={{ height: 130, flex: 2, ...styles.centerAlign, ...styles.shadow, justifyContent: 'space-between', backgroundColor: COLORS.dark_green}}>
          <Text
            style={{fontSize: 40, color: 'white', ...styles.fontWeight}}
          >0</Text>
          <Text
            style={{...styles.fontWeight, fontSize: 20, color: 'white'}}
          >Tổng số dự án</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, ...styles.centerAlign, ...styles.shadow, justifyContent: 'space-between' }}>
          <Text
            style={{...styles.fontWeight, color: COLORS.dark_green, fontSize: 20}}
          >0</Text>
          <Text
            style={styles.fontWeight}
          >Đang thực hiện</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={{ flex: 1, ...styles.centerAlign, ...styles.shadow, justifyContent: 'space-between' }}>
          <Text
            style={{...styles.fontWeight, color: 'orange', fontSize: 20}}
          >0</Text>
          <Text
            style={styles.fontWeight}
          >Đang chờ duyệt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, ...styles.centerAlign, ...styles.shadow, justifyContent: 'space-between' }}>
          <Text
            style={{...styles.fontWeight, color: COLORS.light_grey, fontSize: 20}}
          >0</Text>
          <Text
            style={styles.fontWeight}
          >Đã kết thúc</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ flex: 1, ...styles.centerAlign, ...styles.shadow, justifyContent: 'space-between' }}>
          <Text
            style={{...styles.fontWeight, color: 'red', fontSize: 20}}
          >0</Text>
          <Text
            style={styles.fontWeight}
          >Đã kết thúc</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{...styles.shadow, ...styles.row, ...styles.left_red}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text
            style={styles.fontWeight}
          >CMC</Text>
        </View>
        <View style={styles.rightAlign}>
          <Text
            style={{...styles.fontWeight, color: COLORS.dark_green, fontSize: 20}}
          >0</Text>
          <Text
            style={{...styles.fontWeight, color: COLORS.light_grey}}
          >Dự án</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  centerAlign: {
    alignItems: 'center',
  },
  rightAlign: {
    alignItems: 'flex-end',
  },
  leftAlign: {
    alignItems: 'flex-start',
  },
  shadow: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    margin: 5,
    paddingHorizontal: 15,
    paddingVertical: 20
  },
  left_red: {
    borderLeftWidth: 5,
    borderLeftColor: 'red',
  },
  fontWeight: {
    fontWeight: '500',
  }
});