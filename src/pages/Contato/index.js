import { useNavigation, StackActions } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
export default function Contato(){
    const navigation = useNavigation()

    function handleHome(){
        navigation.dispatch(StackActions.popToTop())

    }

    return(
        <View style={styles.container}>
            <Text>Tela CONTATOS</Text>
            <Button title="VOLTAR HOME" onPress={handleHome}/>
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
