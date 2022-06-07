import React, {useEffect} from 'react';
import {Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {Container, LoadingIcon} from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../../../assets/cadimia.png'
import {useNavigation} from '@react-navigation/native';


export default ()=>{
    const navigation= useNavigation();
  
    useEffect(()=>{
      const checkToken=async()=> {
          const token=await AsyncStorage.getItem('token');
          if(token){
            // validar token
          } else{
              navigation.navigate('primeiraPag')
          }
      }
      checkToken();
    }, []);
  
  
    return(
      <Container>
        <Image source={Logo} style={{width:200,height:200}} />
        <LoadingIcon size="large" color="#FA6300"/>
      </Container>
    );
  }