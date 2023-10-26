import React from "react";
import { View, StyleSheet } from "react-native";
import AddForm from "../component/AddForm";
import { useContext } from "react";
import { Context } from "../context/BlogContext";

const CreateScreen = ({navigation}) => {
    const { addExam } = useContext(Context);
    return (
        <View style={styles.container}>
            <AddForm
            onSubmit ={(subjectID, subject, section, professor, date, starttime, timeend, room, more) => {
                addExam(subjectID, subject, section, professor, date, starttime, timeend, room, more);
                navigation.navigate('Index');
            }} 
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#E4F1FF',
    },
});

export default CreateScreen;
