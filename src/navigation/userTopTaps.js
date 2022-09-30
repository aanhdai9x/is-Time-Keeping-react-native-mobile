import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import UserScreen from '../screens/addTab/UserScreen';
import ProjectScreen from '../screens/ProjectScreen';
import CheckinMachineScreen from '../screens/addTab/CheckinMachineScreen';
import { COLORS } from '../Constant/Constant';

const Tab = createMaterialTopTabNavigator();

export default function userTopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="UserScreen"
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
        name="UserScreen"
        component={UserScreen}
        options={{ tabBarLabel: 'CHECKIN' }}
      />
      <Tab.Screen
        name="ProjectScreen"
        component={ProjectScreen}
        options={{ tabBarLabel: 'DỰ ÁN' }}
      />
      <Tab.Screen
        name="CheckinMachineScreen"
        component={CheckinMachineScreen}
        options={{ tabBarLabel: 'THÔNG TIN' }}
      />
    </Tab.Navigator>
  );
}