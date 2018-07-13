/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Button
} from 'react-native';
import Data from './Data'


export default class Detail extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
        <Text>{this.props.navigation.state.params.id}</Text>
        <Text>{this.props.navigation.state.params.School}</Text>
        <Text>{this.props.navigation.state.params.Age}</Text>
        <Text>{this.props.navigation.state.params.Name}</Text>
        <Button title="Goback"  onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});
