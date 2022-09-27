// import React from 'react'
// import Background from '../components/Background'
// import Logo from '../components/Logo'
// import Header from '../components/Header'
// import Paragraph from '../components/Paragraph'
// import Button from '../components/Button'

// export default function ProjectScreen({ navigation }) {
//   return (
//     <Background>
//       <Logo />
//       <Header>Let’s start ProjectScreen</Header>
//       <Paragraph>
//         Your amazing app starts here. Open you favorite code editor and start
//         editing this project.
//       </Paragraph>
//       <Button
//         mode="outlined"
//         onPress={() => {
//           localStorage.setItem("token", "");
//           navigation.reset({
//             index: 0,
//             routes: [{ name: 'StartScreen' }],
//           })
          
//         }}
//       >
//         Logout
//       </Button>
//     </Background>
//   )
// }


import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const ProjectScreen = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={'2017-05-17'}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProjectScreen;