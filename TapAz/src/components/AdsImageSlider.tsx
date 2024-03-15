import React, {FunctionComponent, useRef} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const images: string[] = [
    "https://cdn.cheapism.com/images/McDonalds_International_Menu_AI-G.2e16d0ba.fill-1440x605.jpg",
    "https://www.restaurantnews.com/wp-content/uploads/2016/10/Wendys-Adds-Swiss-Jr-Bacon-Cheeseburger-to-4-for-4-Meal.jpg",
    "https://people.com/thmb/27-SHa9m8ZRlIKobfeO07VTxcYI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(711x120:713x122):format(webp)/starbucks-Frozen-Lemonade-Refreshers-Beverages-062723-1-9722fd04fcc14addbc0a5dd618007991.jpg",

];

const {width,height} = Dimensions.get('screen');

const AdsImageSlider: FunctionComponent = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  return (
    <View style={style.container}>
      <View style={style.topContainer}>
        <Animated.FlatList
          data={images}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: animatedValue}}}],
            {useNativeDriver: false},
          )}
          pagingEnabled={true}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={style.imageContainer}>
                <Image style={style.image} source={{uri: item}} />
              </View>
            );
          }}
        />
      </View>
      <View style={style.bottomContainer}>
        <FlatList
          horizontal
          data={images}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({index}) => {
            const inputRange = [
              (index - 1) * width,
              index * width,
              (index + 1) * width,
            ];
            const colorOutputRange = ['rgb(255, 98, 0)', 'rgb(255, 98, 0)', 'rgb(255, 98, 0)'];
            const scaleOutputRange = [1, 2, 1];
            const dotScale = animatedValue.interpolate({
              inputRange,
              outputRange: scaleOutputRange,
              extrapolate: 'clamp',
            });
            const color = animatedValue.interpolate({
              inputRange,
              outputRange: colorOutputRange,
              extrapolate: 'clamp',
            });
            return (
              <View style={style.dotContainer}>
                <PagingDot color={color} scale={dotScale} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const PagingDot: FunctionComponent<{scale; color}> = ({scale, color}) => {
  return (
    <Animated.View
      style={[style.pagingDot, {backgroundColor: color, transform: [{scale}]}]}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 3,
  },
  topContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 1,
    width,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width,
  },
  image: {
    width: width ,
    height: height*0.2,
  },
  pagingDot: {
    width: 6,
    height: 6,
    backgroundColor: 'cyan',
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'rgb(255, 98, 0)',
  },
  dotContainer: {
    width: width*0.02,
    padding: 10,
    
  },
});

export default AdsImageSlider;