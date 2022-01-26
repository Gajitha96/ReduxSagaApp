import React from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {incremet, dencremet} from './reducer';

const CountterComponent = () => {
  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Redux</Text>
      <Button title="Increment" onPress={() => dispatch(incremet())} />
      <View style={styles.body1}>
        <Button
          title="Decrement"
          color="#f194ff"
          onPress={() => dispatch(dencremet())}
        />
      </View>

      <Text style={styles.text}>Counter:{counter}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body1: {
    margin: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default CountterComponent;
