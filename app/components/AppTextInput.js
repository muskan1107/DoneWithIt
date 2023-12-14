import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import defaultStyls from '../config/styles';

function AppTextInput({icon, ...args}) {
    return (
        <View style={styles.conatiner}>
            {icon && <MaterialCommunityIcons 
                name={icon} 
                size={20} 
                color={colors.medium}
                style={styles.icon}
            />}
            <TextInput style={defaultStyls.text} {...args}/>
        </View>
    );
}

export default AppTextInput;

const styles = StyleSheet.create({
    conatiner:{
        width:"100%",
        backgroundColor:colors.light,
        flexDirection:'row',
        borderRadius:25,
        marginVertical:10,
        padding:15,
    },
    icon:{
        marginRight:10,
        // color:colors.primary,
    }
})