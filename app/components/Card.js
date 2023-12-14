import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import colors from '../config/colors';

function Card({title,subTitle,image}) {
    return (
        <View style={styles.card}>
            <Image style= {styles.image}source={image}/>
            <View style={styles.detailsText}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
        </View>
    );
}

export default Card;
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:'hidden',
    },
    image:{
        width:"100%",
        height:200,
    },
    detailsText:{
        padding:20,
    },
    title:{
        fontSize:18,
        marginBottom:7,
    },
    subTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.secondary,    
    }

})