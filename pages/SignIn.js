import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert, TouchableOpacity, Animated, Easing } from 'react-native';
import { ImageBackground, TouchableHighlight, StyleSheet,Image,ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Icon } from 'react-native-elements'
import { Header } from 'react-navigation-stack';

export default class SignIn extends Component {

      constructor(props) {
                super(props);
                this.animatedValue = new Animated.Value(0);
                this.state = {
                  TextInputUsername: '',
                  TextInputPassword: '',
                };
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
            SignIn() {
                    //Handler for the Submit onPress
                    fetch('https://77da6709.ngrok.io/api/v1/users/sign_in', {    
                        method: 'POST',
                        headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'jPcgygrkuw9REJYBXe8b'
                        },
                        body: JSON.stringify({
                            email: this.state.TextInputUsername,
                            password: this.state.TextInputPassword,
                        })
                        
                    })
                .then((response) => {
                     if(response.status == 200){
                            alert('You are Successfully SignIn');
                            this.props.navigation.navigate('Profile', {
                                Username: this.state.TextInputUsername
                            });  
                            // console.log(response);
                        }
                        else {
                            alert('Please Enter Valid Credentials');
                            //console.log(error);
                        }
                    })
                    .catch((error) => { 
                        //console.log(error); 
                })  
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
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='user-circle' type='font-awesome' size={120} color={'#fff'}/>
                <Animated.Text
                    style={{
                      fontWeight:'bold',fontFamily: 'monospace',
                      alignSelf: 'center',
                      opacity,
                      fontSize: 36,
                      marginTop: 5,
                      color: '#fff'}} >
                      Sign In
                    </Animated.Text>
            </View>
            <View style={styles.container1}>
            <View style={styles.SectionStyle}>
              <Icon name='envelope' type='font-awesome' size={30} color={'#037699'} style={{margin: 10, padding: 10, marginLeft: 20}}/>
              <TextInput
                style={{ flex: 1, marginLeft: 10 }}
                placeholder="Enter Your Email Here"
                underlineColorAndroid="transparent"
                onChangeText={TextInputUsername => this.setState({ TextInputUsername })}
              />
            </View>
             <View style={styles.SectionStyle}>
              <Icon name='lock' type='font-awesome' size={38} color={'#037699'} style={{margin: 10, padding: 10, marginLeft: 20}}/>
              <TextInput
                style={{ flex: 1, marginLeft: 10 }}
                placeholder="Enter Your Password"
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={this.SignIn.bind(this)}>
            <Text style={styles.text}>Sign In</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#037699', textAlign: 'center', margin: 25, fontWeight: 'bold', fontFamily: 'monospace' }} 
            onPress={() => this.props.navigation.push('SignUp')}>Create New Account! SignUp</Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    marginTop: -150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
      backgroundColor: "#037699",
      height: 350,
      width: 500,
      justifyContent: 'center',
      alignItems: 'center',
    },

  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },

  button: {
        display: 'flex',
        height: 40,
        width: 80,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#037699',
        shadowColor: '#2AC062',
        shadowOpacity: 0.7,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
        marginTop: 10,
    },

    text: {
        fontSize: 14,
        textTransform: 'uppercase',
        color: '#fff',
    },
});










        //       CheckTextInput() {
        //         //Handler for the Submit onPress
        //          if (this.state.TextInputUsername == '') {
        //           //Check for the Username TextInput
        //           alert('Please Enter Username');
        //         } 
        //          else if (this.state.TextInputPassword == '') {
        //             //Check for the Password TextInput
        //             alert('Please Enter Password');
        //           }
        //           else {     
        //              alert('You are Successfully SignIn');
        //              this.props.navigation.navigate('Profile', {
        //                 Username: this.state.TextInputUsername
        //             });          
        //           }
        //       };

       // .then((response) => {
                //     this.props.navigation.navigate('Profile', {
                //         Username: this.state.TextInputUsername
                //     });  
                //     console.log(response);
                //   })
                // .catch((error) => {
                //     alert('Please Enter Valid Credentials');
                //     console.log(error);
                // });

                    // axios.post('http://d671e051.ngrok.io/api/v1/users/sign_in', {
                    //     email: this.state.TextInputUsername,
                    //     password: this.state.TextInputPassword,
                    //     header:{
                    //         //Authorization: '4X4WqfmCkWEcYpRqr8Ew'
                    //         'Authorization': 'jPcgygrkuw9REJYBXe8b'
                    //     }
                    // })
                    // .then((response) =>{
                    //     this.props.navigation.navigate('Profile', {
                    //         Username: this.state.TextInputUsername
                    //     });  
                    //     console.log(response);
                    // })
                    // .catch((error) => {
                    //     alert('Please Enter Valid Credentials');
                    //     console.log(error);
                    // });