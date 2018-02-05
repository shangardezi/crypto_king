import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'

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
    value
  }) => {
    return(
      <View style={styles.container}>

        <View style={styles.leftContainer}>
          <Image style={styles.icon} source={{uri: icon}}/>
          <Text>{name}</Text>
        </View>

        <View>
          <Text>{value}</Text>
        </View>

      </View>
    )
};

export default RowList;