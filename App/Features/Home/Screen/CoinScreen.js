import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, WebView } from 'react-native'
import Header from '../../../Components/Header/Header'
import { getCoinsDetailRequest, getCoinPriceRequest } from '../../../Redux/Actions/coinsActions'
import {getCoinPriceById, getGeneralCoinInfoById} from "../../../Redux/Selectors/coinsSelector"
import PriceList from '../../../Components/PriceList/PriceList'

class CoinScreen extends Component {

	componentDidMount() {
		const { getCoinsDetailRequest, id, getCoinPriceRequest, symbol } = this.props
		getCoinsDetailRequest(id)
		getCoinPriceRequest(symbol)
	}

	render() {
		const { results, priceData } = this.props

		if(results) {
			return (
				<View style={styles.container}>
					<Header data={results}></Header>
					<View style={styles.container}>
						<WebView automaticallyAdjustContentInsets={false} scalesPageToFit={false} source={{html: results.Description}} />
					</View>

					{ priceData && <View style={styles.container}>
						<PriceList data={priceData} />
					</View> }
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
})

const mapStateToProps = (state, props) => {
	return {
		results: getGeneralCoinInfoById(state, props.symbol),
		priceData: getCoinPriceById(state, props.symbol)
	}
}

export default connect(mapStateToProps, {
	getCoinsDetailRequest,
	getCoinPriceRequest
})(CoinScreen)