import React, {Component, useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const {height: screenHeight} = Dimensions.get('window');

export const TutorialList = ({navigation}) => {
  const [imageList, setImageList] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const stepCarousel = useRef(null);
  const [imageActive, setImageActive] = useState(0);

  useEffect(() => {
    const data = [
      {
        id: 1,
        image: (
          <Image
            source={require('../res/chum_ca.jpg')}
            resizeMode="stretch"
            style={{width: screenWidth, height: '100%'}}
          />
        ),
        text: 'Tìm tới hình ảnh chứa cái chum và sử dụng camera quét nó',
      },
      {
        id: 2,
        image: (
          <Image
            source={require('../res/2.2.1.jpg')}
            resizeMode="stretch"
            style={{width: screenWidth, height: '100%'}}
          />
        ),
        text: 'Sau khi quét xong, con cá sẽ xuất hiện như trên hình',
      },
      {
        id: 3,
        image: (
          <Image
            source={require('../res/1.png')}
            resizeMode="stretch"
            style={{width: screenWidth, height: '100%'}}
          />
        ),
        text: 'Giữ con cá và di chuyển nó hình ảnh chứa chiếc giỏ.',
      },
      {
        id: 4,
        image: (
          <Image
            source={require('../res/5.jpg')}
            resizeMode="stretch"
            style={{width: screenWidth, height: '100%'}}
          />
        ),
        text: 'Mô hình chiếc giỏ sẽ xuất hiện. Đặt con cá vào trung tâm chiếc giỏ, chạm để thả xuống',
      },
    ];

    setImageList(data);
  }, []);
  useEffect(() => {
    if (imageList.length > 0) {
      let index = 0;
      setInterval(() => {
        stepCarousel.current.scrollTo({
          x: index * screenWidth,
          y: 0,
          animated: true,
        });
        index += 1;
        if (index === imageList.length) {
          index = 0;
        }
      }, 3000);
    }
  }, [imageList]);

  const handleScroll = e => {
    if (!e) {
      return;
    }
    const {nativeEvent} = e;
    if (nativeEvent && nativeEvent.contentOffset) {
      const currentOffset = nativeEvent.contentOffset.x;

      let imageIndex = 0;
      if (nativeEvent.contentOffset.x > 0) {
        imageIndex = Math.floor(
          (nativeEvent.contentOffset.x + screenWidth / 2) / screenWidth,
        );
      }
      setCurrentImage(imageIndex);
      setImageActive(imageIndex);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View
          style={{
            height: '6%',
            width: '100%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          {/* <TouchableOpacity
            style={{
              height: '100%',
              aspectRatio: 1.5,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../res/left-arrow.png')}
              style={{
                marginTop: 'auto',
              }}
              resizeMode="stretch"></Image>
          </TouchableOpacity> */}
          <Text
            style={{
              fontSize: 25,
              marginLeft: '40%',
              marginTop: 'auto',
              alignItems: 'center',
            }}>
            Cách chơi
          </Text>
        </View>
        {/* ScrollView */}
        <View
          style={{
            width: screenWidth,
            height: screenHeight * 0.5,
            marginTop: 30,
          }}>
          <ScrollView
            horizontal
            pagingEnabled
            contentContainerStyle={{
              width: screenWidth * imageList.length,
              height: screenHeight * 0.5,
            }}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            ref={stepCarousel}>
            {imageList.map((e, index) => (
              <View key={index.toString()}>{e.image}</View>
            ))}
          </ScrollView>
          <View style={styles.wrapDot}>
            {imageList.map((e, index) => (
              <Text
                key={index.toString()}
                style={
                  imageActive === index ? StyleSheet.dotActive : styles.dot
                }>
                ●
              </Text>
            ))}
          </View>
        </View>
        <Text style={{fontSize: 20, marginTop: 30}}>
          {imageList[currentImage] ? imageList[currentImage].text : ''}
        </Text>

        {/* Show infor */}

        {currentImage === 3 ? (
          <View
            style={{
              width: '100%',
              height: '40%',
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.push('AR');
              }}
              style={{
                width: '40%',
                height: '20%',
                borderColor: 'white',
                borderWidth: 1,
                borderRadius: 100,
                backgroundColor: '#87CEFA',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 20}}>Bắt đầu</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapDot: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    margin: 3,
    color: 'black',
  },
  dot: {
    margin: 3,
    color: 'white',
  },
});
