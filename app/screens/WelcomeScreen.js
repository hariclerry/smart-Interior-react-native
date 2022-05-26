import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={8}
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/smart-logo-removebg.png')}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Accessorize your Home</Text>
            </View>

            <View style={styles.buttonContainers}>
                <AppButton title='Login' onPress={() => console.log("Tapped")} />
                <AppButton title='Register' onPress={() => console.log("Tapped")} color='secondary' />
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
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 10,
    }

})
export default WelcomeScreen;