import React from 'react'
import Empty from '../../components/Empty'

export default function ApplicationThoughtScreen({ navigation }) {
    return (
        <Empty
            title={'Danh sách báo nghỉ trống'}
            subTitle={'Chưa có đơn báo nghỉ nào'}
        />
    );
}
