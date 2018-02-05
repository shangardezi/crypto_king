/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene} from 'react-native-router-flux';
import HomeScreen from '../Features/Home/Screen/HomeScreen';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#2f3542',
    borderBottomColor: 'black',
  },
  titleStyle: {
    color: 'white'
  }
});

const App = () => {
  return(
    <Router>
      <Stack>
        <Scene
          navigationBarStyle={styles.navBar}
          titleStyle={styles.titleStyle}
          key={'home'}
          component={HomeScreen}
          title={'Home'}
        />
      </Stack>
    </Router>
  )
};

export default App;