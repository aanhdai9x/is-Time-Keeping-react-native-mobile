import React from 'react';
import { View, Text, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import CalendarCustom from '../components/CalendarCustom';

const ProjectScreen = () => {
  return (
    <CalendarCustom
      title={'Lịch dự án'}
      subtitle={'Chọn ngày để đánh giá dự án'}
      warning={'Bạn không được đánh giá dự án vào ngày nghỉ không phép hoặc chưa đến ngày làm việc'}
    />
  );
};

export default ProjectScreen;