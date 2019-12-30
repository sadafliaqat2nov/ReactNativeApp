import React, { Component } from 'react';
import { Dimensions,Platform,Text,Item, View, TextInput, Button, Alert, StyleSheet, ScrollView, Picker } from 'react-native';
import { ImageBackground, TouchableHighlight } from 'react-native';
// import Icon from "react-native-vector-icons/Ionicons";
import { Icon } from 'react-native-elements'
//fimport { Picker } from 'native-base'

import * as Font from 'expo-font';
// import { AppLoading, Font } from "expo-font";
const window_width = Dimensions.get('window').width;
//import all the components we are going to use.

class SignUp extends Component {
    //Navigation option to create menu in header

      constructor(props) {
            super(props);
            this.state = {
                TextInputFname: '',
                TextInputLname: '',
                TextInputEmail: '',
                TextInputPassword: '',
                TextInputStatus: '',
                TextInputRole: '',
                isfontLoaded: false
            };
          }
    async componentDidMount() {
      await Font.loadAsync({
        'monospace': require('../assets/fonts/OpenSans-Bold.ttf'),
        // 'monospace': require('../assets/fonts/Eutemia.ttf'),
      });
      this.setState({isfontLoaded: true})
    }

    showDropdown = () =>{
        if (Platform.OS === 'ios'){
            return (
                <View>
                    <Text style={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', marginTop: 15, fontFamily: 'monospace' }}>Select Status</Text>
                    <Picker
                        style={{justifyContent: 'center'}}
                        selectedValue={(this.state && this.state.TextInputStatus) || 'pending'}
                        onValueChange={(value) => {this.setState({TextInputStatus: value}); }}
                        mode='dialog'
                        >
                        <Picker.Item label="Pending" value="pending" />
                        <Picker.Item label="Confirmed" value="confirmed" />
                    </Picker>
                    <Text style={{ fontSize: 16, textAlign: 'left', fontWeight: 'bold', marginTop: 15, fontFamily: 'monospace' }}>Select Role</Text>
                    <Picker
                        style={{justifyContent: 'center'}}
                        selectedValue={(this.state && this.state.TextInputRole) || 'admin_user'}
                        onValueChange={(value) => {this.setState({TextInputRole: value}); }}
                        mode='dialog'
                        >
                        <Picker.Item label="Admin" value="admin_user" />
                        <Picker.Item label="Author" value="author" />
                        <Picker.Item label="Reader" value="reader" />
                    </Picker>
                </View>
            );
        }else{
            return(
                <View>
                    <Picker 
                        style={[styles.Input2,{fontFamily: 'monospace'}]}
                        selectedValue={(this.state && this.state.TextInputStatus) || 'pending'}
                        onValueChange={(value) => {this.setState({TextInputStatus: value}); }}>
                        <Picker.Item label={'Pending'} value={'pending'} />
                        <Picker.Item label={'Confirmed'} value={'confirmed'} />
                    </Picker>
                    <Picker 
                        style={[styles.Input2,{fontFamily: 'monospace'}]}
                        selectedValue={(this.state && this.state.TextInputRole) || 'admin_user'}
                        onValueChange={(value) => {this.setState({TextInputRole: value}); }}>
                        <Picker.Item label={'Admin'} value={'admin_user'} />
                        <Picker.Item label={'Author'} value={'author'} />
                        <Picker.Item label={'Reader'} value={'reader'} />
                    </Picker>
                </View>
            ) 
        }
    }
    
    SignUp() {
        //Handler for the Submit onPress
        fetch('https://ec71365d.ngrok.io/api/v1/users', {    
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: this.state.TextInputFname,
                last_name: this.state.TextInputLname,
                email: this.state.TextInputEmail,
                password: this.state.TextInputPassword,
                status: this.state.TextInputStatus,
                role: this.state.TextInputRole,
                utoken: 'sadaf', 
            })   
        })

