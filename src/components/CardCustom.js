import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../Constant/Constant'
import { deviceHeight } from '../Constant/Constant'
import { AutoSizeText, ResizeTextMode } from 'react-native-auto-size-text';

export default function CardCustom() {
  return <View style={styles.card}>
    <TouchableOpacity style={styles.avatar}>
      <Text style={{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'null',
      }}>A</Text>
    </TouchableOpacity>
    <Text style={{
      color: COLORS.dark_green,
      fontWeight: 'bold',
    }}>WORKSPACE</Text>
    <Text>CMC</Text>
    <Text>nvduong1@cmc.com.vn</Text>

    <View style={{
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      justifyContent: 'space-between',
    }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
        <Text
          style={{
            color: COLORS.dark_green,
          }}>x</Text>
        <AutoSizeText
          fontSize={12}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}>
          Nhân viên
        </AutoSizeText>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
        <Text style={{
          color: COLORS.dark_green,
        }}>x</Text>
        <AutoSizeText
          fontSize={12}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}>
          Đã checkin
        </AutoSizeText>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
        <Text style={{
          color: COLORS.dark_green,
        }}>x</Text>
        <AutoSizeText
          fontSize={12}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}>
          Đi muộn
        </AutoSizeText>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
        <Text style={{
          color: COLORS.dark_green,
        }}>x</Text>
        <AutoSizeText
          fontSize={12}
          numberOfLines={1}
          mode={ResizeTextMode.max_lines}>
          Chưa checkin
        </AutoSizeText>
      </View>
    </View>
    <TouchableOpacity style={{
      backgroundColor: COLORS.dark_green,
      paddingVertical: 10,
      paddingHorizontal: 30,
      width: '100%',
      borderRadius: 10,
    }}>
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
      }}
      >Mời nhân viên tham gia Workspace</Text>
    </TouchableOpacity>
    <Text style={{
      textAlign: 'center',
      color: COLORS.light_grey
    }}>Tham gia quản lý nhân viên và tài nguyên của công ty tại <Text style={{ color: COLORS.dark_green }}>cmc.com.vn</Text></Text>
  </View>
}

const styles = StyleSheet.create({
  card: {
    height: deviceHeight * 0.5,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 0.75,
    borderColor: COLORS.light_grey,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    justifyContent: 'space-around',
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    borderWidth: 3,
    borderColor: COLORS.dark_green,
    backgroundColor: COLORS.dark_green,
    alignItems: 'center',
    justifyContent: 'center',
  }
});