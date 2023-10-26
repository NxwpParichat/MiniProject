import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ route }) => {
const { state } = useContext(Context);

const exam = state.find((exam) => exam.id == route.params.id);
console.log(exam)
    return (
        <View style={styles.container}>
            
        <View style = {styles.frame}>
            <Text style={styles.title}>รหัสวิชา :</Text>
            <Text style={styles.subtitle}>{exam.subjectID}</Text>
            <Text style={styles.title}>ชื่อวิชา :</Text>
            <Text style={styles.subtitle}>{exam.subject}</Text>
            <Text style={styles.title}>หมู่เรียน :</Text>
            <Text style={styles.subtitle}>{exam.section}</Text>
        </View>

        <View style = {[styles.frame,{borderColor : '#e6aa42'}]}>
            <Text style={styles.title}>อาจารย์ผู้สอน :</Text>
                <Text style={styles.subtitle}>{exam.professor}</Text>
        </View>

        <View style = {[styles.frame,{borderColor : '#1fb196'}]}>
            <Text style={styles.title}>วันที่สอบ : </Text>
            <Text style={styles.subtitle}>{exam.date}</Text>
            <Text style={styles.title}>เวลาที่สอบ : </Text>
            <Text style={styles.subtitle}>{exam.starttime} - {exam.timeend}</Text>
            <Text style={styles.title}>ห้องสอบ :</Text>
            <Text style={styles.subtitle}>{exam.room}</Text>
        </View>

        <View style = {[styles.frame,{borderColor : '#9575DE'}]}>
            <Text style={styles.title}>รายละเอียดเพิ่มเติม :</Text>
                <Text style={styles.subtitle}>{exam.more}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 10,
        backgroundColor : '#fffde6',
    },
    title: {
        fontSize : 20,
        fontWeight : 'bold',
        marginTop : 10,
        paddingLeft : 20,
    },
    content: {
        fontSize : 15,
        paddingLeft : 20,
    },
    subtitle: {
        fontSize: 20,
        paddingBottom: 5, 
        paddingLeft : 50,
    },
    frame : {
        borderWidth : 3,
        borderColor : '#E966A0',
        borderRadius : 10,
        marginBottom : 5,
        backgroundColor : '#fff',
        paddingBottom : 5,
        marginTop : 5,
    }
});

export default ShowScreen;
