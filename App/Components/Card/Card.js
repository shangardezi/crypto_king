import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Card = ({
	coinName,
	coinLogo,
	coinInUSD,
	coinInEUR
}) => {
	return(
		<View style={styles.container}>

		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		backgroundColor: '#00a8ff',
		flexDirection: 'column',
		flex: 1,
		width: 300,
		marginHorizontal: 5,
		paddingLeft: 20,
		borderRadius: 7,
		justifyContent: 'space-around',
		height: 100
	}
})

export default Card