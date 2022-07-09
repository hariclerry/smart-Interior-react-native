import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Screen from "../components/commons/Screen";
import Card from "../components/commons/Card";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import defaultStyles from "../config/styles";
import AppText from "../components/commons/AppText";
import AppButton from "../components/commons/AppButton";
import ActivityIndicator from "../components/commons/ActivityIndicator";
import useApi from "../hooks/useApi";

function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);


    useEffect(() => {
        getListingsApi.request();
    }, [])

    return (
        <Screen style={styles.screen}>
            {!!getListingsApi.error && (
                <>
                    <AppText> Couldn't retrieve the listings</AppText>
                    <AppButton title='Retry' onPress={getListingsApi.request} />
                </>
            )}
            <ActivityIndicator visible={getListingsApi.loading} />
            <FlatList
                data={getListingsApi.data}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
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