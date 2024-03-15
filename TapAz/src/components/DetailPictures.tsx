import React, {FunctionComponent, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const {width,height} = Dimensions.get('screen');

const DetailPictures = (data: any) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  console.log("sa",data,"da");
  
  const images: string[] = [
    data.data.strDrinkThumb,
    "https://www.restaurantnews.com/wp-content/uploads/2016/10/Wendys-Adds-Swiss-Jr-Bacon-Cheeseburger-to-4-for-4-Meal.jpg",
    "https://people.com/thmb/27-SHa9m8ZRlIKobfeO07VTxcYI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(711x120:713x122):format(webp)/starbucks-Frozen-Lemonade-Refreshers-Beverages-062723-1-9722fd04fcc14addbc0a5dd618007991.jpg",

];
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
    
    </View>
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
    height: height*0.37,
  },

});

export default DetailPictures;