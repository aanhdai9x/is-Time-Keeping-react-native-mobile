import { createStackNavigator } from '@react-navigation/stack';
import HeaderCustom from '../components/HeaderCustom';
import ProjectScreen from '../screens/ProjectScreen';

const ProjectStack = createStackNavigator();

export default function ProjectStacks() {
    return (
        <ProjectStack.Navigator
            initialRouteName="ProjectScreen"
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: 'null',
                }
            }}
        >
            <ProjectStack.Screen name="ProjectScreen" component={ProjectScreen}
                options={{
                    headerTitle: () => <HeaderCustom />
                }}
            />
            
        </ProjectStack.Navigator>
    )
}