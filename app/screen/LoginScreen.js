import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import AppButton from "../components/AppButton";
import AppField from '../components/AppField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import SubmitButton from '../components/SubmitButton';

const validationSchema = Yup.object().shape({
    email:Yup.string().required().email().label('Email'),
    password:Yup.string().required().min(4).label('Password'),
})


function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
            <Formik
                initialValues={{email:'', password:''}}
                onSubmit={(values)=>console.log(values)}
                validationSchema={validationSchema}
            >
                {() =>(
                    <>
                        <AppField 
                            icon="email"
                            placeholder="Email"
                            autoCapitalize='none'
                            name="email"
                            autoCorrect={false}
                            textContentType="emailAddress"
                        />
                        <AppField
                            icon="lock"
                            placeholder="Password"
                            autoCapitalize='none'
                            name="password"
                            autoCorrect={false}
                            secureTextEntry
                            textContentType="password"
                        />
                        <SubmitButton  title= "Login"/>
                    </>
                )}
            </Formik>
        </View>
    );
}

export default LoginScreen;
const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    logo:{
        width:80,
        height:80,
        alignSelf: 'center',
        margin:20,
        marginTop:40,

    }
})




