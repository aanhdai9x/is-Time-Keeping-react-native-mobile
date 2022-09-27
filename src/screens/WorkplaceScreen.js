import React from 'react'
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';
import RowWorkplace from '../components/RowWorkplace';

const lists = [
  { key: 'colleague_birthday', icon: require('../assets/birthday_cake.png'), title: "Sinh nhật đồng nghiệp", description: "" },
  { key: 'honor', icon: require('../assets/raise_hand.png'), title: "VINH DANH 5 NGƯỜI ĐẾN SỚM NHẤT CÔNG TY", description: "" },
];

export default function WorkplaceScreen({ navigation }) {
  return (
    <SafeAreaView>
      <FlatList
        data={lists}
        renderItem={({ item }) => (<RowWorkplace workspace={item} />)}
      />
    </SafeAreaView>
  )
}
