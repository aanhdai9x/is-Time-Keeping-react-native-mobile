import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { COLORS } from '../../Constant/Constant'
import UserAvatar from 'react-native-user-avatar';
import user from '../../Model/user';

export default function TotalDateScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/light.png')} resizeMode="cover" style={styles.image}>
        <View style={{
          alignItems: 'center',
          borderColor: COLORS.dark_green,
          borderWidth: 2,
          marginHorizontal: 30,
          borderRadius: 20,
          backgroundColor: "#000000c0",
          height: '60%'
        }}
        >
          <View
            style={{
              position: 'relative',
              bottom: 50,
              backgroundColor: COLORS.dark_green,
              borderRadius: 100,
              padding: 3,
            }}
          >
            <UserAvatar
              size={100}
              src='https://thumbs.dreamstime.com/b/user-icon-flat-style-isolated-grey-background-user-icon-flat-style-isolated-grey-background-your-design-logo-131213475.jpg'
              bgColor='null'
            />
          </View>
          <View
            style={{
              position: 'relative',
              bottom: 50,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                textTransform: 'uppercase',
                color: 'yellow',
                fontSize: 30,
                paddingVertical: 20,
              }}
            >{user.name}</Text>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}
            >Cảm ơn bạn đã đồng hành cùng CMC</Text>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 60,
                  color: 'yellow',
                }}
              >14</Text> ngày
            </Text>

          </View>

          <View
            style={{ flex: 1 }}
          >
            <Image
              source={require('../../assets/aborigine.png')}
            />
          </View>
          <View
            style={{
              position: 'relative',
              bottom: 20,
              alignItems: 'center',
              marginTop: 50,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.pop();
                }}
                style={{
                  ...styles.button,
                  backgroundColor: COLORS.dark_green,
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Đóng
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.button,
                  backgroundColor: '#336633',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  Chia sẻ
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  button: {
    borderRadius: 20,
    borderWidth: 0.75,
    borderColor: 'white',
    width: 125,
    paddingVertical: 10,
    marginHorizontal: 5,
  }
});