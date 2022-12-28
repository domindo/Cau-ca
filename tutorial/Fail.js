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

export const Fail = ({navigation}) => {
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
          Bạn chưa câu được cá. Hãy chọn lại lưỡi câu phù hợp hơn.
        </Text>
        <Button
          title="Chơi lại"
          style={{marginTop: '10%'}}
          onPress={() => navigation.push('Begin')}
        />
      </View>
    </SafeAreaView>
  );
};
