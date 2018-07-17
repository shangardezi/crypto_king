/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { Router, Stack, Scene} from 'react-native-router-flux'
import HomeScreen from '../Features/Home/Screen/HomeScreen'
import CoinScreen from '../Features/Home/Screen/CoinScreen'
import { StyleSheet } from 'react-native'
import createReducers from '../Redux/Reducers/rootReducer'
import { Provider } from 'react-redux'

const state = createReducers()

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
  	<Provider store={state}>
    <Router>
      <Stack key="root">
        <Scene key={'home'} navigationBarStyle={styles.navBar} titleStyle={styles.titleStyle} component={HomeScreen} title={'Home'}/>
        <Scene key={'coinDetail'} navigationBarStyle={styles.navBar} titleStyle={styles.titleStyle} component={CoinScreen} title={'Coin Price'}/>
      </Stack>
    </Router>
		</Provider>
  )
};

export default App;