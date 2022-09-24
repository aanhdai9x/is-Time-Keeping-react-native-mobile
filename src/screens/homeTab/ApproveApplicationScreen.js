import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Paragraph from '../../components/Paragraph'

export default function ApproveApplicationScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Let’s start Approve Application Screen</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph>
    </Background>
  )
}
