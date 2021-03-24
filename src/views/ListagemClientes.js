import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native';
import Header from '../components/Header';
import FlatListClientes from '../components/FlatListUsuarios'


export default class ListagemClientes extends React.Component {

    constructor() {
        super()

        this.state = {
            dadosUsuário: [
                {
                    nome: 'Patrick Júnior Nazario',
                    idade: '14 anos',
                    status: 'Ativo',
                    cidade: 'Nova Iguaçu',
                    estado: 'RJ',
                },
                {
                    nome: 'Philip Charles David',
                    idade: '70 anos',
                    status: 'Inativo',
                    cidade: 'Nova York',
                    estado: 'EUA',
                },
                {
                    nome: 'Will Carroll Smith',
                    idade: '52 anos',
                    status: 'Ativo',
                    cidade: 'Los Angeles',
                    estado: 'EUA',
                },
                {
                    nome: 'Marlon Lamont Wayans',
                    idade: '48 anos',
                    status: 'Inativo',
                    cidade: 'Londres',
                    estado: 'UE',
                },
                {
                    nome: 'Shawn Mathis Wayans',
                    idade: '50 anos',
                    status: 'Ativo',
                    cidade: 'Londres',
                    estado: 'UE',
                },
                {
                    nome: 'Derval Oliveira Ribeiro',
                    idade: '48 anos',
                    status: 'Inativo',
                    cidade: 'Nova Iguaçu',
                    estado: 'RJ',
                },
                {
                    nome: 'Solange Nazario Silva',
                    idade: '58 anos',
                    status: 'Ativo',
                    cidade: 'Nova Iguaçu',
                    estado: 'RJ',
                },
                {
                    nome: 'Leticia Vitoria Fernandes',
                    idade: '10 anos',
                    status: 'Inativo',
                    cidade: 'Nova Iguaçu',
                    estado: 'RJ',
                },
            ]
        }

    }

    render() {
        return (
            <View style={estilo.viewPrincipal} >
                <StatusBar hidden={true} />
                <Header titulo='Listagem de Clientes' />
                <FlatListClientes data={this.state.dadosUsuário} />
            </View>
        )
    }
}

const estilo = StyleSheet.create({
    viewPrincipal: {
        flex: 1
    }
})