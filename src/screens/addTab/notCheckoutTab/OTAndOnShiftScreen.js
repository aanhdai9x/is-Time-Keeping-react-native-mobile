import React from 'react'
import { View, Text } from 'react-native'
import Empty from '../../../components/Empty'

export default function OTAndOnShiftScreen({ navigation }) {
    return (
        <Empty
            title={'Danh sách trống'}
            subTitle={'Không có nhân viên'}
        />
    );
}
