import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from '../components/NavigationBar';

const QrCodeScreen = ({ route }) => {
    // getting the instance_id form home route
    const { instance_id } = route.params;
    return (
        <LinearGradient style={styles.container}
            colors={["#122929", "#1E4343", "#122929"]}
        >
            <View style={styles.qrContainer}>
                <Text style={styles.title}>Scan the Qr Code</Text>
                <View style={styles.qrImageContainer}>
                    <Text style={{ color: "white" }}>instance_id is: {instance_id}</Text>
                </View>
            </View>
        </LinearGradient>
    );
};

export default QrCodeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "rgb(30,67,64)",
    },
    qrContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: "#608E8E",
        fontSize: 35,
    },
    qrImageContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        maxHeight: 300
    }
});