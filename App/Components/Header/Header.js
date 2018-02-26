import React, { Component } from 'react'
import {
	View,
	StyleSheet,
	Image, Text,
	TouchableOpacity,
	Linking
} from 'react-native'

class Header extends Component {
	render () {
		const { data } = this.props
		return(
			<View style={styles.container}>
				<Image style={ styles.image } source={{uri: `https://www.cryptocompare.com${data.ImageUrl}`}}/>
				<View>
					<Text style={ styles.header }>Total Coin Supply</Text>
					<Text>{data.TotalCoinSupply}</Text>
					<TouchableOpacity onPress={() => Linking.openURL(data.AffiliateUrl)} style={styles.website}>
						<Text>
							Go to website.
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		justifyContent: 'space-around',
		backgroundColor: 'lightgrey',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 15
	},
	image:{
		width: 100,
		height: 100
	},
	header: {
		fontWeight: 'bold',
		fontSize: 18
	},
	website: {
		paddingVertical: 10
	}
})

export default Header