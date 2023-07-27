import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, {useState, ScrollView, useEffect} from 'react';
import {Data} from '.';

const MainApp = () => {
  const [search, setSearch] = useState('');
  const [StoreData, SetStoreData] = useState(Data);
  const [isupdate, setUpdate] = useState('');
  //const [isRefresh, setIsRefresh] = useState(false);
  useEffect(() => {
    const sortedData = StoreData.sort((a, b) => b.bananas - a.bananas);
    SetStoreData(sortedData.slice(0, 10));
  }, []);
  // function updated(txt) {
  //   const update = {name: txt};
  //   filteredData.splice(9, 1, update)
  //   setFilteredData(filteredData);
  // }
  console.log(' ==================', StoreData);
  const onSearch = txt => {
    const filteredItems = Data.filter(
      item =>
        item.name.toLowerCase().includes(txt.toLowerCase()) ||
        item.bananas.toString().includes(txt),
    );
    // const sortedData = [...filteredItems].sort((a, b) => b.bananas - a.bananas);
    // const updatedata = [...filteredData];

    setUpdate(filteredItems);
    //setIsRefresh(false);
    // updatedata.splice(9, 1, ...sortedData);
    // setFilteredData(updatedata);
  };
  function updated() {
    const updatedata = [...StoreData];
    console.log(...isupdate);
    updatedata.splice(9, 1, ...isupdate);
    SetStoreData(updatedata);
    // setIsRefresh(false);

    //setIsRefresh(false);
  }

  return (
    <SafeAreaView>
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        value={search}
        onChangeText={txt => {
          setSearch(txt);
          onSearch(txt);
        }}
      />
      <Button
        title="updated"
        onPress={updated}
        disabled={search.length === 0 || isupdate.length === 0}></Button>
      {/* <TouchableOpacity onPress={updated} disabled={isupdate.length === 0}>
        <Text
          style={{
            fontSize: 16,
            margin: 2,
            padding: 2,
            textAlign:'center'
          }}>
          updated
        </Text>
      </TouchableOpacity> */}
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>ID</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Name</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Bananas</Text>
          </View>
        </View>
        {StoreData?.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>{index + 1}</Text>
            </View>
            <View style={styles.tableCell}>
              <Text numberOfLines={1} style={styles.cellText}>
                {item.name}
              </Text>
            </View>
            <View style={styles.tableCell}>
              <Text style={styles.cellText}>{item.bananas}</Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};
export default MainApp;

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 16,
    fontSize: 20,
  },
  tableContainer: {
    borderWidth: 1,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  tableHeader: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
    backgroundColor: '#ccc',
  },
  headerText: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    color: 'black',
  },
  tableCell: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 16,
    backgroundColor: '#ccc',
    color: '#000000',
    color: Platform.OS === 'ios' ? 'blue' : 'black',
  },
  cellText: {
    fontSize: 18,
    textAlign: 'left',
    color: Platform.OS === 'ios' ? 'blue' : 'black',
  },
});
// const newData = [...filteredData];
// const update = {...newData[0], name: txt};
setTimeout(() => {
  console.log('helloabhishek');
}, 1000);
