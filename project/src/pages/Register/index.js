import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import firebase from '../../service/firebaseConnection.js'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    async function register() {

        if (!name || !email || !password) {
            alert('Fill in all fields!')
            return
        }

        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value) => {
                //navigation.navigate('Home', { user: value.user.email })
                alert("Registred")
            })
            .catch((error) => {
                alert('Error register');
                console.log(error);
                return;
            })
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> REGISTRATION </Text>

            <TextInput
                style={styles.input}
                placeholder={"Your name"}
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <TextInput
                style={styles.input}
                placeholder={"Your email"}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder={"Your password"}
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.buttonText}> Register </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}> I already have an account </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: -20
    },
    text: {
        fontSize: 20,
    },
    input: {
        padding: 10,
        borderBottomWidth: 1,
        height: 45,
        fontSize: 20,
        borderColor: '#000',
        width: 300,
        marginTop: 20,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ab3234',
        borderRadius: 9,
        height: 40,
        width: 250,
        marginTop: 40,
        marginBottom: 20
    },
    buttonText: {
        color: '#ddd',
        fontSize: 20
    }
})