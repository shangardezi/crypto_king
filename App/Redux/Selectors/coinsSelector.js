export const getCoinById = (state, id) => {
	return state.data.coins[id]
}

export const getCoins = (state, ids) => {
	if(ids) {
		return ids.map(id => {
			return getCoinById(state, id)
		})
	}
}

export const getGeneralCoinInfoById = (state, id) => {
	if(id) {
		const coinInfo = getCoinById(state, id)
		return coinInfo.General
	}
}

export const getCoinPriceById = (state, id) => {
	if(id) {
		const coinInfo = getCoinById(state, id)
		const prices = coinInfo.price

		if (prices) {
			return Object.keys(prices).map(price => {
				return {
					currencyName: price,
					price: prices[price]
				}
			})
		}
	}
}