import React from 'react'
import { TouchableOpacity, Image, FlatList, View, Text } from 'react-native'
import { COLORS } from '../../Constant/Constant'
import RowCheckinStatistic from '../../components/RowCheckinStatistic'


const lists = [
  { key: 'on_time', icon: require('../../assets/clock_blue.png'), title: 'Đúng giờ', description: 'Có 0 người đi làm đúng giờ' },
  { key: 'late_time', icon: require('../../assets/seniority.png'), title: 'Muộn giờ', description: 'Có 0 người đi làm muộn' },
  { key: 'not_yet_chekin', icon: require('../../assets/hand.png'), title: 'Chưa checkin', description: 'Có 0 người chưa checkin' },
];

export default function CheckinStatisticScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            source={require('../../assets/clock.png')}
            style={{
              width: 30,
              height: 30,
              marginHorizontal: 20,
              tintColor: COLORS.light_grey,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <View
        style={{
          alignItems: 'center'
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.dark_green,
              fontSize: 18,
              fontWeight: '500',
              marginVertical: 20,
            }}
          >Thời gian: 30/09/2022 - 30/09/2022</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={lists}
        renderItem={({ item, index }) => (
          <RowCheckinStatistic workspace={item} />
        )}
      />
    </View>
  )
}
