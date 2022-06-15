import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Screen from "../components/commons/Screen";
import { ListItemSeparator, ListItem } from "../components/lists";
import defaultStyles from "../config/styles";
import Icon from "../components/commons/Icon";

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: defaultStyles.colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: defaultStyles.colors.secondary,
        },
    },
];

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Harriet"
                    subTitle="clerryha@gmail.com"
                    image={require("../assets/avatar2.jpg")}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    )}
                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: defaultStyles.colors.light,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;