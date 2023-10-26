import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Context } from '../context/BlogContext';

import { MaterialIcons } from '@expo/vector-icons';

const IndexScreen = ({navigation, route}) => {
  const {state, delExam} = useContext(Context);
  const [welcome, setWelcome] = useState(route.params);

  const ConfirmDelete = (id) => {
    return Alert.alert(
        "Delete ?",
        "If you press delete, you will not be able to press restore or edit again.",
      [
        {
          text: 'Cancel',
          onPress:()=>console.log('Cancel to delete'),
          style: 'cancel'
        },
        {
          text: 'Confirm',
          onPress:()=>delExam(id),
        },
      ],
      { cancelable:false}
    )
  }

  const sorted = state.sort((a,b)=>{
    const dateA = new Date(`${a.date} ${a.starttime}`).valueOf();
    const dateB = new Date(`${b.date} ${b.starttime}`).valueOf();
    if(dateA > dateB){
      return 1
    }
    return -1
  });


  return(
    <View style={styles.container}>
      <View style = {styles.welB}>
        <Text style = {styles.wel}>Welcome {welcome} !! </Text>
      </View>
      
      <FlatList
        data={state}
        keyExtractor={(exam) => exam.title}
        renderItem={({item}) => {
          return (
            <View style = {styles.frame}>
              <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
              <View style = {styles.frame2}>
              <Text style={styles.title}>{item.subjectID}  -  {item.subject}</Text>
              <Text style={styles.title}>sec : {item.section}</Text>
              </View>
              
              <Text style = {[styles.message,{marginBottom : 4,}]}>Room : {item.room}</Text>
              <View style={[styles.buttonContainer,{paddingVertical : 1,paddingBottom : 5,}]}>
                <Text style={styles.message}>{item.date}</Text>
                <Text style={styles.message}>Time : {item.starttime} - {item.timeend}</Text>
              <TouchableOpacity onPress={() => ConfirmDelete(item.id) }>
                  <MaterialIcons name="delete" size={24} color="black" style = {{paddingRight : 8,}}/>
              </TouchableOpacity>
              </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E4F1FF',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent : 'space-between',
    
  },
  frame :{
    backgroundColor : '#fff',
    borderRadius : 15,
    paddingBottom : 10,
    marginBottom : 8,
  
  },
  frame2:{
    paddingTop :8,
    paddingBottom :5,
    marginBottom : 8,
    paddingHorizontal : 8,
    backgroundColor : '#ff7aa6',
    borderTopStartRadius : 15,
    borderTopEndRadius : 15,
  },
  title: {
    fontSize: 20,
    fontWeight : '600',
    
  },
  message: {
    fontSize: 18,
    paddingLeft : 8,
    paddingRight : 5,
  },
  wel : {
    fontSize: 24,
    fontStyle : 'italic',
    fontWeight : 'bold',
    alignSelf : 'center',
  },
  welB :{
    backgroundColor :'#35dcbd',
    padding : 6,
    borderRadius : 10,
    marginBottom : 10,
  },
});

export default IndexScreen;
