import { createStackNavigator } from '@react-navigation/stack';
import AddScreen from '../screens/AddScreen';
import CheckinStatisticScreen from '../screens/addTab/CheckinStatisticScreen'
import ProjectStatisticScreen from '../screens/addTab/ProjectStatisticScreen'
import ApplicationThoughtScreen from '../screens/addTab/ApplicationThoughtScreen'
import OTApplicationScreen from '../screens/addTab/OTApplicationScreen'
import OfficeScreen from '../screens/addTab/OfficeScreen'
import CheckinFormScreen from '../screens/addTab/CheckinFormScreen'
import CheckinMachineScreen from '../screens/addTab/CheckinMachineScreen'
import UserScreen from '../screens/addTab/UserScreen'
import DateStartWorkScreen from '../screens/addTab/DateStartWorkScreen'
import TotalDateScreen from '../screens/addTab/TotalDateScreen'
import SummaryYearScreen from '../screens/addTab/SummaryYearScreen'
import NotYetCheckoutScreen from '../screens/addTab/NotYetCheckoutScreen'
import LanguageScreen from '../screens/addTab/LanguageScreen'
import EditInformationScreen from '../screens/addTab/EditInformationScreen'
import AppInformationScreen from '../screens/addTab/AppInformationScreen'
import LogoutScreen from '../screens/addTab/LogoutScreen'
import NoteScreen from '../screens/addTab/NoteScreen'
import userTopTabs from './userTopTaps';
import OnTimeScreen from '../screens/addTab/checkinStatisticTab/OnTimeScreen';
import LateTimeScreen from '../screens/addTab/checkinStatisticTab/LateTimeScreen';
import NotYetCheckinScreen from '../screens/addTab/checkinStatisticTab/NotYetCheckinScreen'
import HeaderCustom from '../components/HeaderCustom';
import notCheckoutTopTabs from './notCheckoutTopTaps';

const AddStack = createStackNavigator();

export default function AddStacks() {
    return (
        <AddStack.Navigator
            initialRouteName="AddScreen"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'null',
                }
            }}
        >
            <AddStack.Screen name="AddScreen" component={AddScreen}
                options={{
                    headerTitle: () => <HeaderCustom />
                }}
            />
            <AddStack.Screen name="CheckinStatisticScreen" component={CheckinStatisticScreen}
                options={{
                    title: 'Thống kê checkin'
                }}
            />
            <AddStack.Screen name="ProjectStatisticScreen" component={ProjectStatisticScreen} />
            <AddStack.Screen name="ApplicationThoughtScreen" component={ApplicationThoughtScreen} />
            <AddStack.Screen name="OTApplicationScreen" component={OTApplicationScreen} />
            <AddStack.Screen name="OfficeScreen" component={OfficeScreen}
                options={({ navigation, route }) => ({
                    headerTitle: 'Quản lý văn phòng làm việc',
                })}
            />
            <AddStack.Screen name="CheckinFormScreen" component={CheckinFormScreen} />
            <AddStack.Screen name="CheckinMachineScreen" component={CheckinMachineScreen} />
            <AddStack.Screen name="UserScreen" component={userTopTabs} />
            <AddStack.Screen name="DateStartWorkScreen" component={DateStartWorkScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AddStack.Screen name="TotalDateScreen" component={TotalDateScreen}
                options={{
                    headerShown: false,
                }}
            />
            <AddStack.Screen name="SummaryYearScreen" component={SummaryYearScreen} />
            <AddStack.Screen name="NotYetCheckoutScreen" component={notCheckoutTopTabs}
                options={{
                    title: 'Chưa checkout'
                }}
            />
            <AddStack.Screen name="LanguageScreen" component={LanguageScreen}
                options={{
                    title: 'Ngôn ngữ hiển thị'
                }}
            />
            <AddStack.Screen name="EditInformationScreen" component={EditInformationScreen}
                options={{
                    title: 'Cập nhật thông tin',
                }}
            />
            <AddStack.Screen name="AppInformationScreen" component={AppInformationScreen}
                options={{
                    title: 'Thông tin ứng dụng'
                }}
            />
            <AddStack.Screen name="NoteScreen" component={NoteScreen} />
            <AddStack.Screen
                name="LogoutScreen"
                component={LogoutScreen}
                options={{
                    title: '',
                }}
            />

            {/* Checkin Statistic Stacks */}
            <AddStack.Screen name="OnTimeScreen" component={OnTimeScreen}
                options={{
                    title: 'Đúng giờ',
                }}
            />
            <AddStack.Screen name="LateTimeScreen" component={LateTimeScreen}
                options={{
                    title: 'Muộn giờ',
                }}
            />
            <AddStack.Screen name="NotYetCheckinScreen" component={NotYetCheckinScreen}
                options={{
                    title: 'Chưa checkin',
                }}
            />
        </AddStack.Navigator>
    )
}