import React, {Component, useState, useContext, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {CountContext} from '../context/context';

import Fireworks from 'react-native-fireworks';

export const Score = ({navigation}) => {
  const {countCara} = useContext(CountContext);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'black',
        }}>
        <Text style={{color: 'white', fontSize: 20}}>
          Chúc mừng bạn đã câu được {countCara} cá diếc!!!
        </Text>
        <Button
          title="Tiếp tục chơi"
          style={{marginTop: '10%'}}
          onPress={() => navigation.push('Begin')}
        />

        <Fireworks
          speed={20}
          density={30}
          colors={['#ff0', '#ff3', '#cc0', '#ff4500', '#ff6347']}
          iterations={500}
          height="20%"
          width="20%"
          zIndex={5}
          circular={true}></Fireworks>
      </View>
    </SafeAreaView>
  );
};
