import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import { Header, Image, Button } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
        this.state = {
          images: [
            'https://wallpaperaccess.com/full/279563.jpg',
            'https://wallpaperaccess.com/full/279553.jpg',
            'https://wallpaperaccess.com/full/279832.jpg',
            'https://images.wallpaperscraft.com/image/cup_coffee_tea_120578_1366x768.jpg'
          ]
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
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                />
                    <Animated.Text
                    style={{
                      fontWeight:'bold',fontFamily: 'monospace',
                      alignSelf: 'center',
                      transform: [{rotateX}],
                      fontSize: 28,
                      marginTop: 5,
                      color: '#037699'}} >
                      Home Page
                    </Animated.Text>
                <SliderBox
                images={this.state.images}
                sliderBoxHeight={300}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                circleLoop
                dotStyle={{
                width: 20,
                height: 20,
                borderRadius: 20, 
                alignItems:'center',
                marginHorizontal: 2,
                padding: 0,
                margin: 0
                }}/>
                <Text style= {{margin:10, fontSize:22, fontWeight:'bold', alignItems: 'center', alignSelf:'center', justifyContent:'center'}}>Pluviophile</Text>
                <Text style={{flex: 1, margin:10, fontSize:16, alignItems: 'center', borderBottomColor: 'black', borderBottomWidth: 5 }}>
                Pluviophile is the person who loves the rain. 
                My real goal here is to show people that React is much more approachable than people 
                make it out to be. Hopefully it will make you realize it is a great way to build JavaScript 
                applications!Just kidding, it is fun, and I am going to show you how to do it. 
                This tutorial omits certain aspects of functionality for sake of article length, 
                but to make up for it, I have provided a Github repository with an advanced version of 
                what I am building here, as well as a working version that you can use via Heroku here. 
                The version I built on Github also uses Redux, 
                so I encourage you to study the code…you might learn something new!</Text>
                <TouchableOpacity style={styleshome.buttonContainer}>
                	<Text>Acknowledged</Text> 
              	</TouchableOpacity>
                  <TouchableOpacity style={styleshome.buttonContainer}>
                	<Text>Not Acknowledged</Text> 
              	</TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


const styleshome = StyleSheet.create({
	buttonContainer: {
	  //marginTop:10,
      height:40,
      alignSelf:'center',
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	  marginBottom:20,
	  width:200,
	  borderRadius:30,
	  backgroundColor: "#00BFFF",
	},
  });

export default Homepage;
