import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Singup = ({navigation}) => {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [pass, setpass] = useState('');
  const [isError, SetError] = useState('');
  console.log(pass);
  const showdata = () => {
    if (pass.length !== 0 && email.length !== 0 && name.length !== 0) {
      navigation.navigate('Home', {
        pass: pass,
        email: email,
        name: name,
      });
    } else {
      SetError('please fill all data');
    }
  };
  const gologin = () => {
    navigation.navigate('singup');
  };
  return (
    <SafeAreaView>
      <View
        style={{height: '100%', alignSelf: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: 15,
            color: 'black',
            alignSelf: 'center',
            lineHeight: 25,
            margin: 12,
          }}>
          Singup
        </Text>

        <View>
          <Text style={style.text}>NAME</Text>
          <TextInput
            style={style.textinput}
            placeholder="enter your name"
            onChangeText={text => setname(text)}
            autoCapitalize="none"
            autuCorrect={false}
            value={name}
          />
        </View>

        <View>
          <Text style={style.text}>Email-ID</Text>
          <TextInput
            style={style.textinput}
            onChangeText={text => setemail(text)}
            placeholder="enter your email"
            autoCapitalize="none"
            autuCorrect={false}
            keyboardType="email-address"
            value={email}
          />
        </View>

        <View>
          <Text style={style.text}>PASSWORD</Text>
          <TextInput
            style={style.textinput}
            onChangeText={text => setpass(text)}
            placeholder="enter your pass"
            autoCapitalize="none"
            autuCorrect={false}
            secureTextEntry={true}
            value={pass}
          />
        </View>
        <Text style={{color: 'red'}}>{isError}</Text>
        <View>
          <TouchableOpacity style={style.button} onPress={() => showdata()}>
            <Text>singup</Text>
          </TouchableOpacity>
        </View>
        <Button title="go to login" onPress={() => navigation.navigate('Home')}></Button>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  textinput: {
    fontSize: 18,
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    padding: 1,
    margin: 11,
    paddingHorizontal: 60,
    paddingVertical: 7,
    borderRadius: 20,
    fontFamily: 'regular',
    textShadowColor: 'blue',
  },
  text: {
    fontSize: 22,
    color: '#7d7d7d',
    marginTop: 10,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  button: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 18,
    alignSelf: 'center',
    //backgroundColor: '#DDDDDD',
    padding: 80,
    //lexDirection: 'row',

    backgroundColor: 'green',
    borderRadius: 15,
    margin: 25,
  },
});

export default Singup;
