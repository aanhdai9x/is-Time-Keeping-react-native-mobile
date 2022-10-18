import React from 'react'
import { ScrollView, View, StyleSheet, ImageBackground } from 'react-native';
import Blink from '../../components/Blink'
import QR from '../../components/QR';

export default function CheckinMachineScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/background_qr.png')} resizeMode="cover" style={styles.container}>
          <View
            style={{ alignItems: 'center' }}
          >
            <View
              style={{ marginVertical: 40 }}
            >
              <Blink text={'ĐANG CHỜ KÍCH HOẠT ...'}></Blink>
            </View>
            <QR></QR>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
});