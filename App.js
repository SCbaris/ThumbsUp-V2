
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appearance, useColorScheme, AppearanceProvider } from 'react-native-appearance';
import auth from '@react-native-firebase/auth';
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

import SignupLogin from "./App/SignupLogin/SignupLogin"

//User Part---------

//import UserSettings from "./App/UserSettings/UserSettings"
import UserSignupCompletion from "./App/UserSignupCompletion/UserSignupCompletion"
import UserHome from "./App/UserHome/UserHome"
import UserThankYou from "./App/UserThankYou/UserThankYou"


//Company Part---------
import CompanySignupCompletion from "./App/CompanySignupCompletion/CompanySignupCompletion"
import CardInformation from "./App/CardInformation/CardInformation"
import CompanyHome from "./App/CompanyHome/CompanyHome.js"

//Compary Sharing---------
import TemplateSelection from "./App/TemplateSelection/TemplateSelection"
import ImageUplaod from "./App/ImageUplaod/ImageUplaod"
import SendPost from "./App/SendPost/SendPost"

//Compary And User---------
import CreationPreview from "./App/CreationPreview/CreationPreview"

const Stack = createStackNavigator();

App = () => {



  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    console.log(user)
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;



  //Navigation Part
  createHomeStack = () =>
  <Stack.Navigator    
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen 
      name="SignupLogin" 
      component={SignupLogin} 
    />
    <Stack.Screen 
      name="CompanySignupCompletion" 
      component={CompanySignupCompletion} 
    />
    <Stack.Screen 
      name="UserSignupCompletion" 
      component={UserSignupCompletion} 
    />
    <Stack.Screen 
      name="CardInformation" 
      component={CardInformation} 
    />
    <Stack.Screen 
      name="CompanyHome" 
      component={CompanyHome} 
    />
    <Stack.Screen 
      name="UserHome" 
      component={UserHome} 
    />
    <Stack.Screen 
      name="TemplateSelection" 
      component={TemplateSelection} 
    />
    <Stack.Screen 
      name="ImageUplaod" 
      component={ImageUplaod} 
    />
    <Stack.Screen 
      name="SendPost" 
      component={SendPost} 
    />
    <Stack.Screen 
      name="CreationPreview" 
      component={CreationPreview} 
    />
    <Stack.Screen 
      name="UserThankYou" 
      component={UserThankYou} 
    />


  </Stack.Navigator>

return (
  <AppearanceProvider>
    <NavigationContainer>
      {this.createHomeStack()}
    </NavigationContainer>
  </AppearanceProvider>
);
}


export default App;












/*const PushRouteOne = createStackNavigator({
  SignupLogin: {
    screen: SignupLogin,
  },
},  {
	initialRouteName: "SignupLogin",
})


const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

export default createAppContainer(RootNavigator);*/






/*import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;*/
