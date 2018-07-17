import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import RowPriceList from './Components/RowPriceList'

class PriceList extends Component {

	_renderRow(item) {
		return(
			<RowPriceList
				currencyName={item.currencyName}
				price={item.price}
			/>
		)
	}

	_renderSeperator() {
		return(
			<View style={styles.seperator}></View>
		)
	}

	render() {
		const { data } = this.props
		console.log("RESULTS", data)
		return(
			<FlatList
				data={ data }
				renderItem={({item}) => this._renderRow(item)}
				ItemSeparatorComponent={() => this._renderSeperator()}
				style={{flex: 1}}
			/>
		)
	}
}

const styles = StyleSheet.create({
	seperator: {
		borderColor: 'lightgrey',
		borderWidth: StyleSheet.hairlineWidth
	}
});

export default PriceList;