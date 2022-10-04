import React from 'react'
import { COLORS } from '../../Constant/Constant';
import { Image, View, TouchableOpacity, Text } from 'react-native'
import UserAvatar from 'react-native-user-avatar';
import user from '../../Model/user';

export default function EditInformationScreen({ navigation }) {
  return (
    <View
      style={{
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{ 
          width: 150,
          marginVertical: 20,
        }}
      >
        <UserAvatar
          size={150}
          src='https://thumbs.dreamstime.com/b/user-icon-flat-style-isolated-grey-background-user-icon-flat-style-isolated-grey-background-your-design-logo-131213475.jpg'
          bgColor='null'
        />


        <TouchableOpacity
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.light_grey,
              padding: 10,
              borderRadius: 100,
            }}
          >
            <Image
              source={require('../../assets/camera.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </View>

        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold'
          }}
        >
          {user.name}
        </Text>
        <Text
          style={{
            color: COLORS.light_grey,
          }}
        >
          {user.email}
        </Text>
      </View>
      


    </View>
  )
}
