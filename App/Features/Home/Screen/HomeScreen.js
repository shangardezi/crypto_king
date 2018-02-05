/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import Carousel from '../../../Components/Carousel/Carousel'
import List from '../../../Components/List/List'


export default class HomeScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Carousel/>
        <List/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});
