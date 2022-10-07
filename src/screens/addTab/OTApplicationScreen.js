import React from 'react'
import Empty from '../../components/Empty'

export default function ApplicationThoughtScreen({ navigation }) {
    return (
        <Empty
            title={'Danh sách đăng ký trống'}
            subTitle={'Chưa có đơn đăng ký nào'}
        />
    );
}
