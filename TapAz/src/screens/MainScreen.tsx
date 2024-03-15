import React from 'react';
import { View, SafeAreaView, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import Header from '../components/Header';
import AdsImageSlider from '../components/AdsImageSlider';
import CategorySlider from '../components/CategorySlider';
import Advertisement from '../components/Advertisement';

const { height } = Dimensions.get('window');

const MainScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle="dark-content" />
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView >
        <View style={styles.adsCont}>
          <AdsImageSlider />
        </View>
        <View style={styles.category}>
          <CategorySlider />
        </View>
        <View style={{ flex: 1}}>
          <View>
            <Advertisement />
          </View>
        </View>


      </ScrollView>

    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    top: height * 0.05,
    height: height * 0.18
  },
  adsCont: {
    height: height * 0.24,
    top: height * 0.01
  },
  category: {
    height: height * 0.1,
    bottom: height * 0.02

  }
});
