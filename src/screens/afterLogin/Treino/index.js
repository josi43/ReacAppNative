import React from 'react';
import { Image, StyleSheet, Pressable} from 'react-native';
import { Container, Texto, Botao, MiniBox, Box,Linha, LinhaBt, Header} from './styles';
import { FloatingAction } from "react-native-floating-action";



     function Treino() {
      const actions = [
        {
          text: "Adicionar Treino",
          position: 1,
          name: "NovoTreino",
        },
      ];
        return (
          <Container>
            <Header >Segunda</Header>
            <Box>
              <Header>Supino</Header>
              <Linha>
              <MiniBox>
                <Texto>Carga</Texto>
              </MiniBox>
              <MiniBox>
                <Texto>Carga</Texto>
              </MiniBox>
              </Linha>
              <Linha>
                <LinhaBt>
                <Botao>
                  <Texto>+</Texto>
                </Botao>
                <Botao>
                  <Texto>-</Texto>
                </Botao>
                </LinhaBt>
                <LinhaBt>
                <Botao>
                  <Texto>+</Texto>
                </Botao>
                <Botao>
                  <Texto>-</Texto>
                </Botao>
                </LinhaBt>
              </Linha>
              <Linha>
                <LinhaBt>
                <Botao>
                  <Texto>+</Texto>
                </Botao>
                <Botao>
                  <Texto>-</Texto>
                </Botao>
                </LinhaBt>
                <LinhaBt>
                <Botao>
                  <Texto>-</Texto>
                </Botao>
                <Botao>
                  <Texto>-</Texto>
                </Botao>
                </LinhaBt>
              </Linha>
            </Box>
            <FloatingAction
            actions={actions}
            onPressItem={name => {
              console.log(`selected button: ${name}`);
            }}
            />
          </Container>
        );
      }
  export default Treino;


const styles=StyleSheet.create({
 
})
  