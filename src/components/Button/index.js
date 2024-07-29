import {Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        height: 40,
        backgroundColor: '#37B7C3',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onPress}>
      <Text style={{color: '#EBF4F6'}}>Signup</Text>
    </TouchableOpacity>
  );
};

export default Button;
