import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function Home(props) {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/banner.png")} style={{ width: "80%", height: "30%" }} resizeMode="contain" />
            <Text style={styles.header}>Getting Started</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Text style={styles.description}>Ut in laoreet orci, id fringilla lacus.</Text>
            <Text style={styles.description}>Vestibulum varius mauris in eros scelerisque egestas.</Text>
            <TouchableOpacity style={styles.startBtn} onPress={() => props.navigation.navigate("Login")}>
                <Text style={styles.startText}>START NOW</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#375177",
        marginBottom: 10
    },
    description: {
        fontSize: 12,
        color: "gray",
        padding: 5
    },
    startBtn: {
        backgroundColor: "#90bdff",
        borderRadius: 50,
        padding: 10,
        width: "50%",
        alignItems: "center",
        marginTop: 50
    },
    startText: {
        color: "white"
    }
});