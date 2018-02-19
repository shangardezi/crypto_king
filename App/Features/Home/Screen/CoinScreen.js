import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { getCoinsDetailRequest } from '../../../Redux/Actions/applicationActions'

class CoinScreen extends Component {

	componentDidMount() {
		const { getCoinsDetailRequest, symbol } = this.props
		getCoinsDetailRequest(symbol)
	}

	render() {
		const { results } = this.props
		return (
			<View style={styles.container}>
				<Text>EUR: {results.EUR}</Text>
				<Text>USD: {results.USD}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start'
	}
})

const mapStateToProps = (state) => {
	return {
		results: state.coins.results
	}
}

export default connect(mapStateToProps, {
	getCoinsDetailRequest
})(CoinScreen)