import React from 'react';
import { StyleSheet, Text } from 'react-native';

function ErrorMessage({error, visible}) {
    if(!visible || !error) return null;
    return (
       <Text style={styles.text} >{error}</Text>
    );
}

export default ErrorMessage;
const styles = StyleSheet.create({
    text:{
        fontSize:18,
        color:'red',
        fontWeight:'600'
    }
})