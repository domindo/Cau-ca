import React, {useState, useContext} from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroFlexView,
  ViroARPlane,
  ViroText,
  ViroARSceneNavigator,
  ViroMaterials,
  ViroAmbientLight,
  ViroTrackingStateConstants,
  ViroARTrackingReasonConstants,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroNode,
} from '@viro-community/react-viro';

import {CountContext} from '../context/context';

export const FirstScene = ({navigation}) => {
  console.log('Scene1');

  ViroARTrackingTargets.createTargets({
    tesla: {
      source: require('../res/chum_ca.jpg'),
      orientation: 'Left',
      physicalWidth: 0.257,
    },
  });
  ViroARTrackingTargets.createTargets({
    basket: {
      source: require('../res/6.jpg'),
      orientation: 'Up',
      physicalWidth: 0.157,
    },
  });

  ViroMaterials.createMaterials({
    base: {
      lightingModel: 'PBR',
      normalTexture: require('../res/basket-3051/3051-NM_u0_v0.jpg'),
      diffuseTexture: require('../res/basket-3051/3051-TM_u0_v0.jpg'),
    },
  });
  // // const initialScene = (props) => {

  const [fishPro, setFishPro] = useState({
    type: 'Dynamic',
    mass: 2,
    enabled: false,
  });

  const onClick = () => {
    console.log('Dropping');
    setFishPro({type: 'Dynamic', mass: 2, enabled: true, friction: 5});
    this.txt.setNativeProps({visible: true});
  };

  const {countCarp, setCountCarp} = useContext(CountContext);

  const handleCountCarp = newNumberCarp => {
    setCountCarp(countCarp + newNumberCarp);
  };

  const onFishCollision = viroTag => {
    if (viroTag == 'Carp') {
      handleCountCarp(1);
      navigation.navigate('Score2');
    } else if (viroTag == 'Cara') {
      navigation.navigate('Fail');
    }
    return null;
  };

  return (
    <ViroARScene>
      <ViroNode>
        <ViroARImageMarker
          target="tesla"
          // onAnchorFound={onAnchorFound}
        >
          <ViroNode position={[-0.2, -0.02, -0.15]}>
            <ViroFlexView
              rotation={[-90, -90, 0]}
              height={0.03}
              width={0.05}
              style={styles.card}>
              <ViroText
                ref={obj => {
                  this.txt = obj;
                }}
                width={0.05}
                height={0.1}
                visible={false}
                textAlign="left"
                text="Chọnnúttrởvề,nếuchưacâuđượccá"
                scale={[0.06, 0.06, 0.06]}
                style={styles.textStyle}
              />
            </ViroFlexView>
          </ViroNode>
          <ViroAmbientLight color="#ffffff" />
          <Viro3DObject
            ref={obj => {
              hook = obj;
            }}
            source={require('../res/cc0_-_meat_hook_5.glb')}
            scale={[0.25, 0.25, 0.25]}
            // scale={[0.012, 0.012, 0.012]}
            rotation={[0, 90, 0]}
            position={[-0.05, 0.05, 0]}
            viroTag="Fish"
            type="GLB"
            onClick={onClick}
            onDrag={() => {}}
            onCollision={onFishCollision}
            physicsBody={fishPro}
          />
          <Viro3DObject
            source={require('../res/carp.glb')}
            scale={[0.014, 0.014, 0.014]}
            rotation={[-1, -1, 0]}
            position={[0, 0.01, -0.15]}
            type="GLB"
            viroTag="Cara"
            physicsBody={{
              type: 'Kinematic',
              mass: 0,
            }}
          />
          <Viro3DObject
            source={require('../res/carpio.glb')}
            scale={[0.014, 0.014, 0.014]}
            rotation={[-1, -1, 0]}
            position={[0, 0.01, 0.18]}
            type="GLB"
            viroTag="Carp"
            physicsBody={{
              type: 'Kinematic',
              mass: 0,
            }}
          />
        </ViroARImageMarker>
      </ViroNode>
    </ViroARScene>
  );
};
var styles = StyleSheet.create({
  textStyle: {
    flex: 0.5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#0040ff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column',
  },
});
