import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={styles.customStyle}>
        <Text style={[styles.welcome, this.state.customStyle]}>Hello, world!</Text>
      </View>
    );
  }

  constructor () {
    super()
    this.state = {}
    this.state.customStyle = {
      color: 'green'
    }

    setInterval(() => {
      if(this.state.customStyle.color == 'green') {
      this.setState({
        customStyle: {
          color: 'blue'
        }
      })
    } else {
      this.setState({
        customStyle: {
          color: 'green'
        }
      })
    }
    }, 1000)
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  welcome: {
    color: 'green',
    fontSize: 50,
    textAlign: "center",
    marginTop: 100
  }
});
