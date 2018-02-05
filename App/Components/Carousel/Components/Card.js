import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Card = ({
    netWorth,
    dayChange,
    totalCost,
    totalProfit
  }) => {
    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.textHeader}>Net Worth</Text>

          <View style={styles.rightHeader}>
            <Text style={styles.textHeader}>24h Change</Text>
            <Text style={styles.textHeader}>{dayChange}</Text>
          </View>

        </View>

        <View style={styles.body}>
          <Text style={styles.textBody}>{netWorth}</Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.textHeader}>{totalCost}</Text>
          <Text style={styles.textHeader}>{totalProfit}</Text>
        </View>

      </View>
    )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#00a8ff',
    flexDirection: 'column',
    flex: 1,
    width: 300,
    marginHorizontal: 5,
    padding: 10,
    borderRadius: 7,
    justifyContent: 'space-around',
    height: 150
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightHeader: {
    position: 'absolute',
    right: 0,
    top: 0,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  body:{},
  footer:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  textHeader:{
    fontSize: 16,
    color: 'white'
  },
  textBody:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  }
});

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  netWorth: PropTypes.string,
  dayChange: PropTypes.string,
  totalCost: PropTypes.string,
  totalProfit: PropTypes.string
};

export default Card;