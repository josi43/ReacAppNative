import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UserContextProvider from './src/contexts/UserContext'
import Login from './src/screens/Initial/Login/index'
import Splash from './src/screens/Initial/Splash/Splash';
import Cadastrar from './src/screens/Initial/Cadastrar/index';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="splash" screenOptions={{ headerShown: false }}   
        >
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="splash" component={Splash} />
          <Stack.Screen name="cadastrar" component={Cadastrar} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;