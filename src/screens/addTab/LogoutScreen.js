import React from 'react'
import Background from '../../components/Background'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ConfirmProvider, useConfirm } from 'react-native-confirm-dialog'

const ConfirmableButton = () => {
  const navigation = useNavigation();
  const confirm = useConfirm()
  const handlePress = () => {
    confirm({
      // ...config options
      title: 'Are you sure?',
      onConfirm: () => {
        localStorage.setItem("token", "");
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      },
    });
  }

  return (
    <Background>
      <TouchableOpacity
        onPress={handlePress}
      >
        <Image
          style={{ width: 110, height: 110 }}
          source={require('../../assets/logout2.png')}
        />
      </TouchableOpacity>
      <Header>Đăng xuất</Header>
      <Paragraph>
        Bạn có thực sự muốn đăng xuất, hãy nhấn vào biểu tượng đăng xuất.
      </Paragraph>
    </Background>
  )
}

export default function LogoutScreen({ navigation }) {
  return (
    <ConfirmProvider>
      <ConfirmableButton />
      {/* <TouchableOpacity onPress={() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }}
      >
        <Text>title</Text>
      </TouchableOpacity> */}
    </ConfirmProvider>
  )
}
