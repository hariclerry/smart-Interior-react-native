import React, { useState } from 'react';
import {
    FlatList
} from 'react-native';

import { ListItemsDeleteAction, ListItemSeparator, ListItem } from "../components/lists";
import Screen from '../components/commons/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/avatar2.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/avatar2.jpg')
    }
]
function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        //Delet the message from messages array...
        const newMessages = messages.filter(m => m.id !== message.id);
        setMessages(newMessages);
    }
    return (

        <Screen >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        isShowChevron
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Touched----", item)}
                        renderRightActions={() => <ListItemsDeleteAction onPress={() => handleDelete(item)} />}

                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/avatar2.jpg')
                        },
                    ]);
                }}
            />
        </Screen>
    );
}

// const styles = StyleSheet.create({

// });


export default MessagesScreen;