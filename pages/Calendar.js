import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
        this.state = {
          selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
      }
     
      onDateChange(date) {
        this.setState({
          selectedStartDate: date,
        });
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
              });
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                />
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <Animated.Text
                    style={{
                      fontWeight:'bold',fontFamily: 'monospace',
                      alignSelf: 'center',
                      fontSize: 28,
                      transform: [{rotateX}],
                      marginTop: 5,
                      color: '#037699'}} >
                      Calendar
                    </Animated.Text>
                <View>
            <View style={{ flex: 1, alignItems: 'center'}}>
                <CalendarPicker style={{alignItems: 'center', justifyContent: 'center'}}
                    onDateChange={this.onDateChange}
                    />
                <Text>SELECTED DATE:{ startDate }</Text>
            </View>
            </View>
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

export default Calendar;
