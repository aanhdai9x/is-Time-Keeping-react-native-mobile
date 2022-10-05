import React from 'react'
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native'
import Search from '../../components/Search';
import { FlatList } from 'react-native';
import { COLORS } from '../../Constant/Constant';

const listCompany = [
  { title: 'CMC-HN', address: '11 Duy Tân' },
  { title: 'CMC', address: '' },
  { title: 'CMC-SG', address: 'Sài Gòn' },
];


export default function OfficeScreen({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            source={require('../../assets/office_add.png')}
            style={{
              width: 30,
              height: 30,
              marginHorizontal: 20,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Search title={'Nhập tên văn phòng'} />
      <FlatList
        data={listCompany}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              ...styles.shadow,
              marginHorizontal: 20,
              marginVertical: 10,
              ...styles.left_green,
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
              }}
            >{item.title}</Text>
            {item.address == '' ? null :
                <Text>{item.address}</Text>
            }
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  shadow: {
    backgroundColor: "#fff",
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
  },
  left_green: {
    borderRadius: 10,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.dark_green,
  }
});