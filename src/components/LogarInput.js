import React from 'react';
import styled from 'styled-components/native'

const InputArea=styled.View`
  width:100%;
  height:60px;
  background-color: lightgray;
  flex-direction: row;
  padding-left:15px
  align-items:center;
  margin-bottom: 15px;
  border-radius:30px;
  color:#000000
`;

const Input =styled.TextInput`
  flex:1;
  font-size:16px;
  color:#000000;
  margin-left:10px;
`;

export default({Iconsvg, placeholder, value, onChangeText, password})=>{
  return(
    <InputArea>
      <Iconsvg widht='24' height="24" fill="#000000" />
      <Input
      placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={password}
      placeholderTextColor="black" 
      />

    </InputArea>
  );
};

