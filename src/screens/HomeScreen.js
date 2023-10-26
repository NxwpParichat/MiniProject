import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/1.png')} resizeMode= 'cover' style = {styles.page}>
                <View style = {{marginTop : 400,}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('About')}>
                        <Text style= {styles.buttonText}>About us</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button,{backgroundColor : '#9575DE'}]}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style= {styles.buttonText}>Let's start</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E4F1FF',
    },
    page : {
        flex : 1,
        justifyContent : 'center'
    },
    button: {
        backgroundColor: "#E966A0",
        padding: 10,
        borderRadius: 10,
        width : 130,
        alignItems : 'center',
        alignSelf : 'center',
        margin : 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
