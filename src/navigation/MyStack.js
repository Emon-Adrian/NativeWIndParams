import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import New from "../screens/New"
import Step1 from '../screens/stepForm/Step1';
import Step2 from '../screens/stepForm/Step2';
import Step3 from '../screens/stepForm/Step3';
import Step4 from '../screens/stepForm/Step4';
import Result from '../screens/stepForm/Result';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="New" component={New}/>
        <Stack.Screen name="Step1" component={Step1}/>
        <Stack.Screen name="Step2" component={Step2}/>
        <Stack.Screen name="Step3" component={Step3}/>
        <Stack.Screen name="Step4" component={Step4}/>
        <Stack.Screen name="Result" component={Result}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;