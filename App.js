import 'react-native-gesture-handler';
import React from 'react';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { UserContextProvider } from './Application/Context/Users/UserContext';
import { StackNavigation } from './Application/Navigation/BottomNaviagation';
import { Screen } from './Application/Navigation/BottomNaviagation';
import Main from './Application/Main';

export default function App(props) {

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar
          backgroundColor={'#EA712D'}
        />
        <UserContextProvider>
           <Screen />
        </UserContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
