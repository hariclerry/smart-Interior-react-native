import { useEffect } from "react";
import * as Permissions from "expo-permissions";
import * as Notifications from 'expo-notifications';

import ExpoPushTokensApi from "../api/expoPushTokens";

export default useNotifications = (notificationListener) => {

    useEffect(() => {
        registerForPushNotifications();
        if (notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener)
    }, [])
}

const registerForPushNotifications = async () => {
    try {
        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!permission.granted) return;

        const token = await Notifications.getExpoPushTokenAsync();
        ExpoPushTokensApi.register(token);
    } catch (error) {
        console.log("An error has occured", error);
    }
}