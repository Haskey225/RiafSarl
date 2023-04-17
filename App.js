import 'react-native-gesture-handler';
import { NativeBaseProvider, StatusBar, VStack } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Application/Screens/Auth/Login';
import { BottomTabNavigator, StackNavigation } from './Application/Navigation/BottomNaviagation';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar
          backgroundColor={'#EA712D'}
        />
        <VStack flex={'1'} alignContent={'center'} p='0' m={0}>
          <StackNavigation />
        </VStack>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
