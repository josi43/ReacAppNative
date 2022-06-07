import React from 'react';
import styled from 'styled-components/native' ;

export const Container = styled.SafeAreaView`
  flex:1;
  justify-content: flex-start;
  padding-top:8px;
`;

export const Texto= styled.Text`
  color:white;
  font-weight:bold;
  font-size:12px;
`;
export const Header= styled.Text`
  color:black;
  font-weight:bold;
  font-size:20px;
`;

export const Box=styled.View`
  background-color:#FA6300;
  border-radius:16px;
  align-items:center;
  height:150px;
  margin:5px;
`;
export const MiniBox=styled.View`
background-color:#03466F;
border-radius:16px;
width:60px;
height:60px;
align-items:center;
padding:8px;
margin-top:8px
margin-horizontal:16px;
`;

export const Linha=styled.View`
  flex-direction:row;
  width:100%;
  align-items:flex-start;
  justify-content: space-between;
`;
export const LinhaBt=styled.View`
  flex-direction:row;
  width:80px;
  align-items:flex-start;
  justify-content: space-evenly;
  margin-top:8px;
  margin-horizontal:10px;

`;


export const Botao= styled.TouchableOpacity`
  height:20px;
  width:20px;
  background-color:#03466F;
  border-radius:30px;
  justify-content:center;
  align-items:center;
`;


