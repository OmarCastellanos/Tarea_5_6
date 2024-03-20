import {PokeDetailsScreen, PokeListScreen, WelcomeScreen} from './components';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const App =()=>(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="PokeList" component={PokeListScreen}/>
      <Stack.Screen name="PokeDetails" component={PokeDetailsScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);
export default App;