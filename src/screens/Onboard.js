import {Image, StyleSheet, Text, View} from 'react-native';

import Button from '../components/Button';

const Onboard = ({navigation}) => {
  return (
    <View style={{flex: 1, paddingHorizontal: 10, backgroundColor: '#EBF4F6'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Loca Chat</Text>
      </View>
      <View style={{flex: 4}}>
        <Text style={style.Heading}>Connect friends easily & quickly</Text>
        <Text style={style.paragraph}>
          Our chat app is the perfect way to stay connected with friends and
          family.
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <View style={style.icons}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./../assets/icons/facebook.png')}
            />
          </View>
          <View style={style.icons}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./../assets/icons/google.png')}
            />
          </View>
          <View style={style.icons}>
            <Image
              style={{width: 40, height: 40}}
              source={require('./../assets/icons/apple.png')}
            />
          </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center'}}>OR</Text>
          </View>
          <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
      </View>
      <View style={{flex: 1, gap: 10}}>
        <View>
          <Button
            title={'Sign Up With Email'}
            style={{backgroundColor: 'blue'}}
            onPress={() => {
              navigation.navigate('Signup');
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 10}}>
          <Text>Existing Account?</Text>
          <Text
            style={{fontWeight: '800'}}
            onPress={() => {
              navigation.navigate('Login');
            }}>
            Login
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Onboard;

const style = StyleSheet.create({
  Heading: {
    fontSize: 70,
    color: '#071952',
  },
  paragraph: {
    fontSize: 18,
    paddingTop: 10,
    color: '#37B7C3',
  },
  icons: {
    borderColor: '#EBF4F6',
    borderWidth: 1,
    borderRadius: 50,
    padding: 2,
  },
});
