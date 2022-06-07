import React,{useEffect, useState} from 'react';
import { Image, View, Text, TextInput, Button, ImageBackground, StyleSheet, SafeAreaView, Pressable } from 'react-native';
import { Container,
    InputArea,
    Botao,
    BotaoText,
    CadastrarBotao,
    Texto,

     } from './styles';
import { useNavigation } from '@react-navigation/native';
import imagem from '../../../assets/fitness.jpg';
import logo from '../../../assets/cadimia.png'

export default function PrimeiraPag() {
    const navigation=useNavigation();




    const handleClick= () =>{
        
    }
    
    const handleLogarClick= () => {
        navigation.reset({
            routes:[{name:'login'}]
        });
    }


    const handleCadastrarClick=() => {
        navigation.reset({
            routes:[{name:'cadastrar'}]
        });
    }
    return (
        
        <Container>
            <ImageBackground source={imagem} style={{flex:1, width:'100%', height:'100%'}}>
                <Texto>
                <Image source={logo} style={{width:160, height:160, marginTop:200}}/>
                </Texto>
                <InputArea>
                    <Botao onPress={handleLogarClick}>
                    <BotaoText>Ja sou cadastrado</BotaoText>
                    </Botao>
                    <Texto><Text style={{fontSize:16, color:'white'}}>Ou</Text></Texto>
                    <CadastrarBotao onPress={handleCadastrarClick}>
                    <BotaoText>Criar Conta</BotaoText>
                    </CadastrarBotao>
                </InputArea>
            </ImageBackground>
        </Container>
    );
  };

