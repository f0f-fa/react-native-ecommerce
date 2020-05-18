import React from 'react';
import { StyleSheet, Text, FlatList, ActivityIndicator, View, Image} from 'react-native';



export default function Categories() {
  return(
    <View>
      <Text>Hello world!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</Text>
    </View>

)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   subtitleView: {
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
  titleText: {
    fontWeight: 'bold'
  },
  restaurantImage: {
    width: 600,
    height: 800
  }
});
