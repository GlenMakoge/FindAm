import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Button, SafeAreaView } from 'react-native';
import { Home, SeeMore, Upload, Profile,} from './screens/Index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import More from './pages/More';
import Claim from './pages/Claim';
import Payment from './pages/Payment';
import Chat from './pages/Chat';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import Onboarding1 from './OnboardingScreens/Onboarding1';
import Onboarding2 from './OnboardingScreens/Onboarding2';
import Onboarding3 from './OnboardingScreens/Onboarding3';
import Onboarding4 from './OnboardingScreens/Onboarding4';
import SignUp from './OnboardingScreens/SignUp';
import Login from './OnboardingScreens/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const OnboardingStack = createStackNavigator();

const OnboardingNavigator = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
      <OnboardingStack.Screen name="Onboarding1" component={Onboarding1} />
      <OnboardingStack.Screen name="Onboarding2" component={Onboarding2} />
      <OnboardingStack.Screen name="Onboarding3" component={Onboarding3} />
      <OnboardingStack.Screen name="Onboarding4" component={Onboarding4} />
      <OnboardingStack.Screen name="SignUp" component={SignUp} />
      <OnboardingStack.Screen name="Login" component={Login} />
    </OnboardingStack.Navigator>
  );
};

const screenOptions = {
  tabBarShowLabel: false,  // hides tabBarName
  headerShown: false, // hides header Name
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 0,
    height: 60,
    background: "#fff",
  }
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <Entypo name="home" size={24} color={focused ? "#FFC600" : "#001D4A"} />
                <Text style={{fontSize: 12, color: "#001D4A"}}>Home</Text>
              </View>
            )         
          }
        }} 
      />
      <Tab.Screen name='SeeMore' component={SeeMore}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <FontAwesome5 name="boxes" size={24} color={focused ? "#FFC600" : "#001D4A"}  />
                <Text style={{fontSize: 12, color: "#001D4A"}}>More</Text>
              </View>
            )         
          }
        }}
      />
      <Tab.Screen name='Upload' component={Upload}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <MaterialIcons name="add-circle" size={24} color={focused ? "#FFC600" : "#001D4A"}  />
                <Text style={{fontSize: 12, color: "#001D4A"}}>Upload</Text>
              </View>
            )         
          }
        }}
      />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarIcon: ({focused})=>{
            return (
              <View style={{alignItems: "center", justifyContent: "center"}}>
                <Octicons name="feed-person" size={24} color={focused ? "#FFC600" : "#001D4A"}  />
                <Text style={{fontSize: 12, color: "#001D4A"}}>Profile</Text>
              </View>
            )         
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {

  const [isOnboardingComplete, setIsOnboardingComplete] = useState(false);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const storedOnboardingStatus = await AsyncStorage.getItem('isOnboardingComplete');
        setIsOnboardingComplete(storedOnboardingStatus === 'true');
      } catch (error) {
        console.error('Error checking onboarding status:', error);
      }
    };
    checkOnboardingStatus();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen
          name="Onboarding"
          component={OnboardingNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="TabNavigation"
          component={TabNavigator}
          options={{ headerShown: false,
            tabBarStyle: { display: 'none' },
           }}
        />
        <Stack.Screen 
        name="More" 
        component={More}
        //options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Claim" 
        component={Claim}
        //options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Payment" 
        component={Payment}
        //options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="Chat" 
        component={Chat}
        //options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const ItemDetails = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Item Details Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });