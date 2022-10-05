import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-paper';
import { COLORS } from '../Constant/Constant';

export default function Search({ title }) {
  const [value, setValue] = React.useState('');
  return (
    <View
      style={{
        margin: 5,
        borderRadius: 10,
      }}
    >
      <TextInput
        label={title}
        value={value}
        mode='outlined'
        left={
          <TextInput.Icon
            icon={require('../assets/search.png')}
          />
        }
        onChangeText={value => setValue(value)}
        activeOutlineColor={COLORS.dark_green}
      />
    </View>
  )
}
