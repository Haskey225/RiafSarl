import { NativeBaseProvider, Box, Text, Flex, Center, StatusBar, VStack } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import Login from './Application/Screens/Auth/Login';
import BottomTabNavigator from './Application/Navigation/BottomNaviagation';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar backgroundColor={'#EA712D'} />
        <VStack flex={'1'}>
          <BottomTabNavigator />
        </VStack>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
