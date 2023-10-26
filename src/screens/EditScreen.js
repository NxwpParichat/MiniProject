import React, { useContext } from "react";
import { View,StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import AddForm from "../component/AddForm";

const EditScreen=({route,navigation})=>{
    const {state, editExam}= useContext(Context);
    const id = route.params.id;
    const exam = state.find(exam => exam.id == route.params.id)
    return (
        <View style = {styles.container}>
            <AddForm initValues = {{
                id:exam.id,
                subjectID: exam.subjectID,
                subject: exam.subject,
                section : exam.section,
                professor: exam.professor,
                date: exam.date,
                starttime: exam.starttime,
                timeend: exam.timeend,
                room: exam.room,
                more: exam.more,}}
            onSubmit={(subjectID, subject, section, professor, date, starttime, timeend, room, more) => {
                editExam(id,subjectID, subject, section, professor, date, starttime, timeend, room, more);
                navigation.pop();
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 10,
        backgroundColor : '#FDE5EC',
    },
    subjectID: {
        fontSize : 24,
        fontWeight : 'bold',
        marginTop : 10,
        paddingLeft : 15,
    },
    subject: {
        fontSize : 18,
        paddingLeft : 20,
    },
})

export default EditScreen;
