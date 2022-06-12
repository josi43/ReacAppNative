import React from 'react';
import styled from 'styled-components/native' ;

export const Container = styled.SafeAreaView`
  flex:1;
  justify-content: center;
  align-items: center;
`;

export const Barra= styled.View`
  height:40px;
  flex-direction:row;
  width:100%;
  background-color: white;
  margin-horizontal:8px
  border-radius: 40px;
  margin-vertical:16px
`;

export const Div=styled.View`
  flex:1;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ecf0f1;
  padding:32px;
`;
export const Titulo=styled.Text`
  font-weight:bold;
  color: black;
  font-size:24px;
`;
export const Botao=styled.TouchableOpacity`
  height:44px;
  background-color:#FA6300;
  border-radius:30px;
  justify-content:center;
  align-items:center;
  padding:8px;
  margin-horizontal:8px;

`;
export const Corpo=styled.View`
  margin-top:80px;
`;

export const Linha=styled.View`
  width:75%;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;
export const Texto=styled.Text`
  font-weight:bold;
  color: black;
`;