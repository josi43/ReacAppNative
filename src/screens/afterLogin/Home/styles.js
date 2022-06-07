import React from 'react';
import styled from 'styled-components/native' ;

export const Container = styled.SafeAreaView`
  flex:1;
  justify-content: center;
  align-items: center;
  backgroundColor:white;
`;

export const Texto= styled.Text`
  color:black;
  font-weight:bold;
`;

export const Box=styled.View`
  width:40%;
  margin-vertical:24px;

`;


export const Botao= styled.TouchableOpacity`
  height:44px;
  background-color:#FA6300;
  border-radius:30;
  justify-content:center;
  align-items:center;
  widht:100px
`;
