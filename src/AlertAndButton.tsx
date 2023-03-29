import React, {useCallback} from 'react';
import {Alert, Button, Dimensions, StyleSheet, View} from 'react-native';

const AlertAndButton = () => {
  const handlePressTwoButtons = useCallback(() => {
    Alert.alert('我是title哦', '我是内容啊', [
      {
        text: '取消',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      {
        text: '确定',
        onPress: () => console.log('ok'),
        style: 'default',
      },
    ]);
  }, []);

  const handlePressThreeButtons = useCallback(() => {
    Alert.alert('我是title哦', '我有两个按钮哦', [
      {
        text: '要',
        onPress: () => console.log('这是要按钮'),
      },
      {
        text: '取消',
        onPress: () => console.log('cancel'),
        style: 'cancel',
      },
      {
        text: '确定',
        onPress: () => console.log('ok'),
        style: 'default',
      },
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="两个按钮" onPress={handlePressTwoButtons} />

      <Button title="三个按钮" color="red" onPress={handlePressThreeButtons} />
    </View>
  );
};

export default AlertAndButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
    height: 80,
  },
  input: {
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'red',
    width: Dimensions.get('window').width - 20,
    marginHorizontal: 10,
  },
});
