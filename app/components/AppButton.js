import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors'

function AppButton({title, onPress, color="primary"}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor:colors[color]}]} onPress={onPress}>
            <Text style={styles.textBtn}>{title}</Text>
        </TouchableOpacity>
    );
}
export default AppButton;
const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        borderRadius:25,
        justifyContent:'center',
        alignItems: 'center',
        width:'100%',
        padding:15,
        marginVertical:10,
    },
    textBtn:{
        color:colors.white,
        fontSize:18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
})