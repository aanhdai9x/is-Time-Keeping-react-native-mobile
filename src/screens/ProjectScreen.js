import React from 'react';
import CalendarCustom from '../components/CalendarCustom';
import { ScrollView } from 'react-native';

const ProjectScreen = () => {
  return (
    <ScrollView
      style={{
        marginBottom: 120,
      }}
    >
      <CalendarCustom
        title={'Lịch dự án'}
        subtitle={'Chọn ngày để đánh giá dự án'}
        warning={'Bạn không được đánh giá dự án vào ngày nghỉ không phép hoặc chưa đến ngày làm việc'}
      />
    </ScrollView>

  );
};

export default ProjectScreen;