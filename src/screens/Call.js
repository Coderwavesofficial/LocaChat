import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

const CallScreen = () => {
  let call = [
    {
      id: 1,
      name: 'Lorem',
      lastMessage: 'Hello, How Are You',
      callTime: 'Today, 09:30 AM ',
      profileImage: require('../assets/icons/girl.png'),
    },
    {
      id: 2,
      name: 'John Abraham',
      lastMessage: 'Its Raining Day',
      callTime: 'Today, 09:30 AM ',
      profileImage: require('../assets/icons/boy.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      callTime: 'Today, 09:30 AM ',
      profileImage: require('../assets/icons/girl.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      callTime: 'Today, 09:30 AM ',
      profileImage: require('../assets/icons/boy.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      callTime: 'Today, 09:30 AM ',
      profileImage: require('../assets/icons/female.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      callTime: 'Today, 09:30 AM ',
      profileImage: require('../assets/icons/girl.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      callTime: 'Today, 09:30 AM ',
      profileImage: require('../assets/icons/male.png'),
    },
    {
      id: 3,
      name: 'Liam',
      lastMessage: 'Hello, How Are You',
      callTime: 'Today, 09:30 AM ',
      profileImage: require('../assets/icons/girl.png'),
    },
  ];
  let status = [
    {
      id: 1,
      name: 'Ruby',
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
          marginTop: 30,
          flex: 5,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          backgroundColor: '#fff',
          overflow: 'hidden',
        }}>
        <View style={{paddingTop: 20, paddingLeft: 20}}>
          <Text style={{fontWeight: 900, fontSize: 15, color: '#000'}}>
            Recent
          </Text>
        </View>
        <ScrollView>
          {call.map((value, index) => {
            return (
              <View
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                  height: 80,
                  gap: 10,
                }}>
                <View>
                  <Image
                    style={{width: 70, resizeMode: 'contain'}}
                    source={value.profileImage}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'space-around',
                    height: 60,
                  }}>
                  <View>
                    <Text style={{fontWeight: '900', fontSize: 16}}>
                      {value.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 10,
                    }}>
                    <Image
                      style={{
                        width: 20,
                        height: 20,
                        resizeMode: 'contain',
                        tintColor: 'green',
                      }}
                      source={require('../assets/icons/incoming-call.png')}
                    />
                    <Text>{value.callTime}</Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', gap: 25}}>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'contain',
                    }}
                    source={require('../assets/icons/call.png')}
                  />
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'contain',
                    }}
                    source={require('../assets/icons/video.png')}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default CallScreen;
