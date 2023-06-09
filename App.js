/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/screens/Home';
import New from './src/screens/New';
import { Button } from 'react-native-elements';
import Mystack from './src/navigation/MyStack'
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Mystack />
      </PaperProvider>
    </Provider>
  );
};



export default App;
