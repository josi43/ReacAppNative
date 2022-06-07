import React from 'react';
import styled from 'styled-components/native' ;

export const Container = styled.SafeAreaView`
  background-color: #ffffff;
  flex:1;
  justify-content: center;
  align-items: center;
`;


export const InputArea=styled.View`
  padding-top:56px;
  width: 100%;
  padding-horizontal:40px;
  
`;

export const Botao=styled.TouchableOpacity`
  height:44px;
  background-color:#FA6300;
  border-radius:30;
  justify-content:center;
  align-items:center;
`;
export const BotaoText=styled.Text`
  color:#ffffff;
  font-size:18;
  `;


export const CadastrarBotao=styled.TouchableOpacity`
  height:44px;
  border-radius:30;
  justify-content:center;
  align-items:center;  
  background-color:#03466F;
  margin-top:15px;

  
`;

export const Texto=styled.View`
  justify-content:center;
  align-items:center;
  margin-vertical:16px; 
`;

