import React from 'react';
import TimedSlideshow from 'react-native-timed-slideshow';
import user from '../../Model/user';
import { Text, View } from 'react-native';
import { ImageWrapper } from 'react-native-timed-slideshow';

const items = [
  {
    uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
    title: user.name,
    text: "Xin chào, Cảm ơn bạn đã đồng hành cùng chúng tôi",
  },
  {
    uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
    title: user.startWork,
    text: "Hãy bắt đầu ngày hôm nay bằng niềm vui, hạnh phúc.",
    duration: 3000,
  },
  {
    uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
    title: user.birthday,
    text: "Có thể không đặc biệt hay tài năng xuất chúng, nhưng bạn là duy nhất.",
    fullWidth: true,
  },
];

export default function SummaryYearScreen({ navigation }) {

  return (
    <TimedSlideshow
      items={items}
      footerStyle={{ marginBottom: 70 }}
      onClose={() => {
        navigation.pop();
      }}
    />
  );

}
