import React, { useState } from "react";
import { Text, StyleSheet, TextInput, ScrollView,TouchableOpacity, View} from "react-native";

const AddForm = ({ onSubmit, initValues }) => {
    const [subjectID, setSubjectID] = useState(initValues.subjectID);
    const [subject, setSubject] = useState(initValues.subject);
    const [section, setSection] = useState(initValues.section);
    const [professor, setProfessor] = useState(initValues.professor);
    const [date, setDate] = useState(initValues.date);
    const [starttime, setStarttime] = useState(initValues.starttime);
    const [timeend, setTimeend] = useState(initValues.timeend);
    const [room, setRoom] = useState(initValues.room);
    const [more, setMore] = useState(initValues.more);
    
    return (
        <ScrollView>
            <Text style={styles.label}>รหัสวิชา :</Text>
            <TextInput 
                style={styles.input}
                value={subjectID}
                onChangeText={(text) => setSubjectID(text)}  
            />

            <Text style={styles.label}>ชื่อวิชา :</Text>
            <TextInput 
                style={styles.input}
                multiline
                numberOfLines={2}
                value={subject}
                onChangeText={(text) => setSubject(text)}
            />

            <Text style={styles.label}>หมู่เรียน :</Text>
            <TextInput 
                style={styles.input}
                value={section}
                onChangeText={(text) => setSection(text)}
            />

            <Text style={styles.label}>อาจารย์ผู้สอน :</Text>
            <TextInput 
                style={styles.input}
                value={professor}
                onChangeText={(text) => setProfessor(text)}
            />

            <Text style={styles.label}>วันที่สอบ :</Text>
            <TextInput 
                style={styles.input}
                placeholder= "Ex YYYY-MM-DD"
                value={date}
                onChangeText={(text) => setDate(text)}
            />

            <Text style={styles.label}>เวลาที่สอบ </Text>
            <View style = {styles.time}>
                <Text style={[styles.label,{marginTop : 11,}]}>เริ่ม :</Text>
                <TextInput 
                    style={styles.input2}
                    placeholder="00:00"
                    value={starttime}
                    onChangeText={(text) => setStarttime(text)}
                />
                <Text style={[styles.label,{marginTop : 11,}]}>หมด :</Text>
                <TextInput 
                    style={styles.input2}
                    placeholder="00:00"
                    value={timeend}
                    onChangeText={(text) => setTimeend(text)}
                />
            </View>
            <Text style={styles.label}>ห้องสอบ :</Text>
            <TextInput 
                style={styles.input}
                value={room}
                onChangeText={(text) => setRoom(text)}
            />

            <Text style={styles.label}>รายละเอียดเพิ่มเติม :</Text>
            <TextInput 
                style={styles.input}
                multiline
                numberOfLines={3}
                value={more}
                onChangeText={(text) => setMore(text)}
            />


            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    onSubmit(subjectID, subject, section, professor, date, starttime, timeend, room, more);
                }}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};
    AddForm.defaultProps = {
        initValues: { subjectID: '', subject: '', section: '', professor: '', date: '', starttime: '', timeend: '', room: '', more: ''}
    }

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 1,
        marginTop: 5,
        marginLeft: 10,
      },
      input: {
        fontSize: 18,
        borderWidth: 1.75,
        borderColor: "#E966A0",
        borderRadius: 8,
        padding: 2,
        paddingLeft: 15,
        margin: 8,
        marginBottom: 5,
        backgroundColor: "#fff",
        width : 330,
        alignSelf : 'center',
      },
      input2 : {
        fontSize: 18,
        borderWidth: 1.75,
        borderColor: "#E966A0",
        borderRadius: 8,
        padding: 2,
        paddingLeft: 15,
        margin: 8,
        marginBottom: 5,
        backgroundColor: "#fff",
        width : 100,
      },
      time : {
        flexDirection : 'row',
        justifyContent : 'space-between',
      },
      subtitle: {
        fontSize: 15,
        padding: 2,
        marginLeft: 10,
        fontWeight: "bold", 
    },
      button: {
        backgroundColor: "#E966A0",
        borderRadius: 10,
        alignItems: "center",
        paddingVertical: 10,
        width: 200, 
        alignSelf: "center", 
        marginVertical: 15,
      },
      buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
      },
    });
export default AddForm;
