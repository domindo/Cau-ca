import React, {Component, useState, useEffect, useContext, useRef} from 'react';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {CountContext, CountProvider} from '../context/context';

const deviceWidth = Math.round(Dimensions.get('window').width);
const offset = 140;
const radius = 20;
export const Begin = ({navigation}) => {
  const {countCara, countCarp} = useContext(CountContext);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View backgroundColor="#ffffff" width="100%" height="5%">
        <Text
          style={{
            fontSize: 25,
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            marginTop: 5,
          }}>
          HÃY CHỌN LƯỠI CÂU CÁ
        </Text>
      </View>

      <View width="100%" height="15%" style={{opacity: 0.8}}>
        <Text
          style={{
            fontSize: 20,
            marginTop: 25,
          }}>
          Có hai loại cá là: cá diếc và cá chép. Trong trò chơi sẽ có hai loại
          lưỡi câu, khi chọn đúng lưỡi có thể câu được loại cá phù hợp.
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 5,
          }}>
          Số cá bạn đã câu được:
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 5,
          }}>
          {/* <View>
            <Image
              // style={{width: 50, height: 50}}
              resizeMode="stretch"
              source={'../res/icons8-wicker-basket-50.png'}></Image>
          </View> */}
          -Cá chép: {countCarp}
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 5,
          }}>
          -Cá diếc: {countCara}
        </Text>
      </View>
      <View
        backgroundColor="#000000"
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <View
          style={{
            width: deviceWidth - offset,
            backgroundColor: '#ffffff',
            height: '36%',
            borderRadius: radius,

            shadowColor: '#ffffff',
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.75,
            shadowRadius: 5,
            elevation: 9,
            marginTop: '10%',
          }}>
          <Image
            source={require('../res/conganh.jpg')}
            style={{
              height: 250,
              width: deviceWidth - offset,
              borderTopLeftRadius: radius,
              borderTopRightRadius: radius,
              opacity: 0.9,
              alignContent: 'center',
              alignSelf: 'center',
            }}
            resizeMode="stretch"
          />

          <TouchableOpacity
            onPress={() => {
              navigation.push('AR');
            }}
            style={{
              paddingHorizontal: 60,
              paddingVertical: 12,
              borderColor: 'white',
              borderWidth: 1,
              marginTop: 30,
              marginLeft: '18%',
              width: '65%',
              borderRadius: 30,
              backgroundColor: '#0072b5',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>
              Chọn lưỡi này để câu cá diếc
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: deviceWidth - offset,
            backgroundColor: '#ffffff',
            height: '36%',
            borderRadius: radius,

            shadowColor: '#ffffff',
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 0.75,
            shadowRadius: 5,
            elevation: 9,
            marginTop: '5%',
          }}>
          <Image
            source={require('../res/khongnganh.png')}
            style={{
              height: 250,
              width: deviceWidth - offset,
              borderTopLeftRadius: radius,
              borderTopRightRadius: radius,
              opacity: 0.9,
              alignContent: 'center',
              alignSelf: 'center',
            }}
            resizeMode="stretch"
          />

          <TouchableOpacity
            onPress={() => {
              navigation.push('Carp');
            }}
            style={{
              ddingHorizontal: 60,
              paddingVertical: 12,
              borderColor: 'white',
              borderWidth: 1,
              marginTop: 30,
              marginLeft: '18%',
              width: '65%',
              borderRadius: 30,
              backgroundColor: '#0072b5',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>
              Chọn lưỡi này để câu cá chép
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
