import {Dimensions, Image, Text, View} from 'react-native';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Onboard');
  }, 3000);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}>
      {/* <Image
        style={{
          width: Dimensions.get('screen').width,
          height: '100%',
          resizeMode: 'contain',
        }}
        source={require('../../assets/images/logo.png')}
      /> */}
      <Text style={{color: '#fff', fontSize: 20}}>Loca Chat</Text>
    </View>
  );
};
export default SplashScreen;
