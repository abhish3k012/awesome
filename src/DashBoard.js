import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {data} from '.';
// import {data} from '.';

const DashBoard = props => {
  const {navigation, route} = props || {};
  const {params} = route || {};
  const name = params.name;
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [isClicked1, setClicked1] = useState(false);
  const [isClicked2, setClicked2] = useState(false);
  const [isClicked3, setClicked3] = useState(false);
  // const [suggestions, setSuggestions] = useState([]);

  const onSearch = txt => {
    const filteredItems = data.filter(item => {
      return item.name.toLowerCase().indexOf(txt.toLowerCase()) > -1;
    });
    setFilteredData(filteredItems);
  };
  function showjeans() {
    const jeans = data.filter(item => item.name === 'blue Jeans');
    setFilteredData(jeans);
    setClicked1(true);
  }
  function showkurta() {
    const kurta = data.filter(item => item.name === 'jaguar');
    setFilteredData(kurta);
    setClicked2(true);
  }
  function showall() {
    setFilteredData(data);
    setClicked3(true);
  }
  return (
    <SafeAreaView style={style.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => {
            showall();
            setClicked1(false);
          }}>
          <Text
            style={{
              textDecorationLine: !isClicked1 ? 'underline' : 'none',
              fontSize: 16,
              margin: 2,
              padding: 2,
            }}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            showjeans();
            setClicked2(false);
          }}>
          <Text
            style={{
              textDecorationLine: !isClicked2 ? 'underline' : 'none',
              fontSize: 16,
              margin: 2,
              padding: 2,
            }}>
            Jeans
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            showkurta();
            setClicked3(false);
          }}>
          <Text
            style={{
              textDecorationLine: !isClicked3 ? 'underline' : 'none',
              fontSize: 16,
              margin: 2,
              padding: 2,
            }}>
            Kurta
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={style.searchBar}
        placeholder="Search..."
        value={search}
        onChangeText={txt => {
          setSearch(txt);
          onSearch(txt);
        }}
      />

      <View style={style.scrollView}>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          // style={{backgroundColor:"blue"}}
          renderItem={({item}) => {
            console.log('flatlist====>data==>', item);
            return (
              // <View style={{backgroundColor:"red",h}}>
              // <Image source={require('../src/images/lion.png')} />
              // </View>
              <View style={style.box}>
                <Image
                  source={item.img}
                  style={{height: 150, width: 140}}
                  resizeMode="contain"
                />
                <Text style={style.text1}>{item.name}</Text>
                <Text style={style.text2}>{item.price}</Text>
              </View>
            );
          }}
          contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap'}}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  scrollView: {
    // backgroundColor: 'pink',
  },
  box: {
    marginBottom: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderRadius: 8,
    margin: 5,
  },
  text1: {
    fontSize: 18,
    textAlign: 'left',
  },
  text2: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: '700',
  },
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 16,
    fontSize: 20,
  },
  button: {
    textDecorationLine: 'underline',
  },
});
export default DashBoard;
