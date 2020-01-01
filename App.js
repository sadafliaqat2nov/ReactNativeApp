import { createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import { ScrollView,Text, View,Linking, SafeAreaView, TouchableWithoutFeedback, Button, Dimensions, Image, TouchableHighlight } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from "react-native-vector-icons/Ionicons";
import { Icon } from 'react-native-elements'
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Homepage from './pages/Homepage';
import Calendar from './pages/Calendar';
import Contact from './pages/Contact';
import News from './pages/News';
import CurrentAffairs from './pages/CurrentAffairs';
import FunZone from './pages/FunZone';
import Books from './pages/Books';
import Details from './pages/Details';
import SplashScreen from './pages/SplashScreen';

const { width } = Dimensions.get("window");

const CustomDrawerNavigation = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 250, backgroundColor: '#0B8BB2', opacity: 0.9 }}>
      {/* <Icon name="ios-arrow-back" style={{ fontSize: 30, textAlign: 'right', marginRight: 15, opacity: 0.6 }} /> */}
        <View style={{ height: 250, backgroundColor: 'Green', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./images/avatar.jpg')} style={{ height: 170, width: 170, borderRadius: 60 }} />
        </View>
      </View>
      <View style={{ height: 50, backgroundColor: '#037699', opacity: 0.9 }}>
        <View style={{ height: 50, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold', fontFamily: 'monospace'}}>Test App</Text>
        </View>
      </View> 
      <ScrollView>
      <DrawerItems {...props} />
      
      <View style={{ alignItems: "center", marginTop: 120}}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginRight: 20 }}>
            <Icon name="globe" type='font-awesome' size={26} color={'#037699'} onPress={() => Linking.openURL('http://google.com')}/>
          </View>
          <View style={{ flexDirection: 'column', marginRight: 15 }}>
            <Icon name="facebook" type="font-awesome" size={26} color={'#037699'} onPress={() => Linking.openURL('http://facebook.com')}/>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Icon name='twitter' type='font-awesome' size={26} color={'#037699'} onPress={() => Linking.openURL('http://twitter.com')}/>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Pages = createStackNavigator ({
    SignUp: {screen: SignUp},
    SignIn: {screen: SignIn},
    Profile: {screen: Profile},
    Homepage: {screen: Homepage},
    Calendar: {screen: Calendar},
    Contact: {screen: Contact},
    News: {screen: News},
    CurrentAffairs: {screen: CurrentAffairs},
    FunZone: {screen: FunZone},
    Books: {screen: Books},
    Details: {screen: Details},
    SplashScreen: {screen: SplashScreen}
  },
  {
    headerMode: 'none',
    initialRouteParams: 'SignUp',
  },
  );

  const Drawer = createDrawerNavigator(
  { 
  Pages: {
    screen: Pages,
    navigationOptions: {
      title: 'Close Drawer',
      drawerIcon: () => (
    <Icon name="angle-left" type='font-awesome' size={24} color={'#1671B0'} />
    )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: 'Profile',
      drawerIcon: () => (
        <Icon name="user" type='font-awesome' size={24} color={'#037699'} />
    )
    }
  },

  Homepage: {
    screen: Homepage,
    navigationOptions: {
      title: 'Homepage',
      drawerIcon: () => (
        <Icon name="home" size={24} color={'#037699'} />
    )
    }
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      title: 'Calendar',
      drawerIcon: () => (
        <Icon name="calendar" type='font-awesome' size={24} color={'#037699'} />
    )
    }
  },
  Contact: {
    screen: Contact,
    navigationOptions: {
      title: 'Contact',
      drawerIcon: () => (
        <Icon name="group" type='font-awesome' size={24} color={'#037699'} />
    )
    }
  },
  Books: {
    screen: Books,
    navigationOptions: {
      title: 'Books',
      drawerIcon: () => (
        <Icon name="book" type='font-awesome' size={24} color={'#037699'} />
    )
    }
  },
  News: {
    screen: News,
    navigationOptions: {
      title: 'News',
      drawerIcon: () => (
        <Icon name="list" type='font-awesome' size={24} color={'#037699'} />
      )
    }
  },
  // SignOut: {
  //   screen: SignUp,
  //   navigationOptions: {
  //     title: 'SignOut',
  //     drawerIcon: () => (
  //       <Icon name="sign-out" type='font-awesome' size={24} color={'#037699'} />
  //     )
  //   }
  // }
},
  {
    drawerPosition: 'left', 
    contentComponent: CustomDrawerNavigation,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    // initialRouteName: 'Pages',
    drawerWidth: (width / 3) * 2
  });

  const App = createAppContainer(Drawer);
  export default App;