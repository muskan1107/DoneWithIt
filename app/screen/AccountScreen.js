import React from 'react';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import { StyleSheet, View ,FlatList} from 'react-native';
import colors from '../config/colors';
import Icon from '../components/Icon';

const menuItem=[{
    title:"My Listing",
    icon:{
        name:"format-list-bulleted",
        backgroundColor:colors.primary
    }
},
{
    title:"My Messages",
    icon:{
        name:"email",
        backgroundColor:colors.secondary
    }
}]

function AccountScreen(props) {
    return (
      <Screen style={styles.screen}>
        <View style={styles.conatiner}>
          <ListItem 
            title="Muskan" 
            subTitle="muskan123@gmail.com" 
            image={require("../assets/jacket.jpg")}
          />
        </View>
        <View>
            <FlatList 
                data={menuItem}
                keyExtractor={item => item.title}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({item}) => 
                    <ListItem title={item.title} 
                    ImageComponent={
                        <Icon 
                            name={item.icon.name} 
                            backgroundColor={item.icon.backgroundColor}
                        />
                    }/>
                }
            />
        </View>
        <ListItem 
            title="Log Out"
            ImageComponent={
                <Icon name="logout" backgroundColor='#ffe66d'/>
            }
            />
      </Screen>
    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    screen:{
        backgroundColor:colors.light,
    },
    conatiner:{
        marginVertical:10,
    },

})