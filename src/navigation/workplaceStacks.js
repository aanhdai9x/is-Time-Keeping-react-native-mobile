import { createStackNavigator } from '@react-navigation/stack';
import WorkplaceScreen from '../screens/WorkplaceScreen';
import ColleagueBirthdayScreen from '../screens/workplaceTab/ColleagueBirthdayScreen';
import HonorScreen from '../screens/workplaceTab/HonorScreen';

const WorkplaceStack = createStackNavigator();

export default function WorkplaceStacks() {
    return (
        <WorkplaceStack.Navigator
            initialRouteName="WorkplaceScreen"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'null',
                }
            }}
        >
            <WorkplaceStack.Screen name="WorkplaceScreen" component={WorkplaceScreen}
                options={{
                    title: '',
                }}
            />
            <WorkplaceStack.Screen name="ColleagueBirthdayScreen" component={ColleagueBirthdayScreen} />
            <WorkplaceStack.Screen name="HonorScreen" component={HonorScreen} />

        </WorkplaceStack.Navigator>
    )
}