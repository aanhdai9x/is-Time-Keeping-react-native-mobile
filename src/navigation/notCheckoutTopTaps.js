import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS } from '../Constant/Constant';
import AllScreen from '../screens/addTab/notCheckoutTab/AllScreen';
import NotReasonScreen from '../screens/addTab/notCheckoutTab/NotReasonScreen';
import OTAndOnShiftScreen from '../screens/addTab/notCheckoutTab/OTAndOnShiftScreen';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function notCheckoutTopTabs() {
    return (
        <Tab.Navigator
            initialRouteName="AllScreen"
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
                name="AllScreen"
                component={AllScreen}
                options={{
                    tabBarLabel: () => <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Text>TẤT CẢ </Text>
                        <Text
                            style={{ 
                                position: 'relative', 
                                bottom: 10,
                                color: COLORS.light_grey,
                                fontSize: 10,
                            }}
                        >
                            (0)
                        </Text>
                    </View>
                }}
            />
            <Tab.Screen
                name="OTAndOnShiftScreen"
                component={OTAndOnShiftScreen}
                options={{
                    tabBarLabel: () => <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Text>{'OT & TRONG CA'} </Text>
                        <Text
                            style={{ 
                                position: 'relative', 
                                bottom: 10,
                                color: COLORS.light_grey,
                                fontSize: 10,
                            }}
                        >
                            (0)
                        </Text>
                    </View>
                }}
            />
            <Tab.Screen
                name="NotReasonScreen"
                component={NotReasonScreen}
                options={{
                    tabBarLabel: () => <View
                        style={{
                            flexDirection: 'row',
                        }}
                    >
                        <Text>KHÔNG LÝ DO </Text>
                        <Text
                            style={{ 
                                position: 'relative', 
                                bottom: 10,
                                color: COLORS.light_grey,
                                fontSize: 10,
                            }}
                        >
                            (0)
                        </Text>
                    </View>
                }}
            />
        </Tab.Navigator>
    );
}