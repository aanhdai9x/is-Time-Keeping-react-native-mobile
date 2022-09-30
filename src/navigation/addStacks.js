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

const AddStack = createStackNavigator();

export default function AddStacks() {
    return (
        <AddStack.Navigator
            initialRouteName="AddScreen"
            screenOptions={{
                headerShown: true,
            }}
        >
            <AddStack.Screen name=" " component={AddScreen} />
            <AddStack.Screen name="CheckinStatisticScreen" component={CheckinStatisticScreen} />
            <AddStack.Screen name="ProjectStatisticScreen" component={ProjectStatisticScreen} />
            <AddStack.Screen name="ApplicationThoughtScreen" component={ApplicationThoughtScreen} />
            <AddStack.Screen name="OTApplicationScreen" component={OTApplicationScreen} />
            <AddStack.Screen name="OfficeScreen" component={OfficeScreen} />
            <AddStack.Screen name="CheckinFormScreen" component={CheckinFormScreen} />
            <AddStack.Screen name="CheckinMachineScreen" component={CheckinMachineScreen} />
            <AddStack.Screen name="UserScreen" component={UserScreen} />
            <AddStack.Screen name="DateStartWorkScreen" component={DateStartWorkScreen} />
            <AddStack.Screen name="TotalDateScreen" component={TotalDateScreen} />
            <AddStack.Screen name="SummaryYearScreen" component={SummaryYearScreen} />
            <AddStack.Screen name="NotYetCheckoutScreen" component={NotYetCheckoutScreen} />
            <AddStack.Screen name="LanguageScreen" component={LanguageScreen} />
            <AddStack.Screen name="EditInformationScreen" component={EditInformationScreen} />
            <AddStack.Screen name="AppInformationScreen" component={AppInformationScreen} />
            <AddStack.Screen 
                name="LogoutScreen" 
                component={LogoutScreen}
                options={{
                    title: '',
                }}

            />
        </AddStack.Navigator>
    )
}