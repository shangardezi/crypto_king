import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RowList from './Components/RowList';
import { cryptoInfo } from '../../Utils/cryptoInfo';


class List extends Component {

  _renderRow(item) {
    return(
      <RowList
        icon={`https://www.cryptocompare.com/${item.ImageUrl}`}
        name={item.CoinName}
        id={item.Id}
        symbol={item.Symbol}
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
    return(
      <FlatList
        data={ Object.values(data) }
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

export default List;