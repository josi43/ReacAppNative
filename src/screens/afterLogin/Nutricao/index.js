import React,{useRef, useState, useEffect} from 'react';
import { Image, StyleSheet, View, Text, Animated, Pressable, TextInput} from 'react-native';
import { Linha,Barra, Div, Texto,Botao, Corpo, Titulo} from './styles';



function Nutricao() {
  const[count, setCount]=useState(0);
  const[total, setTotal]=useState('');
  const[size,setSize]=useState(0);
  const[faltam,setFaltam]=useState(0);
  
  const tamanho = size+'%'

  const Adicionar5=() =>{
    if(total==0){
      alert('Insira um total')
    } else if(count>= total){
      alert('voce atingiu seu objetivo!')
    } else{
      setCount(count+5)
      setSize((count/total)*100)
      setFaltam(total-size)
    }
  }
  const Adicionar50=() =>{
    if(total==0){
      alert('Insira um total')
    } else if(count>= total){
      alert('voce atingiu seu objetivo!')
    } else{ 
      setCount(count+50)
      setSize((count/total)*100)
      setFaltam(total-size)
    }
  }
  const Adicionar100=() =>{
    if(total==0){
      alert('Insira um total')
    } else if(count>= total){
      alert('voce atingiu seu objetivo!')
    } else{
      setCount(count+100)
      setSize((count/total)*100)
      setFaltam(total-size)
    }
  }
  const Tirar5=() =>{
    if(total==0){
      alert('adiconar um total antes')
    } else{
      setCount(count-5)
    setSize((count/total)*100)
    setFaltam(total-size)
    }
  }
  const Tirar50=() =>{
    if(total==0){
      alert('adiconar um total antes')
    } else{
      setCount(count-50)
    setSize((count/total)*100)
    setFaltam(total-size)
    } 
  }
  const Tirar100=() =>{
    if(total==0){
      alert('adiconar um total antes')
    } else{
      setCount(count-100)
    setSize((count/total)*100)
    setFaltam(total-size)
    } 
  }


  return (
  
      <Div>
      
        <Titulo>Nutricao</Titulo>
        <Linha style={{marginTop:80}}>
          <Texto>Quantas Calorias vou consumir hoje?</Texto>
          <TextInput placeholder='Calorias Totais' keyboardType='numeric' value={String(total)} onChangeText={t=>setTotal(t)} style={{padding:8}}></TextInput>
        </Linha>
        <Corpo>
        <Texto>06 junho</Texto>
        </Corpo>
        
        <Linha>
          <Texto>Faltam</Texto>
          <Barra>
            <Animated.View style={{backgroundColor:'#FA6300', width:tamanho, borderRadius:80}}/>
          </Barra>
          <Texto>total</Texto>
        </Linha>
        <Linha style={{marginTop:-25}}>
          <Texto>{total-count} Kcal</Texto>
            <Barra style={{backgroundColor:'#ecf0f1', width:'90%'}}>
            </Barra>
          <Texto>{total} Kcal</Texto>
        </Linha>
        <Linha>
          <Botao onPress={Adicionar5}>
            <Texto>+ 5 Calorias</Texto>
          </Botao>
          <Botao onPress={Adicionar50}>
            <Texto>+ 50 Calorias</Texto>
          </Botao>
          <Botao onPress={Adicionar100}>
            <Texto>+ 100 Calorias</Texto>
          </Botao>
        </Linha>
        <Linha style={{marginTop:16}}>
          <Botao onPress={Tirar5}>
            <Texto>- 5 Calorias</Texto>
          </Botao>
          <Botao onPress={Tirar50}>
            <Texto>- 50 Calorias</Texto>
          </Botao>
          <Botao onPress={Tirar100}>
            <Texto>- 100 Calorias</Texto>
          </Botao>
        </Linha>
      </Div>
);}
export default Nutricao;
