
import React from "react";
import { StyleSheet, View, Text } from "react-native";
export default function Contato(){
   
    return(
        <View style={styles.container}>
            <Text>Tela CONTATOS</Text>
            
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
