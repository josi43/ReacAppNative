import React,{useState} from 'react';
import { Image, Keyboard,TouchableWithoutFeedback,ScrollView } from 'react-native';
import { Container,
    InputArea,
    EsqueceuBotao,
    EsqueceuBotaoText,
    Botao,
    BotaoText,

     } from './styles';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase';

import emailIcon from '../../../assets/email.svg' 
import senhaIcon from '../../../assets/lock.svg'     
import logo from '../../../assets/cadimia.png'
import SignInput from '../../../components/LogarInput'


export default function Cadastrar() {
    const navigation=useNavigation();

    const[emailField, setEmailField]= useState('');
    const[senhaField, setSenhaField]= useState('');
    const[confirmSenhaField, setConfirmSenhafield]=useState('');

    const handleClick= () =>{
        if(senhaField !== confirmSenhaField){
            alert('senhas diferentes');

        } else if(emailField !='' && senhaField != ''){
            auth
            .createUserWithEmailAndPassword(emailField,senhaField)
            .then(userCredentials => navigation.reset({routes:[{name:'login'}]}))
            .catch(error => alert(error.message)) 
        }else{
            alert('Preencha os campos');
        } 
    }

    const voltar=() => {
        
        navigation.reset({
            routes:[{name:'login'}]
        });
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}   keyboardShouldPersistTaps='handled'>
        <Container>
            <Image source={logo} style={{width:150,height:150, marginTop:24}}/>
            <InputArea>
                <SignInput Iconsvg={emailIcon} placeholder="Email" value={emailField} onChangeText={t=>setEmailField(t)} />
                <SignInput Iconsvg={senhaIcon} placeholder="Senha" values={senhaField} onChangeText={t=>setSenhaField(t)} password={true}/>
                <SignInput Iconsvg={senhaIcon} placeholder="Confirmar senha" values={confirmSenhaField} onChangeText={t=>setConfirmSenhafield(t)} password={true}/>
                
                <Botao onPress={handleClick}>
                <BotaoText>Cadastrar</BotaoText>
                </Botao>
                <EsqueceuBotao onPress={voltar}>
                    <EsqueceuBotaoText>Ja possui uma conta? Clique aqui.</EsqueceuBotaoText>
                </EsqueceuBotao>
            </InputArea>
      </Container>
      </ScrollView>

    );
  };
