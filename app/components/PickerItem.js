import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function PickerItem({label, onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}
export default PickerItem;

const styles = StyleSheet.create({
    text:{
        fontSize:18,
        padding:20,
    }
})