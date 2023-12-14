import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';

import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

function MessagesScreen(props) {
    const initialMessages=[
        {id:1,title:'T1',description:'D1',image:require("../assets/jacket.jpg")},
        {id:2,title:'T2',description:'D2',image:require("../assets/jacket.jpg")},
        {id:3,title:'T3',description:'D3',image:require("../assets/jacket.jpg")},
        {id:4,title:'T4',description:'D4',image:require("../assets/jacket.jpg")},
        {id:5,title:'T5',description:'D5',image:require("../assets/jacket.jpg")},

    ]

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        const newmsg = messages.filter(msg => msg.id !== message.id);
        setMessages(newmsg);
    }
    return (
        <Screen>
        <FlatList
            data={messages}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
                <ListItem
                    title= {item.title}
                    subTitle={item.description}
                    image={item.image} 
                    onPress={()=>console.log("pressed!")}
                    renderRightActions={()=>( 
                        <ListItemDeleteAction onPress={()=>handleDelete(item)}/>
                    )}
                /> )}
                ItemSeparatorComponent={ListItemSeparator} 
                refreshing={refreshing}
                onRefresh={()=>{
                    setMessages([
                    {id:2,title:'T2',description:'D2',image:require("../assets/jacket.jpg")},
                    {id:3,title:'T3',description:'D3',image:require("../assets/jacket.jpg")},
                    {id:4,title:'T4',description:'D4',image:require("../assets/jacket.jpg")},
                    {id:5,title:'T5',description:'D5',image:require("../assets/jacket.jpg")}
                    ])
                }   }
                />
        </Screen>
    );
}
export default MessagesScreen;

const styles = StyleSheet.create({
    
})