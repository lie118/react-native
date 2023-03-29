import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const data = ['a', 'b', 'c'];

const FlexBoxFiled = () => {
  return (
    <View style={styled.container}>
      <Text>主轴方向column</Text>
      {data.map(item => (
        <Text key={item} style={styled.item}>
          {item}
        </Text>
      ))}
    </View>
  );
};

const styled = StyleSheet.create({
  container: {
    height: 100,
    margin: 10,
    display: 'flex',
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderStyle: 'dashed',
    textAlign: 'center',
  },
});

export default FlexBoxFiled;
