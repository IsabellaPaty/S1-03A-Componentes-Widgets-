import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Meio() {
    return (
        <View style={styles.content}>
            <Text style={styles.title}></Text>
            <Text style={styles.paragraph}>
                O cachorro salsicha, também conhecido como Dachshund, é uma raça de cachorro de origem alemã 
                que se destaca pelo corpo longo e baixo, pernas curtas e orelhas pendentes.
                Eles são conhecidos por seu temperamento afetuoso, corajoso e curioso, e são uma das raças 
                mais populares em muitos países.
            </Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('/')}
                    style={styles.image}
                />
                <Image
                    source={require('/')}
                    style={styles.image}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#FFFF", // Rosa claro
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#FF69B4", // Rosa médio
    },
    paragraph: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
    },
    imageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 150,
        height: 150,
        marginHorizontal: 5,
        borderRadius: 10,
    },
});

export default Meio;
