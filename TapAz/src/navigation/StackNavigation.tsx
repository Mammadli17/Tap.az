import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigation from './BottomNavigation';
import DetailScreen from '../screens/DetailScreen';
import Advertisement from '../components/Advertisement';
import MainScreen from '../screens/MainScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false,
            gestureDirection: 'horizontal', 
            cardStyleInterpolator: ({ current, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
              };
            },
          }}>
        
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} /> 
            <Stack.Screen name="MainScreen" component={MainScreen} />        
            <Stack.Screen name="DetailScreen" component={DetailScreen} />      
            <Stack.Screen name="Advertisement" component={Advertisement} />      
        </Stack.Navigator>
    )
}

export default StackNavigation;
