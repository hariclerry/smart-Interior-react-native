import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';


import colors from '../config/colors';

function Card({ image, subTitle, title }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{subTitle}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: '#fff',
        marginBottom: 20,
        overflow: 'hidden',
    },
    text: {
        color: colors.black,
        fontSize: 18,
        // padding: 10


    },
    image: {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
})
export default Card;