import React, { Component, useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet,Text, TextInput, TouchableOpacity, View } from 'react-native'
import {auth,app} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigation = useNavigation()

    

    const handleSignUp = async() =>{
        try {
        const response = await createUserWithEmailAndPassword(auth,email,password);
        console.log(response);
        alert('Check Emails');
        navigation.navigate("Home");
        }catch(e) { 
            return {error:e};
        }
    };

    const handleSignIn = async() =>{
        try {
            const response = await signInWithEmailAndPassword(auth,email,password);
            console.log(response);
            alert('Signing in...');
            navigation.navigate("Home");
        }catch(e) {
            return {error:e};
        }
    };

    return (
        <KeyboardAvoidingView
            style = {styles.container}
            behavior='padding'
        >
            <View style = {styles.inputContainer}>
                <TextInput 
                    placeholder='Email'
                    value ={email}
                    onChangeText={text =>setEmail(text)}
                    style={styles.input}/>
                <TextInput 
                    placeholder='Password'
                    value ={password}
                    onChangeText={text=>setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleSignIn}
                style = {styles.button}
                >
                    <Text style = {styles.buttonText}>Login</Text>

                </TouchableOpacity>

                
                <TouchableOpacity
                onPress={handleSignUp}
                style = {[styles.button, styles.buttonOutline]}
                >
                    <Text style = {styles.buttonText}>Register</Text>

                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor:'white',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        margin:5,
        shadowOpacity:0.1

    },
    buttonContainer: {
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    
    button: {
        backgroundColor:'#0782F9',
        marginBottom:15,
        width:'100%',
        borderRadius:10,
        alignItems:'center',
        padding:20,
        color:'blue'
    },
    buttonOutline: {
        backgroundColor:'white',
        borderColor:'#0782F9',
        borderWidth:1
    },
    buttonText: {
        color:'black',
        fontSize:16,
        fontWeight:700
    },
    

})