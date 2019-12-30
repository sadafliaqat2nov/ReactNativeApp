import {createStackNavigator} from 'react-navigation-stack';
import { Header } from 'react-native-elements';
import React, { Component } from 'react';
import { Text, View,Linking, SafeAreaView, ScrollView, Dimensions, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import { Icon } from 'native-base';
import CurrentAffairs from '../pages/CurrentAffairs';
import FunZone from '../pages/FunZone';

const TabScreen = createMaterialTopTabNavigator(
    {
      CurrentAffairs: { screen: CurrentAffairs },
      FunZone: { screen: FunZone },
    },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#2d93e0',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
      },
    }
  );

export default TabScreen;

//making a StackNavigator to export as default
// const App = createStackNavigator({
//   TabScreen: {
//     screen: TabScreen,
//     // navigationOptions: {
//     // //   headerStyle: {
//     // //     backgroundColor: '#2d93e0',
//     // //   },
//     // //   headerTintColor: '#FFFFFF',
//     // //   title: 'News',
//     // drawerIcon: ({ tintColor }) => (
//     //     <Icon name="list" style={{ fontSize: 24, color: tintColor }} />
//     // )
//     // },
//   },
// }
// );


