import React from 'react';
import {
    FlatList, StyleSheet, View
} from 'react-native';

import ListItem from '../components/ListItem';
import ListItemsDeleteAction from '../components/ListItemsDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const messages = [
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

    return (

        <Screen >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Touched----", item)}
                        renderRightActions={ListItemsDeleteAction}

                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

// const styles = StyleSheet.create({

// });


export default MessagesScreen;