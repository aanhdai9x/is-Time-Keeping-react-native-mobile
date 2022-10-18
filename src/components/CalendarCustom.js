import React from 'react';
import { View, Text, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarCustom({ title, subtitle, warning }) {
  return (
    <View style={{ marginBottom: 20 }}>
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
        >{title}</Text>
        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
        }}
        >{subtitle}</Text>
      </View>
      { warning == null ? null :
        <View
          style={{
            backgroundColor: 'orange',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image style={{ width: 30, height: 30, margin: 10 }} source={(require('../assets/warning2.png'))} />
          <Text
            style={{
              color: 'white',
              paddingHorizontal: 10,
              flex: 1,
            }}
          >{warning}</Text>
        </View>
      }
      <Calendar
        theme={{
          calendarBackground: null,
        }}
      ></Calendar>
    </View>
  );
};