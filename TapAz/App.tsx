import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigation />
      </Provider>
    </NavigationContainer>
  )
}

export default App;
