import React from 'react';
import { StyleSheet, Text, View, Button as ButtonRn } from 'react-native';
import { StatusBar } from 'react-native';
import Header from '../components/Header';
import { Actions } from 'react-native-router-flux';
import { Button } from 'native-base'

export default class MenuPrincipal extends React.Component {
    render() {
        return (
            <View style={estilo.viewPrincioal} >
                <Header titulo='Menu Principal' />
                <StatusBar hidden={true} />


                <View >

                    {/* <ButtonRn title='Navegar para outra tela' onPress={() => Actions.listagemClientes()} /> */}
                    <Button style={estilo.estiloBoton} full rounded onPress={() => Actions.listagemClientes()} danger >
                        <Text style={estilo.textoBtn} >Navegar para outra tela</Text>
                    </Button>
                </View>
            </View>

        )
    }
}

const estilo = StyleSheet.create({
    viewPrincioal: {
        flex: 1,

    },
    textoBtn: {

        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFF'
    },
    estiloBoton: {

    }

})