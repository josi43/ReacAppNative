import React,{useEffect, useState} from 'react';
import { Image, ScrollView } from 'react-native';
import { Container,
    InputArea,
    EsqueceuBotao,
    EsqueceuBotaoText,
    Botao,
    BotaoText,
    CadastrarBotao,

     } from './styles';
import { useNavigation } from '@react-navigation/native';
import { LogarUser } from '../../../Api';


import emailIcon from '../../../assets/email.svg' 
import senhaIcon from '../../../assets/lock.svg'     
import logo from '../../../assets/cadimia.png'
import SignInput from '../../../components/LogarInput'
import Api from '../../../Api'
import { auth } from '../../firebase';

export default function Login() {
    const navigation=useNavigation();

    const[emailField, setEmailField]= useState('');
    const[senhaField, setSenhaField]= useState('');

    const handleClick= () =>{
        
    }
    
    const handleLogarClick= () => {
            auth
            .signInWithEmailAndPassword(emailField, senhaField)
            .then((userCredentials)=> navigation.reset({routes:[{name:'paginaPrincipal'}]}))
            .catch((error)=> alert(error.message));
    }

    const handleCadastrarClick=() => {
        
        navigation.reset({
            routes:[{name:'cadastrar'}]
        });
    }
    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}   keyboardShouldPersistTaps='handled'>
        <Container>
            <Image source={logo} style={{width:150,height:150}}/>
            <InputArea>
                <SignInput Iconsvg={emailIcon} placeholder="Matrícula" value={emailField} onChangeText={t=>setEmailField(t)} />
                <SignInput Iconsvg={senhaIcon} placeholder="Senha" values={senhaField} onChangeText = {t=>setSenhaField(t)} password={true}/>
                <EsqueceuBotao onPress={handleClick}>
                <EsqueceuBotaoText>Esqueceu a senha?</EsqueceuBotaoText>
                </EsqueceuBotao>
                <Botao onPress={handleLogarClick}>
                <BotaoText>Entrar</BotaoText>
                </Botao>
                <CadastrarBotao onPress={handleCadastrarClick}>
                    <BotaoText>Criar Conta</BotaoText>
                </CadastrarBotao>
            </InputArea>
      </Container>
      </ScrollView>
    );
  };

