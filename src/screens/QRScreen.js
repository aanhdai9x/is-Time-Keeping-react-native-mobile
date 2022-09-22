import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'

export default function QRScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start QRScreen</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => {
          localStorage.setItem("token", "");
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
          
        }}
      >
        Logout
      </Button>
    </Background>
  )
}
