import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import SplashScreen from './src/screens/Splash';
import Login from './src/screens/Login';
import Onboard from './src/screens/Onboard';
import Signup from './src/screens/Signup';
import ForgetPassword from './src/screens/ForgetPassword';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyTabs from './src/screens/BottomNavigation';
import Chat from './src/screens/Chat';

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
          name="Tabs"
          component={MyTabs}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Chat"
          component={Chat}
        />
        <Stack.Screen
          options={({navigation}) => ({
            headerLeft: () => (
              <View
                style={{
                  height: 70,
                  justifyContent: 'center',
                }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                    tintColor={'#fff'}
                    style={{width: 30, resizeMode: 'contain'}}
                    source={require('./src/assets/icons/arrow.png')}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerRight: () => (
              <View style={{height: 70, justifyContent: 'center'}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Image
                    style={{width: 50, resizeMode: 'contain'}}
                    source={require('./src/assets/icons/male.png')}
                  />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: {
              borderBottomWidth: 0, // Remove bottom border
              elevation: 0,
              borderColor: 'black',
              backgroundColor: 'black',
              shadowColor: 'transparent',
              borderColor: 'black',
              // Remove box shadow for Android
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          })}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backicontext: {
    color: 'black',
    fontSize: 16,
    // fontFamily: Fonts.REGULAR,
  },
});
export default App;
