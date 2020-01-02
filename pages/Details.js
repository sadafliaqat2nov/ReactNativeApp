import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet, Animated, Easing  } from 'react-native';
import { ImageBackground, TouchableHighlight } from 'react-native';
import { Left, Right, Icon } from 'native-base';
// {this.props.navigation.state.params.rowData.id}
class Details extends Component {

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
  render() {
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
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Animated.Text
              style={{
                fontWeight:'bold',fontFamily: 'monospace',
                alignSelf: 'center',
                transform: [{rotateX}],
                fontSize: 28,
                marginTop: 5,
                color: '#037699'}} >
                Details Here!
          </Animated.Text>
        <Text style={styles.textdetails}>Id: {this.props.navigation.state.params.data.id}</Text>
        <Text style={styles.textdetails}>Name: {this.props.navigation.state.params.data.name} </Text>
        <Text style={styles.textdetails}>Price: {this.props.navigation.state.params.data.price} </Text>
        <Text style={styles.textdetails}>Preface: {this.props.navigation.state.params.data.preface} </Text>
        <Text style={styles.textdetails}>Description: {this.props.navigation.state.params.data.description} </Text>
        <Text style={styles.textdetails}>Created At: {this.props.navigation.state.params.data.created_at} </Text>
        <Text style={styles.textdetails}>Updated At: {this.props.navigation.state.params.data.updated_at} </Text>
        <Text style={styles.textdetails}>Slug:{this.props.navigation.state.params.data.slug}</Text>
        <Text style={styles.textdetails}>Book Status: {this.props.navigation.state.params.data.book_status} </Text> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1},
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 10, justifyContent: 'center', alignItems: 'center', alignSelf:"center", fontWeight:'bold',fontFamily: 'monospace', fontSize:20 },
  textdetails: { margin: 10, justifyContent: 'center', alignItems: 'center', alignSelf:"center", fontFamily: 'monospace', fontSize:15 },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});

export default Details;

