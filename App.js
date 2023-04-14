import 'react-native-gesture-handler';
import { NativeBaseProvider, StatusBar, VStack } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Application/Screens/Auth/Login';
import MerchantHome from './Application/Screens/MerchantHome';
// import { BottomTabNavigator } from './Application/Navigation/BottomNaviagation';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StatusBar
          backgroundColor={'#EA712D'}
        />
        <VStack flex={'1'} alignContent={'center'}>
          <MerchantHome />
        </VStack>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
