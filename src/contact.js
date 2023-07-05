import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import React, {useState} from 'react';
// import { Ionicons
//  } from 'react-native';
const Contact = props => {
  const {navigation, route} = props || {};
  const {params} = route || {};
  const password = params?.pass;
  const Email = params?.email;
  const name = params?.name;
  console.log('_--->', password, Email, name);
  console.log('====>', params);
  const [agree, setAgree] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [isShowPass, setIsShowPass] = useState(false);
  const [isError, setError] = useState(false);

  const showdata = props => {
    console.warn(pass);
  };
  const onSubmit = () => {
    if (pass === password && email === Email) {
      navigation.navigate('dashBoard', {
        pass: pass,
        email: email,
        name: name,
      });
    } else {
      setError('wrong password');
    }
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
          Login
        </Text>
        <View>
          <TextInput
            style={style.textinput}
            placeholder="enter your name"
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
            autuCorrect={false}
          />
          <Text style={{color: 'red'}}>{isError}</Text>
        </View>
        <View>
          <TextInput
            style={style.textinput}
            onChangeText={text => setPass(text)}
            placeholder="enter your pass"
            autoCapitalize="none"
            autuCorrect={false}
            secureTextEntry={isShowPass ? false : true}
          />
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => setIsShowPass(!isShowPass)}>
            <Text>{isShowPass ? 'hide password' : 'show password'}</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={style.button} onPress={() => onSubmit()}>
              <Text>Login</Text>
            </TouchableOpacity>
            <Button
              title="Go to Singup"
              onPress={() => navigation.navigate('singup')}
            />
          </View>
        </View>
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

export default Contact;
