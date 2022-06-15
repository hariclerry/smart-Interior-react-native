import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import defaultStyles from "../../config/styles";

function AppButton({ title, onPress, color = 'primary' }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: defaultStyles.colors[color] }]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: defaultStyles.colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginTop: 10,
        height: 50,
    },
    text: {
        color: defaultStyles.colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold'

    }

})

export default AppButton;
