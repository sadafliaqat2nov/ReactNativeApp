import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements'

class SplashScreen extends Component {

  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('App');
    }
  }

  render () {
      return (
        <View style={styles.viewStyles}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name='cube' type='font-awesome' size={220} color={'#037699'}/>
            <Text style={styles.textStyles}>
               Hey, Welcome!
            </Text>
            </View>
        </View>
      );
  }
}

const styles = {
    viewStyles: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    textStyles: {
      color: '#037699',
      fontSize: 38,
      fontWeight: 'bold',
      fontWeight:'bold', fontFamily: 'monospace',
      padding: 20, margin: 20
    }
  }

export default SplashScreen;
