import React from 'react';
import { View, Text, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

const ProjectScreen = () => {
  return (
    <View style={{ paddingTop: 50, flex: 1 }}>
      <View
        style={{
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
          }}
        >Lịch dự án</Text>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
        >Chọn ngày để đánh giá dự án</Text>
      </View>
      <View
        style={{
          backgroundColor: 'orange',
          flexDirection: 'row',
        }}
      >
        <Image style={{width: 30, height: 30, margin: 10}} source={(require('../assets/warning2.png'))}/>
        <Text
          style={{
            color: 'white',
            paddingHorizontal: 10,
            flex: 1,
          }}
        >Bạn không được đánh giá dự án vào ngày nghỉ không phép hoặc chưa đến ngày làm việc</Text>
      </View>
      <Calendar
        theme={{
          calendarBackground: null,
        }}
      ></Calendar>
    </View>
  );
};

export default ProjectScreen;