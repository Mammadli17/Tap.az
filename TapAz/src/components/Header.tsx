import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import More from '../assets/icons/More'
import SearchInput from './CustomSearchInput'
import Filter from '../assets/icons/Filter'
const { height, width } = Dimensions.get('window');

const Header = () => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.more}>
                    <More />
                </View>
                <View>
                    <Text style={styles.textTap}>
                        tap.az
                    </Text>
                </View>
            </View>
            <View style={styles.seacrhCont}>
                <SearchInput />
                <View style={styles.filter}>
                    <Filter />
                </View>
            </View>
        </View>
    )
}

export default Header
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    more: {
        position: "absolute",
        left: width * 0.04
    },
    textTap: {
        fontSize: width * 0.08,
        color: "rgb(255, 98, 0)",
        fontFamily: "Ubuntu-Bold",
        textAlign: "center",
    },
    seacrhCont: {
        right: width * 0.04,
        top: height * 0.02
    },
    filter: {
        left: width * 0.91,
        width: width * 0.1,
        height: height * 0.053,
        backgroundColor: "rgba(249, 249, 249, 1)",
        borderWidth: 0.8,
        borderColor: "rgba(180, 180, 180,0.4)",
        borderRadius: width * 0.02,
        alignItems: "center",
        justifyContent: "center",
        bottom: height * 0.0544
    }
})
