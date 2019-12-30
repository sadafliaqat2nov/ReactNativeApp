import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';
class Calendar extends Component {
    constructor(props) {
        super(props);
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

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                />
                <View style={{ flex: 1, alignItems: 'center'}}>
                    <Text style= {{margin:10,fontWeight:'bold',fontFamily: 'monospace', fontSize:20}}>Calendar</Text>
                    <CalendarPicker style={{alignItems: 'center', justifyContent: 'center'}}
                    onDateChange={this.onDateChange}
                    />
                <View>
            <Text>SELECTED DATE:{ startDate }</Text>
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
