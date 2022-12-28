import React, {useState, useContext} from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FirstScene} from './tutorial/FirstScene';
import {Score} from './tutorial/Score';
import {Score2} from './tutorial/Score2';
import {SecondScene} from './tutorial/SecondScene';
import {CountContext, CountProvider} from './context/context';
import {Begin} from './tutorial/begin';
import {Fail} from './tutorial/Fail';

import {ViroARSceneNavigator} from '@viro-community/react-viro';

import {ScreenStack, shouldUseActivityState} from 'react-native-screens';

export default () => {
  const Stack = createNativeStackNavigator();

  // const CountProvider = ({children}) => {
  //   const [count, setCount] = useState(0);
  //   const [count1, setCount1] = useState(1);
  //   const value = [count, setCount, count1, setCount1];

  //   return (
  //     <CountContext.Provider value={value}>{children}</CountContext.Provider>
  //   );
  // };

  const ARScene = ({navigation}) => {
    const {countCara} = useContext(CountContext);

    return (
      <View style={styles.mainView}>
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{
            scene: SecondScene,
            passProps: {navigation},
          }}
          style={{flex: 1}}
        />

        <View style={styles.controlsView}>
          <Text>Điểm:{countCara}</Text>
        </View>
        <View style={styles.textsc}>
          <Text>Kéo lưỡi câu chạm vào thân con cá diếc, để câu được cá.</Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('./res/left-arrow.png')}
            style={{
              marginTop: 'auto',
            }}
            resizeMode="stretch"></Image>
        </TouchableOpacity>
      </View>
    );
  };
  const ARSceneCarp = ({navigation}) => {
    const {countCarp} = useContext(CountContext);

    return (
      <View style={styles.mainView}>
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{
            scene: FirstScene,
            passProps: {navigation},
          }}
          style={{flex: 1}}
        />

        <View style={styles.controlsView}>
          <Text>Điểm:{countCarp}</Text>
        </View>
        <View style={styles.textsc}>
          <Text>Kéo lưỡi câu chạm vào thân con cá chép, để câu được cá.</Text>
        </View>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            left: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('./res/left-arrow.png')}
            style={{
              marginTop: 'auto',
            }}
            resizeMode="stretch"></Image>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <CountProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          detachInactiveScreens={false}>
          <Stack.Screen name="Begin" component={Begin} />
          <Stack.Screen name="Carp" component={ARSceneCarp} />
          <Stack.Screen name="AR" component={ARScene} />
          <Stack.Screen name="Score" component={Score} />
          <Stack.Screen name="Score2" component={Score2} />
          <Stack.Screen name="Fail" component={Fail} />
          {/* <Stack.Screen name="AR" component={ARScene} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </CountProvider>
  );
};
var styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  textsc: {
    position: 'absolute',
    top: '8%',
    justifyContent: 'center',
    alignItems: 'center',
    right: '28%',
  },
  controlsView: {
    position: 'absolute',
    top: 30,
    right: 20,
    // alignSelf: 'auto',
    // marginTop: 5,
    // marginLeft: 10,
    // position: 'absolute',
    // backgroundColor: '#00000000',

    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  hub_text: {
    fontSize: 40,
    fontFamily: 'Arial',
    color: '#DD0000',
    flex: 1,
  },
});
