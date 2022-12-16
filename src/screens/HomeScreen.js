import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import NavigationBar from '../components/NavigationBar';

export default function HomeScreen({ navigation }) {
    // number for sating
    const number = 2;
    const handlePress = (data) => {
        console.log(data);
    };
    return (

        <LinearGradient style={styles.container}
            colors={["#122929", "#1E4343", "#122929"]}
        >
            <View style={styles.secondContainer}>
                <Text style={styles.title}>Click to Start</Text>
                <TouchableOpacity
                    onPress={() => {
                        /* 1. Navigate to the qr code route with params */
                        navigation.navigate('QrCode', {
                            instance_id: number,
                        });
                    }}
                    style={styles.buttonContainer}>
                    <View style={styles.startButton}>
                        <Text style={styles.buttonText}>{number}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "rgb(30,67,64)",
        justifyContent: "space-between"
    },
    secondContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        maxHeight: 300
    },
    startButton: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2B6262",
        borderRadius: 500,
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    buttonText: {
        fontSize: 75,
        color: "#122929",
        fontWeight: "bold"
    },
    title: {
        color: "#608E8E",
        fontSize: 35,
    }
});