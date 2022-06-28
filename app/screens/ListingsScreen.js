import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/commons/Screen";
import Card from "../components/commons/Card";
import defaultStyles from "../config/styles";

const listings = [
    {
        id: 1,
        title: "Flower vase",
        price: 100,
        image: require("../assets/flower-vase.jpg"),
    },
    {
        id: 2,
        title: "Sitting Stools",
        price: 1000,
        image: require("../assets/background2.jpg"),
    },
];

function ListingsScreen({ navigation }) {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: defaultStyles.colors.light,
    },
});

export default ListingsScreen;