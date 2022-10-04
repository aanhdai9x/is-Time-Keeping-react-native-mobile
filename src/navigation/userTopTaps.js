import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserScreen from '../screens/addTab/UserScreen';
import ProjectScreen from '../screens/ProjectScreen';
import CheckinMachineScreen from '../screens/addTab/CheckinMachineScreen';
import CheckinScreen from '../screens/addTab/userTab/CheckinScreen';
import InformationScreen from '../screens/addTab/userTab/InformationScreen';
import { COLORS } from '../Constant/Constant';

const Tab = createMaterialTopTabNavigator();

export default function userTopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="CheckinScreen"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: { backgroundColor: 'white' },
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.dark_green,
        }
      }}
    >
      <Tab.Screen
        name="CheckinScreen"
        component={CheckinScreen}
        options={{ tabBarLabel: 'CHECKIN' }}
      />
      <Tab.Screen
        name="ProjectScreen"
        component={ProjectScreen}
        options={{ tabBarLabel: 'DỰ ÁN' }}
      />
      <Tab.Screen
        name="InformationScreen"
        component={InformationScreen}
        options={{ tabBarLabel: 'THÔNG TIN' }}
      />
    </Tab.Navigator>
  );
}