import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../Constant/Constant'

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

    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
        <Text
          style={{
            color: COLORS.dark_green,
          }}>x</Text>
        <Text>Nhân viên</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.8 }} >
        <Text style={{
          color: COLORS.dark_green,
        }}>x</Text>
        <Text>Đã checkin</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.8 }} >
        <Text style={{
          color: COLORS.dark_green,
        }}>x</Text>
        <Text>Đi muộn</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }} >
        <Text style={{
          color: COLORS.dark_green,
        }}>x</Text>
        <Text>Chưa checkin</Text>
      </View>
    </View>
    <TouchableOpacity style={{
      backgroundColor: COLORS.dark_green,
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 10,
    }}>
      <Text style={{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
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
    height: 400,
    marginBottom: 30,
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