import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Rodape = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>Este é o rodapé da página rosa.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#FFC0CB", // Rosa claro
        padding: 10,
        alignItems: "center",
    },
    text: {
        color: "#FF69B4", // Rosa médio
        fontSize: 14,
    },
});

export default Rodape;
