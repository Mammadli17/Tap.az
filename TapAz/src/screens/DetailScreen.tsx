import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import DetailPictures from '../components/DetailPictures'
import Back from '../assets/icons/Back';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';

const DetailScreen = ({ route }) => {
  const data = route.params
  const navigation : any = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <DetailPictures data={data} />
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>

      </View>
      <View style={styles.headC}>
        <Text style={styles.text}>989 Azn</Text>
        <Text style={styles.text1}>{data?.strInstructions}</Text>

        <View style={styles.cont}>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Şəhər
            </Text>

            <Text style={styles.textB}>
              Baki
            </Text>

          </View>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Top Kategoriya
            </Text>
            <Text style={styles.textB}>
              Elektronika
            </Text>

          </View>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Marka
            </Text>
            <Text style={styles.textB}>
              Iphone
            </Text>

          </View>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Reng
            </Text>
            <Text style={styles.textB}>
              Qirmizi
            </Text>

          </View>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Yeni
            </Text>
            <Text style={styles.textB}>
              Beli
            </Text>

          </View>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Yaddas
            </Text>
            <Text style={styles.textB}>
              128gb
            </Text>

          </View>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Catdirlima
            </Text>
            <Text style={styles.textB}>
              Xeyr
            </Text>

          </View>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Il
            </Text>
            <Text style={styles.textB}>
              2023
            </Text>

          </View>
          <View style={styles.about}>
            <Text style={styles.textA}>
              Asagi yeri
            </Text>
            <Text style={styles.textB}>
              Yoxdur!
            </Text>

          </View>
        </View>
        <View style={{ top: height * 0.06 }}>
          <Text style={styles.textK}>
            Kredit ve barter Yoxdur!
          </Text>
          <Text style={[styles.textK, { top: height * 0.02 }]}>
            {data?.strCategory}
          </Text>

        </View>
        <View style={styles.Com}>
          <View style={styles.Call}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Zeng et
            </Text>

          </View>
          <View style={styles.Chat}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Mesaj yaz
            </Text>

          </View>
        </View>
        <View style={{ top: height * 0.12 }}>
          <Text style={styles.textK}>
            Kredit ve barter Yoxdur!
          </Text>
        </View>
      </View>


    </View>
  )
}

export default DetailScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  cont: {
    top: height * 0.02,
    gap: height * 0.01

  },
  image: {
    top: 0,
    height: height * 0.37
  }
  ,
  back: {
    position: "absolute",
    top: height * 0.04,
    left: width * 0.03
  }
  ,
  text: {
    color: "black",
    fontSize: width * 0.05,
    fontWeight: "500"
  },
  text1: {
    color: "black",
    fontSize: width * 0.04,
    fontWeight: "400"
  },
  headC: {
    top: height * 0.01,
    marginHorizontal: width * 0.03
  },
  textA: {
    color: "rgba(180, 180, 180,0.8)",
    fontSize: width * 0.035,
    fontWeight: "400",
    fontFamily: "Ubuntu-M"
  },
  textK: {
    color: "black",
    fontSize: width * 0.04,
    fontWeight: "400",
    fontFamily: "Ubuntu-M"
  },
  textB: {
    color: "blue",
    fontSize: width * 0.035,
    fontWeight: "400",
    fontFamily: "Ubuntu-M",
    position: "absolute",
    left: width * 0.6
  },
  about: {
    flexDirection: "row",
    gap: width * 0.5
  }, Com: {
    top: height * 0.1,
    flexDirection: "row",
    gap: width * 0.02,
    alignItems: "center",
    justifyContent: "center"
  }, Call: {
    height: height * 0.05,
    width: width * 0.45,
    backgroundColor: "rgb(60, 179, 113)",
    borderRadius: width * 0.02,
    justifyContent: "center"
  }, Chat: {
    height: height * 0.05,
    width: width * 0.45,
    backgroundColor: "rgba(0, 0, 255,0.5)",
    borderRadius: width * 0.02,
    justifyContent: "center"

  }
})