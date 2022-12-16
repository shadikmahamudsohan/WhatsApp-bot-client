import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Button, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

const NavigationBar = ({ navigation }) => {
    return (
        <LinearGradient
            style={styles.navigationBar}
            colors={["#275757", "#1f4242"]}
        >
            {/* <View style={styles.navigationBtn}></View>
            <View style={styles.navigationBtn}></View>
            <View style={styles.navigationBtn}></View>
            <View style={styles.navigationBtn}></View> */}
            <TouchableOpacity onPress={() => { navigation.navigate('Home'); }}>
                <View style={styles.navigationBtn}>
                    <FontAwesome style={styles.icon} name="home" />
                </View>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default NavigationBar;

const styles = StyleSheet.create({
    navigationBar: {
        width: "100%",
        backgroundColor: "#1E4343",
        flex: 1,
        maxHeight: 70,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: 'row'
    },
    navigationBtn: {
        width: 55,
        height: 55,
        borderRadius: 100,
        backgroundColor: "#122929",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        fontSize: 30,
        color: "#275757"
    }
});