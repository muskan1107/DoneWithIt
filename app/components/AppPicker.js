import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PickerItem from './PickerItem';

function AppPicker({selectedItem, onSelectItem, icon, items, placeholder}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
         <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
          <View style={styles.conatiner}>
            {icon && <MaterialCommunityIcons 
                name={icon} 
                size={20} 
                color={colors.medium}
            />}
               
            <Text style={styles.text}>{selectedItem?selectedItem.label:placeholder}</Text>
            <MaterialCommunityIcons 
                name="chevron-down" 
                size={20} 
                color={colors.medium}
                style={styles.icon}
            />
          </View>
         </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide' >
            <Button title='Close' onPress={()=>setModalVisible(false)} />
            <FlatList 
                data={items}
                keyExtractor={item=>item.value.toString()}
                renderItem={({item})=>(
                    <PickerItem
                        label={item.label}
                        onPress={()=>{
                            setModalVisible(false);
                            onSelectItem(item);
                        }}
                    />
                )}
            />
        </Modal>
        </>
    );
}

export default AppPicker;

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
    },
    text:{
        fontSize:16,
        flex:1,
        marginLeft:5,
    }
})