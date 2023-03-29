import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const StyleSheetFiled = () => {
  return (
    <View>
      {/* 不能带单位 */}
      <Text style={{fontSize: 20}}>StyleSheetFiled</Text>
      <Text style={[{color: 'red'}, {color: 'green'}]}>StyleSheetFiled</Text>
      <Text style={[styles.h1]}>StyleSheetFiled</Text>
      <Text style={[styles.h2]}>StyleSheetFiled</Text>
    </View>
  );
};

export default StyleSheetFiled;

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
