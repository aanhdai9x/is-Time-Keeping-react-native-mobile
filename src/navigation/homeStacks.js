import EventScreen from "../screens/homeTab/EventScreen"
import MeetingScheduleScreen from "../screens/homeTab/MeetingScheduleScreen"
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/homeTab/UserScreen"
import EmployeeScreen from "../screens/homeTab/EmployeeScreen"
import WorkCalendarScreen from "../screens/homeTab/WorkCalendarScreen"
import MeetingCalendarScreen from "../screens/homeTab/MeetingCalendarScreen"
import ApplicationScreen from "../screens/homeTab/ApplicationScreen"
import ApproveApplicationScreen from "../screens/homeTab/ApproveApplicationScreen"
import CommentScreen from "../screens/homeTab/CommentScreen"
import OTScreen from "../screens/homeTab/OTScreen"
import ApproveOTScreen from "../screens/homeTab/ApproveOTScreen"
import Project2Screen from "../screens/homeTab/Project2Screen"
import SeniorityScreen from "../screens/homeTab/SeniorityScreen"
import SummaryScreen from "../screens/homeTab/SummaryScreen"
import { createStackNavigator } from '@react-navigation/stack';


const HomeStack = createStackNavigator();

export default function HomeStacks() {
    return (
        <HomeStack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: true,
            }}
        >
            <HomeStack.Screen name=" " component={HomeScreen} />
            <HomeStack.Screen name="EventScreen" component={EventScreen} />
            <HomeStack.Screen name="MeetingScheduleScreen" component={MeetingScheduleScreen} />
            <HomeStack.Screen name="UserScreen" component={UserScreen} />
            <HomeStack.Screen name="EmployeeScreen" component={EmployeeScreen} />
            <HomeStack.Screen name="WorkCalendarScreen" component={WorkCalendarScreen} />
            <HomeStack.Screen name="MeetingCalendarScreen" component={MeetingCalendarScreen} />
            <HomeStack.Screen name="ApplicationScreen" component={ApplicationScreen} />
            <HomeStack.Screen name="ApproveApplicationScreen" component={ApproveApplicationScreen} />
            <HomeStack.Screen name="CommentScreen" component={CommentScreen} />
            <HomeStack.Screen name="OTScreen" component={OTScreen} />
            <HomeStack.Screen name="ApproveOTScreen" component={ApproveOTScreen} />
            <HomeStack.Screen name="Project2Screen" component={Project2Screen} />
            <HomeStack.Screen name="SeniorityScreen" component={SeniorityScreen} />
            <HomeStack.Screen name="SummaryScreen" component={SummaryScreen} />
        </HomeStack.Navigator>
    )
}