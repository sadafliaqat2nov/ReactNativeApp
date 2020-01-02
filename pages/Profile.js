//This is an example code for the Custom Header//
import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import { Icon } from 'native-base';
import { View, ImageBackground, StyleSheet,BackHandler, Text, Image, TouchableOpacity} from 'react-native';

//import all the components we are going to use.
 
export default class Profile extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
					
					<View>
                	<Header style={{height: 10}}
					leftComponent= {<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
					}
                	/>
					<View style={styles.container}>
          			<View style={styles.header}></View>
          			<Image style={styles.avatar} source={require('../images/avatar.jpg')}/>
          			<View style={styles.body}>
            		<View style={styles.bodyContent}>
              		<Text style={styles.name}>{this.props.navigation.state.params.Username}</Text>
              		<Text style={styles.info}>React Native Developer</Text>
              		<Text style={styles.description}>I'm Web developer. I can develop Websites / Mobile Apps using React Native, Vuejs/Nuxtjs.</Text>  
              		<TouchableOpacity style={styles.buttonContainer}>
                	<Text style={{color:'#fff', fontWeight: 'bold', fontFamily: 'monospace'}}>Details</Text>  
              		</TouchableOpacity>              
              		<TouchableOpacity style={styles.buttonContainer}>
                	<Text style={{color:'#fff', fontWeight: 'bold', fontFamily: 'monospace'}}>Personal Information</Text> 
              		</TouchableOpacity>
            		</View>
        			</View>
      				</View>
					</View>
				)
    }
}

const styles = StyleSheet.create({
	header:{
	  backgroundColor: "#037699",
	  height:200,
	},
	avatar: {
	  width: 130,
	  height: 130,
	  borderRadius: 63,
	  borderWidth: 4,
	  borderColor: "white",
	  marginBottom:10,
	  alignSelf:'center',
	  position: 'absolute',
	  marginTop:130
	},
	// name:{
	//   fontSize:22,
	//   color:"#FFFFFF",
	//   fontWeight:'600',
	// },
	body:{
	  marginTop:40,
	},
	bodyContent: {
	  flex: 1,
	  alignItems: 'center',
	  padding:30,
	},
	name:{
	  fontSize:28,
	  color: "#696969",
	  fontWeight: "bold",
	  fontFamily: 'monospace'
	},
	info:{
	  fontSize:18,
	  color: "#00BFFF",
	  marginTop:10,
	  fontWeight: 'bold'
	},
	description: {
	  fontSize:18,
	  color: "#037699",
	  marginTop:10,
	  textAlign: 'center'
	},
	buttonContainer: {
	  marginTop:30,
	  height:45,
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginBottom:20,
	  width:200,
	  borderRadius:30,
	  backgroundColor: "#037699",
	},
  });