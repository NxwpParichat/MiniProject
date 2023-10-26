import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native';


const AboutScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
        <Image source={(require('../img/p1.png'))} style={[styles.image,{backgroundColor : '#FFFCD7'}]}/>
        <View style = {styles.frame}>
            <Text style={[styles.title,{color :'#e6aa42'}]}>6421600140</Text>
            <Text style={[styles.title,{color :'#e6aa42'}]}>ปาริฉัทท์ ปรีดีวงศ์</Text>
        </View>
            <Text style={styles.subtitle}>Workload : 25%</Text>

        <Image source={(require('../img/p2.png'))} style={[styles.image,{backgroundColor : '#DFD4EB'}]}/>
        <View style = {styles.frame}>
            <Text style={[styles.title,{color :'#9575DE'}]}>6421604765</Text>
            <Text style={[styles.title,{color :'#9575DE'}]}>เขมมิกา กุลจิตติเดโช</Text>
        </View>
            <Text style={styles.subtitle}>Workload : 25%</Text>

        <Image source={(require('../img/p3.png'))} style={[styles.image,{backgroundColor : '#CBE8DD'}]}/>
        <View style = {styles.frame}>
            <Text style={[styles.title,{color :'#1fb196'}]}>6421604901</Text>
            <Text style={[styles.title,{color :'#1fb196'}]}>ลัฆวี คงสุวรรณ</Text>
        </View>
            <Text style={styles.subtitle}>Workload : 25%</Text>

        <Image source={(require('../img/p4.png'))} style={[styles.image,{backgroundColor : '#FEE8E2'}]}/>
        <View style = {styles.frame}>
            <Text style={[styles.title,{color :'#E966A0'}]}>6421604943</Text>
            <Text style={[styles.title,{color :'#E966A0'}]}>สุพรรษา เกียรติเถกิง</Text>
        </View>
            <Text style={styles.subtitle}>Workload : 25%</Text>

        
      <TouchableOpacity 
        style={styles.button} 
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1FF',
    padding: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'center',
  },
  button: {
    width: 150,
    backgroundColor: "#E966A0",
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#fff",
    marginBottom: 50,
    alignSelf: "center",
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 1,
    backgroundColor : '#fff',
    borderRadius : 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: 'center',
    
  },
  subtitle: {
    fontSize: 15,
    color: "#000",
    marginBottom: 25,
    alignSelf: 'center',
  },
  frame: {
    backgroundColor : '#fff',
    borderRadius : 20,
    width : 220,
    padding : 10,
    alignSelf : 'center',
    alignItems : 'center',
    marginTop : 10,
    marginBottom: 5,
  },

});

export default AboutScreen;
