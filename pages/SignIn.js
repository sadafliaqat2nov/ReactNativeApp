import React, { Component } from 'react';
import { Text, View, TextInput, Button, Alert } from 'react-native';
import { ImageBackground, TouchableHighlight } from 'react-native';
import { Left, Right, Icon } from 'native-base';
import { Header } from 'react-navigation-stack';

export default class SignIn extends Component {

      constructor(props) {
                super(props);
                this.state = {
                  TextInputUsername: '',
                  TextInputPassword: '',
                };
              }
            SignIn() {
                    //Handler for the Submit onPress
                    fetch('https://cbff3230.ngrok.io/api/v1/users/sign_in', {    
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
        static navigationOptions = {
            drawerIcon: ({ tintColor }) => (
                <Icon name="ios-log-in" style={{ fontSize: 24, color: tintColor }} />
            )
        }
    render() {
        return (
            <ImageBackground source={require('../images/image1.png')} style={{ width: '100%', height: '100%' }} >
            <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold', marginBottom: 30, fontFamily: 'monospace' }}>Sign In</Text>
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', margin: 5, borderWidth: 1, fontSize: 20, textAlign: 'center', fontWeight: 'bold', fontFamily: 'monospace' }}
                        placeholder="Enter Username..." 
                        onChangeText={TextInputUsername => this.setState({ TextInputUsername })}
                    />
                    <TextInput
                        style={{ height: 40, borderColor: 'gray', margin: 5, borderWidth: 1, fontSize: 20, textAlign: 'center', fontWeight: 'bold', fontFamily: 'monospace' }}
                        placeholder="Enter Password..."
                        onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
                    />
                    <TouchableHighlight
                        style={{
                            height: 50,
                            width: 100,
                            borderRadius: 10,
                            margin: 20,
                            alignSelf: 'center',
                        }}>
                        <Button
                            style={{ fontFamily: 'monospace' }}
                            title="Sign In"
                            onPress={this.SignIn.bind(this)}
                        />
                    </TouchableHighlight>
                    <Text style={{ fontSize: 15, color: 'blue', textAlign: 'center', fontWeight: 'bold', marginBottom: 30, fontFamily: 'monospace' }} onPress={() => this.props.navigation.navigate('SignUp')}>Create New Account! SignUp</Text>
            </View>
            </ImageBackground>
        )
    }
}













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