import {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Chat = () => {
  const [text, setText] = useState('');
  const [chat, setChat] = useState([
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: true,
    },
    {
      id: 1,
      message: 'Hello ',
      time: '02:04 Am',
      you: false,
    },
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: false,
    },
    {
      id: 1,
      message:
        'Hello,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      time: '02:04 Am',
      you: false,
    },
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: true,
    },
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: false,
    },
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: true,
    },
    {
      id: 1,
      message:
        'Hello,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
      time: '02:04 Am',
      you: true,
    },
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: true,
    },
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: true,
    },
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: true,
    },
    {
      id: 1,
      message: 'Hello',
      time: '02:04 Am',
      you: false,
    },
  ]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <StatusBar backgroundColor="#000" />
      <View
        style={{
          flex: 0.5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 15,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            style={{width: 25, height: 25, resizeMode: 'contain'}}
            source={require('../assets/icons/left-arrow.png')}
          />
          <View
            style={{
              paddingLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 50, height: 50}}
              source={require('../assets/icons/girl.png')}
            />
            <View style={{paddingLeft: 15}}>
              <Text style={{fontWeight: '800', fontSize: 16, color: '#000'}}>
                John Abraham
              </Text>
              <Text style={{fontSize: 12}}>Active Now</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/icons/call2.png')}
          />
          <Image
            style={{width: 25, height: 25}}
            source={require('../assets/icons/video.png')}
          />
        </View>
      </View>
      <View
        style={{
          flex: 4.8,
        }}>
        <ScrollView
          snapToAlignment="end"
          ref={ref => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({animated: true})
          }>
          {chat.map((value, index) => {
            return (
              <View
                key={index}
                style={{paddingHorizontal: 20, display: 'flex'}}>
                {value.you ? (
                  <View
                    style={{
                      margin: 5,
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        backgroundColor: 'cyan',
                        width: Dimensions.get('window').width * 0.68,
                        padding: 10,
                        borderTopRightRadius: 15,
                        borderBottomRightRadius: 15,
                        borderBottomLeftRadius: 15,
                        textAlign: 'justify',
                      }}>
                      {value.message}
                    </Text>
                  </View>
                ) : (
                  <View
                    key={index}
                    style={{
                      margin: 5,
                      alignItems: 'flex-end',
                    }}>
                    <Text
                      style={{
                        color: '#000',
                        backgroundColor: 'cyan',
                        width: Dimensions.get('window').width * 0.68,
                        padding: 10,
                        borderTopLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        borderBottomLeftRadius: 15,
                        textAlign: 'justify',
                      }}>
                      {value.message}
                    </Text>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 0.5,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingHorizontal: 10,
          paddingVertical: 8,
          flexDirection: 'row',
        }}>
        <View>
          <Image
            style={{width: 25, height: 25, resizeMode: 'contain'}}
            source={require('../assets/icons/clip.png')}
          />
        </View>
        <View>
          <TextInput
            style={{
              backgroundColor: '#f3f6f6',
              width: Dimensions.get('window').width * 0.65,
              height: 40,
              borderRadius: 10,
            }}
            placeholder="Enter Your Message"
            value={text}
            onChangeText={text => {
              setText(text);
            }}
          />
        </View>
        <View>
          <TouchableOpacity
            style={{
              borderColor: '#000',
              borderWidth: 1,
              padding: 5,
              borderRadius: 20,
            }}
            onPress={() => {
              console.log(chat);
              setChat([...chat, {message: text, you: false}]);
              setText('');
            }}>
            <Image
              style={{width: 25, height: 25, resizeMode: 'contain'}}
              source={require('../assets/icons/send.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Chat;
