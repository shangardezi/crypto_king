import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  icon:{
    width: 30,
    overflow: 'visible',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftContainer:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start'
  }
});
const RowList = ({
    icon,
    name,
    symbol
  }) => {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.leftContainer} onPress={ () => { Actions.coinDetail({ symbol }) } } >
          <Image style={styles.icon} source={{uri: icon}}/>
          <Text>{name}</Text>
        </TouchableOpacity>
      </View>
    )
};

export default RowList;