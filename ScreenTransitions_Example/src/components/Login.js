import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function Login(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>LOGIN</Text>
            <TextInput style={styles.input} placeholder="Email..." />
            <TextInput style={styles.input} placeholder="Password..." secureTextEntry />
            <TouchableOpacity style={styles.startBtn}>
                <Text style={styles.startText}>LOGIN</Text>
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
        fontSize: 30,
        color: "#375177",
        marginBottom: 20
    },
    input: {
        borderWidth: 1,
        borderColor: "#375177",
        borderRadius: 50,
        width: "80%",
        height: 40,
        marginBottom: 20,
        padding: 10
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