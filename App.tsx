/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView} from 'react-native';
import AlertAndButton from './src/AlertAndButton';
import DimensionsTest from './src/DimensionsTest';
import FlexBoxFiled from './src/FlexBox';
import StyleSheetFiled from './src/StyleSheet';

function App(): JSX.Element {
  return (
    <ScrollView>
      <StyleSheetFiled />
      <FlexBoxFiled />
      <DimensionsTest />
      <AlertAndButton />
    </ScrollView>
  );
}

export default App;
