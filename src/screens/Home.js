import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  let chats = [
    {
      id: 1,
      name: 'Lorem',
      lastMessage: 'Hello, How Are You',
      lastSeen: '2 mint ago',
      profileImage: require('../assets/icons/girl.png'),
    },
    {
      id: 2,
      name: 'John Abraham',
      lastMessage: 'Its Raining Day',
      lastSeen: '1 hour ago',
      profileImage: require('../assets/icons/female.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      lastSeen: '2 mint ago',
      profileImage: require('../assets/icons/boy.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      lastSeen: '2 mint ago',
      profileImage: require('../assets/icons/female.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      lastSeen: '2 mint ago',
      profileImage: require('../assets/icons/boy.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      lastSeen: '2 mint ago',
      profileImage: require('../assets/icons/girl.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      lastSeen: '2 mint ago',
      profileImage: require('../assets/icons/male.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      lastSeen: '2 mint ago',
      profileImage: require('../assets/icons/female.png'),
    },
  ];
  let status = [
    {
      id: 1,
      name: 'My status',
      profileImage: require('../assets/icons/female.png'),
    },
    {
      id: 1,
      name: 'Liam',
      profileImage: require('../assets/icons/male.png'),
    },
    {
      id: 1,
      name: 'Hammad',
      profileImage: require('../assets/icons/male.png'),
    },
    {
      id: 1,
      name: 'preeti',
      profileImage: require('../assets/icons/female.png'),
    },
    {
      id: 1,
      name: 'Jannat',
      profileImage: require('../assets/icons/male.png'),
    },
    {
      id: 1,
      name: 'Faisal',
      profileImage: require('../assets/icons/male.png'),
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>
      <StatusBar backgroundColor="#000" />
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#000',
        }}>
        <ScrollView style={{flex: 1}} horizontal={true}>
          {status.map((value, index) => {
            return (
              <View
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 0,
                }}>
                <Image
                  style={{width: 80, height: 80, resizeMode: 'contain'}}
                  source={value.profileImage}
                />
                <Text style={{color: '#fff'}}>{value.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 5,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: '#fff',
          overflow: 'hidden',
        }}>
        <ScrollView>
          {chats.map((value, index) => {
            return (
              <View key={index} style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Chat');
                  }}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    height: 80,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                      style={{width: 70, resizeMode: 'contain'}}
                      source={value.profileImage}
                    />
                    <View style={{paddingLeft: 15}}>
                      <Text style={{fontWeight: '900', fontSize: 16}}>
                        {value.name}
                      </Text>
                      <Text>{value.lastMessage}</Text>
                    </View>
                  </View>
                  <View>
                    <Text>{value.lastSeen}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default HomeScreen;
