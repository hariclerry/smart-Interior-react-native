import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppText from "./AppText";
import defaultStyles from "../../config/styles";

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.white,
        marginBottom: 20,
        overflow: "hidden",
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: defaultStyles.colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    },
});

export default Card;