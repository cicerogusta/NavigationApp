import React, { useLayoutEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
export default function Sobre(){
    const route = useRoute()
    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:route.params?.nome === '' ? 'Página Sobre' : route.params?.nome
        })

    }, [navigation])
    return(
        <View style={styles.container}>
            <Text>Tela SOBRE</Text>
            <Text>{route.params?.email}</Text>
            <Text>{route.params?.nome}</Text>
            <Button title="TELA CONTATOS" onPress={()=>{
                navigation.navigate('Contato')
            }}/>
            <Button title="Voltar tela" onPress={()=>{
                navigation.goBack()
            }}/>
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
