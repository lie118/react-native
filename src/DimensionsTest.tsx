import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const data = ['扫一扫', '付款码', '卡包', '出行'];

const DimensionsTest = () => {
  // 样式无继承
  return (
    <View style={styles.container}>
      {data.map(item => (
        <View style={styles.itemBase} key={item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default DimensionsTest;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    height: 90,
    width: Dimensions.get('window').width / 3,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  text: {
    fontSize: 30,
  },
});
