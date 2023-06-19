import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import AppButton from '../components/commons/AppButton';
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={8}
            source={require('../assets/landing-page.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-original-removebg.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Smart Home Decor</Text>
                <Text style={styles.tagline}>A marketplace to sell your used home interior Accessories</Text>
            </View>

            <View style={styles.buttonContainers}>
                <AppButton
                    title="Login"
                    onPress={() => navigation.navigate(routes.LOGIN)}
                />
                <AppButton
                    title="Register"
                    color="secondary"
                    onPress={() => navigation.navigate(routes.REGISTER)}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 40,
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    },
    buttonContainers: {
        padding: 20,
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        paddingVertical: 10,
    },
    tagline: {
        fontSize: 18,
        fontWeight: "300",
        paddingVertical: 3,
        fontStyle: 'italic',
        textAlign: 'center',
    }

})
export default WelcomeScreen;