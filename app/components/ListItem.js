import React from 'react';
import { Image, StyleSheet, View ,Text, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function ListItem({title, subTitle, image, ImageComponent, onPress, renderRightActions}) {
    return (
        <GestureHandlerRootView>
          <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                underlayColor={colors.light} 
                onPress={onPress} >
              <View style={styles.container}>
                {ImageComponent}
                {image && <Image style={styles.image}  source={image}/>}
                <View style={styles.detailContainer}>
                  <Text style={styles.title}>{title}</Text>
                  {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
                </View>
             </View>
            </TouchableHighlight>
          </Swipeable>
        </GestureHandlerRootView>
    );
}

export default ListItem;
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        paddingTop:15,
        backgroundColor:colors.white,
    },
    image:{
        width:70,
        height:70,
        borderRadius:'35',
    },
    detailContainer:{
      marginLeft:15,
      justifyContent : 'center',
    },
    title:{
        fontSize:18,
        marginBottom:5,
        fontWeight:'bold',
        color:colors.black,
    },
    subTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:colors.gray,  
    }
})