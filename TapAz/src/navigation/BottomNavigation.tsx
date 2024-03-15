import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/MainScreen';
import SelectedScreen from '../screens/SelectedScreen';
import AddPostScreen from '../screens/AddPostScreen';
import ChatScreen from '../screens/ChatScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import Home from '../assets/icons/Home';
import Heart from '../assets/icons/Hearth';
import Add from '../assets/icons/Add';
import Chat from '../assets/icons/Chat';
import Profile from '../assets/icons/Profile';
import { Dimensions, Text } from 'react-native';

const { height,width } = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: height * 0.07,
          backgroundColor: 'white',
          paddingBottom: height * 0.02
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconComponent;
          let labelText;

          if (route.name === 'MainScreen') {
            iconComponent = <Home fill={focused ? 'rgb(255, 98, 0)' : "rgb(180, 180, 180)"} />;
            labelText = 'ƏSAS';
          } else if (route.name === 'SelectedScreen') {
            iconComponent = <Heart fill={focused ? 'rgb(255, 98, 0)' : "rgb(180, 180, 180)"} />;
            labelText = 'SEÇİLMİŞLƏR';
          } else if (route.name === 'AddPostScreen') {
            iconComponent = <Add fill={focused ? 'rgb(255, 98, 0)' : "rgb(180, 180, 180)"}   style={{ marginBottom: height*0.03 }} />;
            labelText = 'YENİ ELAN'; 
          } else if (route.name === 'ChatScreen') {
            iconComponent = <Chat fill={focused ? 'rgb(255, 98, 0)' : "rgb(180, 180, 180)"} />;
            labelText = 'MESAJLAR';
          } else if (route.name === 'MyProfileScreen') {
            iconComponent = <Profile fill={focused ? 'rgb(255, 98, 0)' : "rgb(180, 180, 180)"} />;
            labelText = 'KABİNET';
          }

          return (
            <>
              {iconComponent}
              <Text style={{ color: focused ? 'rgb(255, 98, 0)' : 'rgb(180, 180, 180)',fontSize: width*0.025,top:height*0.044,position:"absolute" }}>{labelText}</Text>
            </>
          );
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="MainScreen" component={MainScreen} />
      <Tab.Screen name="SelectedScreen" component={SelectedScreen} />
      <Tab.Screen name="AddPostScreen" component={AddPostScreen} />
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
