import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Search from '../assets/icons/Search';


const { width } = Dimensions.get('window');
const height = Dimensions.get('window').height;
const SearchInput = ({ label, value, onChangeText }: any) => {
    const [isFocused, setIsFocused] = useState(false);


    const inputRef = useRef<any>(null);

    const handleFocus = () => {
        setIsFocused(true);
        inputRef.current.focus();
    };

    const handleBlur = () => setIsFocused(false);

    return (
        <TouchableOpacity activeOpacity={1} onPress={handleFocus} style={styles.container}>
            <Text style={[styles.label, { fontSize: isFocused || value ? width * 0 : width * 0.05, top: isFocused || value ? height * 0.005 : height * 0.0188 }]}>
                {label}
            </Text>
            <View style={{ position: "absolute", zIndex: 1, top: height * 0.01, right: width * 0.8 }}>
                <Search />
            </View>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={[styles.input, { borderWidth: 1, borderColor: isFocused ? "rgba(137, 136, 138, 1)" : "rgba(180, 180, 180,0.4)" }]}
                ref={inputRef}
                placeholderTextColor={'rgb(180, 180, 180)'}
                placeholder='Əşya və ya xidmət axtar '
                selectionColor={"rgba(137, 136, 138, 1)"}


            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        alignItems: "center"
    },
    label: {
        color: 'rgba(176, 175, 177, 1)',
        left: width * 0.2,
        zIndex: 1,
        position: "absolute",
        fontFamily: "Ubuntu-Regular"
    },
    input: {
        fontSize: width * 0.045,
        padding: 0,
        margin: 0,
        height: height * 0.055,
        width: width * 0.78,
        color: 'rgba(137, 136, 138, 1)',
        backgroundColor: 'rgba(249, 249, 249, 1)',
        borderRadius: width * 0.02,
        paddingLeft: width * 0.14
    },
});

export default SearchInput;
