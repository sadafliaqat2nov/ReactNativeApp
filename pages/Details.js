import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { ImageBackground, TouchableHighlight } from 'react-native';
import { Left, Right, Icon } from 'native-base';
// {this.props.navigation.state.params.rowData.id}
class Details extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>Details</Text>
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

