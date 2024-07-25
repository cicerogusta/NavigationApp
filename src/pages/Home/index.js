import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text>Tela HOME</Text>
            <Button title="Ir para Sobre" onPress={()=> navigation.navigate('Sobre')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})