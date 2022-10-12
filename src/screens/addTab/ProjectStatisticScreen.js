import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { FlatList } from 'react-native'
import { COLORS } from '../../Constant/Constant'
import RowCheckinStatistic from '../../components/RowCheckinStatistic'

const lists = [
  { key: 'project_chart', icon: require('../../assets/chart.png'), title: 'Biểu đồ dự án', description: '' },
  { key: 'project_list', icon: require('../../assets/list.png'), title: 'Danh sách dự án', description: '' },
];

export default function ProjectStatisticScreen({ navigation }) {
  return (
    <View>
      <FlatList
        data={lists}
        renderItem={({ item, index }) => (
          <RowCheckinStatistic workspace={item} />
        )}
      />
    </View>
  )
}
