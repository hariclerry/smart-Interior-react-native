import React from "react";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
} from "react-native";

import AppText from "../commons/AppText";
import defaultStyles from "../../config/styles";

function ListItem({
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
    isShowChevron
}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={defaultStyles.colors.light} onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={1}>{subTitle}</AppText>}
                    </View>
                    {isShowChevron && <MaterialCommunityIcons
                        color={defaultStyles.colors.medium}
                        name="chevron-right"
                        size={25} />}

                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
        padding: 15,
        backgroundColor: defaultStyles.colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: defaultStyles.colors.medium,
    },
    title: {
        fontWeight: "500",
    },
});

export default ListItem;