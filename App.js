import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import SplashScreen from './src/screens/Splash';
import Login from './src/screens/Login';
import Onboard from './src/screens/Onboard';
import Signup from './src/screens/Signup';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Onboard"
          component={Onboard}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
