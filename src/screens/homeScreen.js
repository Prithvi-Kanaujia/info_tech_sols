import React, { Component, useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet,Text, TextInput, TouchableOpacity, View } from 'react-native'
import {auth,app} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [data,setData] = useState('')
    const navigation = useNavigation()
    const apicall = async()=> {
        try{

            const response = await fetch("https://www.affirmations.dev/");
            const crack = await response.json();
            const affirmation=JSON.stringify(crack['affirmation'])
            console.log(JSON.stringify(crack['affirmation']));
            setData(affirmation);
            return <Text style = {styles.buttonText}>Random activty suggestion: </Text>;
        }catch{
            return '';
        }
    };
    

    const appSignOut = async() =>{
        try {
        const response = await signOut(auth);
        console.log(response);
        alert('Check Emails');
        navigation.replace("Login");
    }catch(e) { 
            return {error:e};
        }
    };
    return (
        <KeyboardAvoidingView
        style = {styles.container}>
        <View style = {styles.buttonContainer}>
        <TouchableOpacity
        onPress={apicall}
        style = {styles.button}
        >
        <Text style = {styles.affirmationStyle}>Press for your daily affirmation</Text>
        </TouchableOpacity>
        <Text>{data}</Text>

        
        <TouchableOpacity
        onPress={appSignOut}
        style = {[styles.button, styles.buttonOutline]}
        >
            <Text style = {styles.affirmationStyle}>Sign out</Text>

        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    affirmationStyle:{
        justifyContent:'center',
        textAlign:'center'
    },
    inputContainer: {
        width: '80%'
    },
    apiResponse:{
        margin:2
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
        borderWidth:1,
        marginTop:20
    },
    buttonText: {
        color:'black',
        fontSize:16,
        fontWeight:700
    },
    

})