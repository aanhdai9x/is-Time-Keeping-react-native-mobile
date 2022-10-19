import React from 'react'
import CardInformation from '../../components/CardInformation'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { deviceHeight } from '../../Constant/Constant'
import { COLORS } from '../../Constant/Constant'

export default function AppInformationScreen({ navigation }) {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        marginHorizontal: 20,
      }}
    >
      <View style={{
        ...styles.card,
        paddingVertical: 40,
        flex: 0.7,
        marginBottom: 10,
      }}
      >
        <CardInformation></CardInformation>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('NoteScreen');
        }}
        style={{
          ...styles.card,
          flex: 0.1,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
      >
        <Image style={{ width: 30, height: 30}} source={require('../../assets/note.png')} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontWeight: 'bold', paddingLeft: 20, fontSize: 18 }}>Chú thích</Text>
        </View>
        <Image style={{ width: 30, height: 30, tintColor: COLORS.light_grey }} source={require('../../assets/next.png')} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: '100%',
    borderWidth: 0.75,
    borderColor: COLORS.light_grey,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
    justifyContent: 'space-around',
    alignItems: "center",
  },
});