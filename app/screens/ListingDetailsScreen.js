import React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { Image } from "react-native-expo-image-cache";

import AppText from "../components/commons/AppText";
import ContactSellerForm from "../components/commons/contactSellerForm";
import { ListItem } from "../components/lists";
import colors from "../config/colors";

function ListingDetailsScreen({ route }) {

    const listing = route.params;

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
            >
                <Image
                    style={styles.image}
                    preview={{ uri: listing.images[0].thumbnailUrl }}
                    tint="light"
                    uri={listing.images[0].url}
                />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{listing.title}</AppText>
                    <AppText style={styles.price}>${listing.price}</AppText>
                    <View style={styles.userContainer}>
                        <ListItem
                            image={require("../assets/avatar2.jpg")}
                            title="Harriet Ayugi"
                            subTitle="5 Listings"
                        />
                    </View>
                    <ContactSellerForm listing={listing} />
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 40,
    },
    image: {
        width: "100%",
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 15,
    },
});

export default ListingDetailsScreen;
