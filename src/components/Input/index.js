import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Input = ({label}) => {
  return (
    <View style={style.container}>
      <Text style={style.label}>{label}</Text>
      <TextInput style={style.Input}></TextInput>
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  Input: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  label: {
    fontWeight: '800',
    paddingLeft: 1,
  },
});
