import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Categories from './Categories'
const url = 'http://app.ltmix.ru/catalog';

function Item({ category_id, name }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.push('Categories')}
    >
      <Text>{name}, {category_id}</Text>
    </TouchableOpacity>
  );
}



export default function Category({navigation}) {
  const [hasError, setErrors] = useState(false);
  const [data, setData] = useState({});

  async function fetchData() {
    const res = await fetch(url);
    res
      .json()
      .then(res => setData(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => (
          console.log(item),
          <Item
            category_id={item.category_id}
            name={item.name}
          />
        )}
        keyExtractor={item => item.category_id}
      />
    </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subnameView: {
    flexDirection: 'column',
    paddingLeft: 10,
    paddingTop: 5,
    marginLeft: 110
  },
  menuText: {
    paddingLeft: 10,
    color: 'grey'
  },
  locText: {
    paddingLeft: 10,
    color: 'grey',
    marginTop: 6,
    fontSize: 12
  },
  nameText: {
    fontWeight: 'bold'
  },
  restaurantImage: {
    width: 600,
    height: 800
  }
});
