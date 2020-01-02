import React, { Component } from 'react';
import { Dimensions,Platform,Text,Item, View, TextInput, Button, Alert, StyleSheet, ScrollView, Picker, Animated, Easing } from 'react-native';
import { ImageBackground, TouchableHighlight, Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
// import { AppLoading, Font } from "expo-font";
import * as Font from 'expo-font';
const window_width = Dimensions.get('window').width;
//import all the components we are going to use.

class SignUp extends Component {
    //Navigation option to create menu in header

      constructor(props) {
            super(props);
            this.animatedValue = new Animated.Value(0);
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
         this.animate();
      await Font.loadAsync({
        'monospace': require('../assets/fonts/OpenSans-Bold.ttf'),
        // 'monospace': require('../assets/fonts/Eutemia.ttf'),
      });
      this.setState({isfontLoaded: true})
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
        fetch('https://77da6709.ngrok.io/api/v1/users', {    
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
              });
        const { navigate } = this.props.navigation;
        if (this.state.isfontLoaded){
          return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
            <View style={styles.header}>
            <Icon name='user-plus' type='font-awesome' size={110} color={'#fff'}/>
                    <Animated.Text
                    style={{
                      fontWeight:'bold',fontFamily: 'monospace',
                      alignSelf: 'center',
                      opacity,
                      fontSize: 36,
                      marginTop: 5,
                      color: '#fff'}} >
                      Sign Up
                    </Animated.Text>
            </View>
            <View style={styles.container1}>
            <View style={styles.SectionStyle}>
              <Icon name='user' type='font-awesome' size={30} color={'#037699'} style={{margin: 10, padding: 10, marginLeft: 20}}/>
              <TextInput
                style={{ flex: 1, marginLeft: 10 }}
                placeholder="Enter Your First Name"
                underlineColorAndroid="transparent"
                onChangeText={TextInputFname => this.setState({ TextInputFname })}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Icon name='user' type='font-awesome' size={30} color={'#037699'} style={{margin: 10, padding: 10, marginLeft: 20}}/>
              <TextInput
                style={{ flex: 1, marginLeft: 10 }}
                placeholder="Enter Your Last Name"
                underlineColorAndroid="transparent"
                onChangeText={TextInputLname => this.setState({ TextInputLname })}
              />
            </View>
            <View style={styles.SectionStyle}>
              <Icon name='envelope' type='font-awesome' size={30} color={'#037699'} style={{margin: 10, padding: 10, marginLeft: 20}}/>
              <TextInput
                style={{ flex: 1, marginLeft: 10 }}
                placeholder="Enter Your Email Here"
                underlineColorAndroid="transparent"
                onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
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
            {
                this.showDropdown()
            } 
            <TouchableOpacity style={styles.button} onPress={this.SignUp.bind(this)}>
            <Text style={styles.text}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#037699', textAlign: 'center', fontWeight: 'bold', fontFamily: 'monospace', margin: 25 }} onPress={() => this.props.navigation.push('SignIn')}>
                            Have already an account? SignIn</Text>
        </View>
        </View>
        </TouchableWithoutFeedback>
            )

        }else{
          return null
        }
    }
}
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    marginTop: -10,
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