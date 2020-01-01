import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { Left, Right, Icon } from 'native-base';
import Calendar from 'react-native-whc-calendar';
// import {TextAnimationShake} from 'react-native-text-effects';
class Contact extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                />
            // <TextAnimationShake value={"Contact Page"} delay={100} duration={1000} style={{color: 'black', fontSize: 40}}/>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style= {{margin:10,fontWeight:'bold',fontFamily: 'monospace', fontSize:20}}>Contact Page</Text>
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

export default Contact;
