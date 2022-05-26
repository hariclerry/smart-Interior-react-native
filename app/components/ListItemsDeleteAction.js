import React from 'react';
import {
    View, StyleSheet
} from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';

function ListItemsDeleteAction() {
    return (
        <View style={styles.container}>

            <MaterialCommunityIcons name="trash-can" color="white" size={35} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    deleteIcon: {
        position: "absolute",
        top: 40,
        right: 30,
    },

});


export default ListItemsDeleteAction;