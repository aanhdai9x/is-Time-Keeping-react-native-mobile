import React from 'react'
import { Text, View } from 'react-native';
import Search from '../../../components/Search';
import Empty from '../../../components/Empty';

export default function ProjectListScreen({ navigation }) {
  return (
    <View>
      <Search title={'Nhập tên dự án'} />
      <View
        style={{
          alignItems: 'center',
          height: '90%',
        }}
      >
        <Empty 
          title={'Danh sách dự án trống'}
          subTitle={'Chưa có dự án nào'}
        />
      </View>

    </View>
  )
}
