import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import data from "../fakeData/Category"
const { width, height } = Dimensions.get('window');
const CategorySlider = () => {


    const renderItem = ({ item }) => {
        return (

            <View style={styles.flatlist}>
                <View style={styles.imageCont}>
                    <Image
                        source={{
                            uri: item.image,
                        }}
                        style={styles.image}

                    />
                </View>
                <Text style={styles.text}>
                    {item.name}
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ gap: width * 0.09, }}
            />
        </View>
    )
}

export default CategorySlider
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    flatlist: {
        marginHorizontal: width * 0.02
    },
    imageCont: {
        width: width * 0.14,
        height: height * 0.06,
        backgroundColor: "rgba(180, 180, 180,0.2)",
        justifyContent: "center",
        alignItems: "center"
        , borderRadius: width * 0.02
    },
    text: {
        color: "black",
        textAlign: "center",
        fontSize: width * 0.03,
        top: height * 0.01
    }, image: {
        width: width * 0.1,
        height: height * 0.04
    }

})