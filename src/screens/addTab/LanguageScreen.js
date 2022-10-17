
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RadioCustom from '../../components/RadioCustom'

export default function LanguageScreen({ navigation }) {

  const [radioValue, setRadioValue] = useState('vn');

  return (
    <View style={{ flex: 1, paddingHorizontal: 20 }}>
      <RadioCustom
        value='vn'
        changeValue={() => setRadioValue('vn')}
        leftImage={require('../../assets/vn_flag.png')}
        radioValue={ radioValue }
        text="Tiếng Việt"
      />
      <RadioCustom
        value='en'
        changeValue={() => setRadioValue('en')}
        leftImage={require('../../assets/en_flag.png')}
        radioValue={ radioValue }
        text="Tiếng Anh"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 20,
    paddingVertical: 60,
  },
  shadow: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
  }
});