import React from 'react'
import { View, ScrollView } from 'react-native'
import CheckinStatistic from '../../../components/CheckinStatistic'
import CalendarCustom from '../../../components/CalendarCustom'

export default function CheckinScreen({ navigation }) {
    return (
        <ScrollView
            style={{
                padding: 20,
                marginBottom: 120,
            }}
        >
            <CheckinStatistic />
            <CalendarCustom 
            title={'Lịch checkin'}
            subtitle={'Chọn ngày để xem checkin'}
            />
        </ScrollView>

    )
}
