import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetData } from '../redux/slices/GetData';
import { FlatList } from 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');
import { Drink } from '../types/DrinkDataType'
import Heart from '../assets/icons/Hearth';
import { useNavigation } from '@react-navigation/native';



const Advertisement = () => {

    const dispatch: any = useDispatch();
    const navigation : any = useNavigation();
    const data: Drink = useSelector((state: any) => state.GetData.data.drinks);
   
    useEffect(() => {
        dispatch(GetData());
    }, [])


    if (!data || data.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 25, color: "red" }}>Loading...</Text>
            </View>
        );
    }
    const groupedData = [];
    for (let i = 0; i < data.length; i += 2) {
        groupedData.push(data.slice(i, i + 2));
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={groupedData}
                scrollEnabled={false}
                renderItem={({ item }: any) => (
                    <View style={styles.row}>
                        {item.map((drink, index) => (
                            <TouchableOpacity key={index} style={styles.itemContainer} onPress={()=>navigation.navigate("DetailScreen",drink)}>
                                <Image
                                    source={{
                                        uri: drink.strDrinkThumb,
                                    }}
                                    style={styles.image}

                                />
                                <View style={{ position: "absolute", flexDirection: "row", justifyContent: "flex-end", left: width * 0.3, top: height * 0.007 }}>
                                    <Heart />
                                </View>
                                <Text style={styles.text}>25 Azn</Text>
                                <Text style={styles.text}>{drink.strCategory}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{ paddingHorizontal: width * 0.05 }}
            />
        </View>
    )
}

export default Advertisement;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(180, 180, 180,0.1)",
        paddingTop: height * 0.02

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: height * 0.02,
    },
    itemContainer: {
        width: width * 0.4,
        height: height * 0.23,
        borderColor: 'black',
        padding: width * 0.03,
        backgroundColor: "white",
        borderRadius: width * 0.033

    },
    text: {
        color: "black",
        textAlign: "center",
        fontSize: width * 0.04,
        top: height * 0.01
    },
    image: {
        width: width * 0.397,
        height: height * 0.14,
        right: width * 0.028,
        top: -height * 0.012,
        borderTopLeftRadius: width * 0.03,
        borderTopRightRadius: width * 0.03
    }
})
