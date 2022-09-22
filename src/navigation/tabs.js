import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import AddScreen from "../screens/AddScreen";
import ProjectScreen from "../screens/ProjectScreen";
import QRScreen from "../screens/QRScreen";
import WorkplaceScreen from "../screens/WorkplaceScreen";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../Constant/Constant";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...style.shadow,
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: COLORS.dark_green,
        }}>
            {children}
        </View>
    </TouchableOpacity>
);

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { 
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 70,
                    ...style.shadow,
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/home.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.dark_green : COLORS.light_grey, 
                            }}
                        />
                        <Text style={{color: focused ? COLORS.dark_green : COLORS.light_grey, fontSize: 12}}>Trang chủ</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Project" component={ProjectScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/project.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.dark_green : COLORS.light_grey, 
                            }}
                        />
                        <Text style={{color: focused ? COLORS.dark_green : COLORS.light_grey, fontSize: 12}}>Dự án</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="QR" component={QRScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <View>
                        <Image
                            source={require('../assets/qr.png')}
                            resizeMode='contain'
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: '#fff', 
                            }}
                        />
                    </View>
                ),
                tabBarButton: (props) => (
                    <CustomTabBarButton {...props}/>
                ) 
            }}/>
            <Tab.Screen name="Workplace" component={WorkplaceScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/workspace.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.dark_green : COLORS.light_grey, 
                            }}
                        />
                        <Text style={{color: focused ? COLORS.dark_green : COLORS.light_grey, fontSize: 12}}>Workplace</Text>
                    </View>
                ),
            }}/>
            <Tab.Screen name="Add" component={AddScreen} options={{
                tabBarIcon: ({focused}) =>(
                    <View>
                        <Image
                            source={require('../assets/add.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.dark_green : COLORS.light_grey, 
                            }}
                        />
                        <Text style={{color: focused ? COLORS.dark_green : COLORS.light_grey, fontSize: 12}}>Thêm</Text>
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    )
}

const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});

export default Tabs;