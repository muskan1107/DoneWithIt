import React from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import colors from '../config/colors';


function ListingDetailsScreen(props) {
    return (
        <View>
        <Image style= {styles.image} source = {require("../assets/jacket.jpg")}/>
        <View style={styles.detailsText}>
            <Text style={styles.title}>Red jacket for sell</Text>
            <Text style={styles.subTitle}>100$</Text>
        </View>
    </View>
    );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
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