import React, { Component,useState } from 'react';
import { Container, Texto, Botao, MiniBox, Box,Linha, LinhaBt, Header, Caixa} from './styles';
import { FloatingAction } from "react-native-floating-action";
import { Ionicons } from '@expo/vector-icons'; 
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Animated, Platform,TextInput } from 'react-native';
 


export default class MyApp extends Component
{    
    constructor()
    {
        super();
        this.Adicionar= this.Adicionar.bind(this);
        this.state = { 
          ViewArray: [], 
          carga: 0,
          Disable_Button: false 

        }
 
        this.animatedValue = new Animated.Value(0);
        this.Array_Value_Index = 0;
        
    }
    Adicionar(e){
        this.setState(function(previousState, currentProps) {
            return {
              carga: previousState.carga + 1
            };
          });      
    }
    Add_New_View_Function = () =>
    {  
        this.animatedValue.setValue(0);
        let New_Added_View_Value = { Array_Value_Index: this.Array_Value_Index }
        this.setState({ Disable_Button: true, ViewArray: [ ...this.state.ViewArray, New_Added_View_Value ] }, () =>
        {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true
                }
            ).start(() =>
            {
                
                this.Array_Value_Index = this.Array_Value_Index + 1;
                
                this.setState({ Disable_Button: false });
            }); 
        });              
    }

    render()
    {
        const AnimationValue = this.animatedValue.interpolate(
        {
            inputRange: [ 0, 1 ],

            outputRange: [ -59, 0 ]
        });
 
        let Render_Animated_View = this.state.ViewArray.map(( item, key ) =>
        {
            if(( key ) == this.Array_Value_Index)
            {
                return(

                    <Animated.View 
                      key = { key } 
                      style = {[ styles.Animated_View_Style, { opacity: this.animatedValue, transform: [{ translateY: AnimationValue }] }]}>
                    </Animated.View>
                
              );  
            }
            else
            {
                return(
                    <Box 
                      key = { key }>
                        <Header>Supino</Header>
                        <Linha>
                            <Caixa>
                                <MiniBox>
                                    <Texto>Carga</Texto>
                                    <Texto>{this.state.carga}</Texto>
                                </MiniBox>
                                <LinhaBt>
                                    <Texto>1</Texto>
                                    <Botao onPress={this.Adicionar}>
                                    <Texto>+</Texto>
                                    </Botao>
                                    <Botao>
                                    <Texto>-</Texto>
                                    </Botao>
                                </LinhaBt>
                                <LinhaBt>
                                    <Texto>5</Texto>
                                    <Botao>
                                    <Texto>+</Texto>
                                    </Botao>
                                    <Botao>
                                    <Texto>-</Texto>
                                    </Botao>
                                </LinhaBt>
                            </Caixa>
                            <Caixa>
                                <MiniBox>
                                    <Texto>Repeticoes</Texto>
                                    <Texto>0</Texto>
                                </MiniBox>
                                <LinhaBt>
                                    <Texto>1</Texto>
                                    <Botao>
                                    <Texto>+</Texto>
                                    </Botao>
                                    <Botao>
                                    <Texto>-</Texto>
                                    </Botao>
                                </LinhaBt>
                                <LinhaBt>
                                    <Texto>5</Texto>
                                    <Botao>
                                    <Texto>+</Texto>
                                    </Botao>
                                    <Botao>
                                    <Texto>-</Texto>
                                    </Botao>
                                </LinhaBt>
                            </Caixa>
                        </Linha>
                    </Box>

                );
            }
        });
        
        return(
            <View style = { styles.MainContainer }>
                <ScrollView>
                
                    <View style = {{ flex: 1, padding: 2 }}>
                    {
                        Render_Animated_View
                    }
                    </View>

                </ScrollView>
 
                <TouchableOpacity 
                activeOpacity = { 0.7 } 
                style = { styles.TouchableOpacityStyle } 
                disabled = { this.state.Disable_Button } 
                onPress = { this.Add_New_View_Function }>
 
                    <Ionicons name="add-circle" size={50} color="#FA6300" 
                     
                    style = { styles.FloatingButtonStyle }
                    />
                </TouchableOpacity>
            </View>
        );
    }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    Animated_View_Style:
    {
        height: 160,
        backgroundColor: '#FA6300',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius:16,
    },

    TouchableOpacityStyle:{
  
      position: 'absolute',
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 30,
      Color:'#03466F'
    },

    FloatingButtonStyle: {
  
      resizeMode: 'contain',
      width: 50,
      height: 50,
    }
});