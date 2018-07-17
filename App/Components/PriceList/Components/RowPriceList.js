import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
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
const RowPriceList = ({
									currencyName,
									 price
								 }) => {
	return(
		<View style={styles.container}>
			<Text>{currencyName}</Text>
			<Text>{price}</Text>
		</View>
	)
};

export default RowPriceList;