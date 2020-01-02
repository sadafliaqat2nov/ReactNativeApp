import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';

class FunZone extends Component {

    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
      }

      componentDidMount () {
          this.animate()
        }
        animate () {
          this.animatedValue.setValue(0)
          Animated.timing(
            this.animatedValue,
            {
              toValue: 1,
              duration: 2000,
              easing: Easing.linear
            }
          ).start(() => this.animate())
        }

    render () {
            const marginLeft = this.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 300]
              })
              const opacity = this.animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1, 0]
              })
              const movingMargin = this.animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 300, 0]
              })
              const textSize = this.animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [18, 32, 18]
              })
              const rotateX = this.animatedValue.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ['0deg', '180deg', '0deg']
              })
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Animated.Text
                    style={{
                      fontWeight:'bold',fontFamily: 'monospace',
                      alignSelf: 'center',
                      fontSize: textSize,
                      marginTop: 5,
                      color: '#037699'}} >
                      Fun Zone
                    </Animated.Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default FunZone;