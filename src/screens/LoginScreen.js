import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    
    if (user && email && password) {
      
      setIsLoggedIn(true);
      navigation.navigate('Index',user);
    } else {
    
      alert('กรุณากรอกข้อมูลให้ครบทุกช่อง !!!');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUser(text)}
        value={user}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
        >
          <View style= {styles.cancelButton}><Text style={styles.buttonText}>Cancel</Text></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleLogin}
        >
          <View style={styles.loginButton}><Text style={styles.buttonText}>Login</Text></View>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4F1FF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#9575DE',
    borderWidth: 2,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: '#fff',
    borderRadius : 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '86%',
  },
  cancelButton: {
    width: 128,
    backgroundColor: "#9575DE",
    borderRadius: 15,
    padding: 10,
  },
  loginButton: {
    width: 128,
    backgroundColor: "#E966A0",
    borderRadius: 15,
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;


