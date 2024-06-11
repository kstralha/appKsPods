import React from "react";
import { StyleSheet } from "react-native";
import Logo from './logo.png';

const styles = StyleSheet.create({
    logo: {
        width: 300,
        height: 300,
        alignSelf: "center",
    },
    fotoFitas: {
        height: 500,
        alignSelf: "center",
    },
    sobre:{
        backgroundColor: "black",
        paddingVertical: 8,
        paddingHorizontal: 16,
      },
    textoSobre: {
        fontSize: 20,
        lineHeight: 26,
        marginBottom: 10,
        color: "white",
        textAlign: "justify"
    },
})

export default styles;