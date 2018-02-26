/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  StyleSheet,
  View,
	Text
} from 'react-native'
import { connect } from 'react-redux'
import Carousel from '../../../Components/Carousel/Carousel'
import List from '../../../Components/List/List'
import { getCoinsRequest } from '../../../Redux/Actions/coinsActions'
import { getCoins } from '../../../Redux/Selectors/coinsSelector'


class HomeScreen extends Component {

	componentDidMount() {
		const { getCoinsRequest } = this.props
		getCoinsRequest()
	}

	render() {
		const {results} = this.props

		if (results) {
			return (
				<View style={styles.container}>
					<Carousel/>
					<List data={results}/>
				</View>
			)
		}

		return (
			<Text>Loading...</Text>
		)

	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
  }
});

const mapStateToProps = (state) => {
	const { homeScreen } = state.ui
	const { coinIds } = homeScreen
	return {
		results: getCoins(state, coinIds)
	}
}


export default connect(mapStateToProps, {
	getCoinsRequest
})(HomeScreen)