    .then((response) => {
          if(response.status == 200){
                debugger
                this.props.navigation.navigate('SignIn');
                alert('User is created');  
                //console.log(response);
            }
            else {
                alert('Please Enter Valid Information');
                //console.log(error);
            }
        })
        .catch((error) => { 
            //console.log(error); 
    })  
    }    
    
    static navigationOptions = {
        drawerIcon: ({ tintColor }) => (
            <Icon name="md-person-add" style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() { 
        const { navigate } = this.props.navigation;
        if (this.state.isfontLoaded){
          return (
                <ImageBackground source={require('../images/image1.png')} style={{ width: '100%', height: '100%' }} >
                        <ScrollView>
                    <View style={{ padding: 10, flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 25, textAlign: 'center', marginBottom: 30, marginTop: 100, fontFamily: 'monospace' }}>Sign Up</Text>
                        <Text>
                        </Text>
                        <TextInput
                            style={styles.Input}
                            placeholder=" Enter First Name..." 
                            ref="Fname"
                            onChangeText={TextInputFname => this.setState({ TextInputFname })}
                        />
                        <TextInput
                            style={styles.Input}
                            placeholder="Enter Last Name..." 
                            ref="Sname"
                            onChangeText={TextInputLname => this.setState({ TextInputLname })}
                        />
                        <TextInput
                            style={styles.Input}
                            placeholder="Enter Your Email..."
                            ref="email"
                            onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
                        />
                        <TextInput
                            style={styles.Input}
                            placeholder="Enter Unique Password..."
                            ref="email" 
                            secureTextEntry={true}
                            onChangeText={TextInputPassword => this.setState({ TextInputPassword })}
                        />
                        {
                            this.showDropdown()
                        } 
                        <TouchableHighlight style={styles.btnSignUp}>
                            <Button
                                style={{ fontFamily: 'monospace' }}
                                title="Sign Up"
                                onPress={this.SignUp.bind(this)}
                            />
                        </TouchableHighlight>
                        <Text style={{ fontSize: 15, color: 'blue', textAlign: 'center', fontWeight: 'bold', marginBottom: 100, fontFamily: 'monospace' }} onPress={() => this.props.navigation.push('SignIn')}>
                            Have already an account? SignIn</Text>
                    </View>
                    </ScrollView>
                </ImageBackground>
            )

        }else{
          return null
        }
    }
}
export default SignUp;

const styles = StyleSheet.create({
    Input: { 
        height: 40, 
        borderColor: 'gray', 
        margin: 2, 
        borderWidth: 1, 
        fontSize: 18, 
        textAlign: 'center', 
        fontWeight: 'bold',  
    },
    Input2:{
        height: 50,
        width: 400,
        borderColor: 'gray', 
        margin: 5, 
        borderWidth: 1, 
        fontSize: 20, 
        textAlign: 'center', 
        fontWeight: 'bold', 
    },
    btnSignUp:{
        height: 50,
        width: 100,
        borderRadius: 10,
        margin: 20,
        alignSelf: 'center',
    }
});


//       CheckTextInput() {
    //     
    //         //Handler for the Submit onPress
    //          if (this.state.TextInputUsername == '') {
    //           //Check for the Username TextInput
    //           alert('Please Enter Username');
    //         } 
    //           //Check for the Name TextInput
    //          else if (this.state.TextInputEmail == '') {
    //             //Check for the Email TextInput
    //             alert('Please Enter Email');
    //           } 
    //          else if (this.state.TextInputPassword == '') {
    //             //Check for the Password TextInput
    //             alert('Please Enter Password');
    //           } 
    //          else if (this.state.TextInputCPassword == '') {
    //             //Check for the Confirm Password TextInput
    //             alert('Please Enter Confirm Password');
    //           } 
    //           else {     
    //              alert('Account has been created.');
    //              this.props.navigation.navigate('SignIn');
    //           }
    //       };