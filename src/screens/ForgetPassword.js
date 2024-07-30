import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../components/Button';
import Input from '../components/Input';

const ForgetPassword = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 10}}>
      <View style={{flex: 2, marginTop: 20, gap: 5}}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: '800'}}>ForgetPassword to LocaChat</Text>
          <Text style={style.paragraph}>
            Welcome back! Sign in using your social account or email to continue
            us
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
          }}>
          <View style={style.icons}>
            <Image
              style={{width: 35, height: 35}}
              source={require('./../assets/icons/facebook.png')}
            />
          </View>
          <View style={style.icons}>
            <Image
              style={{width: 35, height: 35}}
              source={require('./../assets/icons/google.png')}
            />
          </View>
          <View style={style.icons}>
            <Image
              style={{width: 35, height: 35}}
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
      <View style={{flex: 3}}>
        <Input label={'Your Email'} />
      </View>
      <View style={{flex: 1}}>
        <Button title={'Forget Password'} />
      </View>
    </SafeAreaView>
  );
};
export default ForgetPassword;

const style = StyleSheet.create({
  paragraph: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 10,
    color: '#000',
  },
  icons: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 50,
    padding: 5,
  },
});
