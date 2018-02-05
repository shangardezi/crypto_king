import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import Card from './Components/Card';
import { cryptoInfo } from '../../Utils/cryptoInfo'


class Carousel extends Component {

  _renderCards() {
    return cryptoInfo.map(crypto => {
      return <Card
        key={crypto.id}
        name={crypto.name}
        netWorth={crypto.netWorth}
        dayChange={crypto.dayChange}
        totalCost={crypto.totalCost}
        totalProfit={crypto.totalProfit}
      />
    })
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={ true }
        style={styles.container}>

        { this._renderCards() }

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#2f3640',
    maxHeight: 200
  }
});

export default Carousel;