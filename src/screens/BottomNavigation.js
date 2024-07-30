import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import BackIcon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Notification from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Home';
import Login from './Login';
import CallScreen from './Call';
const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#116754',
        tabBarInactiveTintColor: '#808080',
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: -5,
        },
        headerTitleStyle: {
          fontSize: 25, // Set the desired font size for the header text
          marginLeft: 0,
        },
        headerStyle: {
          borderBottomWidth: 0, // Remove bottom border
          elevation: 0,
          borderColor: 'white',
          backgroundColor: 'white', // Remove box shadow for Android
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
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
                  source={require('../assets/icons/arrow.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{height: 70, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                  style={{width: 50, resizeMode: 'contain'}}
                  source={require('../assets/icons/male.png')}
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
          tabBarLabel: 'Messages',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/message-dark.png')}
              style={{width: 25, height: 25}}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Call"
        component={CallScreen}
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
                  source={require('../assets/icons/arrow.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View style={{height: 70, justifyContent: 'center'}}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                  style={{width: 50, resizeMode: 'contain'}}
                  source={require('../assets/icons/male.png')}
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
          tabBarLabel: 'Call',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/icons/call.png')}
              style={{width: 25, height: 25, tintColor: color}}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Doctors"
        component={Login}
        options={{
          headerShown: false,
          tabBarLabel: 'Contact',
          tabBarIcon: () => (
            <Image
              source={require('../assets/icons/contact.png')}
              style={{width: 25, height: 25}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Login}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{flexDirection: 'row', marginLeft: 13}}
              onPress={() => navigation.navigate('Dashboard')}>
              <BackIcon
                name="arrowleft"
                size={23}
                color="#116754"
                style={{marginRight: 18}}
              />
              <Text style={[styles.backicontext, {marginLeft: -10}]}>
                Profile
              </Text>
            </TouchableOpacity>
          ),
          title: null,
          headerRight: () => (
            <View style={{flexDirection: 'row', gap: -5, marginRight: 15}}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#116754',
                  padding: 10,
                  borderRadius: 50,
                }}
                onPress={() => navigation.navigate('Notification')}>
                <Notification name="notifications" size={15} color={'white'} />
              </TouchableOpacity>
            </View>
          ),
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Image
              source={require('../assets/icons/setting.png')}
              style={{width: 25, height: 25, tintColor: color}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  backicontext: {
    color: 'black',
    fontSize: 16,
  },
});
export default MyTabs;
