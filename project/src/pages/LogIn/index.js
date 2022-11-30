import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import wolf from '../../images/wolf.png'


import firebase from '../../service/firebaseConnection.js'

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    async function logIn() {
        if (!email || !password) {
            alert('Fill in all fields!')
            return
        }

        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then( (value) => {
                navigation.navigate('Home') ;
                alert('Welcome!')
        })
        .catch( (error) => {
            alert('Error Login');
            return;
        })
        setEmail('');
        setPassword('');
    }

    return (
        <View style={styles.container}>

            <Image source={wolf} resizeMode="contain" style={styles.logo} />

            <Text style={styles.title}> LOGIN </Text>
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
            <TouchableOpacity style={styles.button} onPress={logIn}>
                <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}> I do not have an account </Text>
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
    logo:{
        height: 150,
        width: 150,
        marginBottom: 50,
        borderRadius: 100
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
        backgroundColor: '#123456',
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