import React from 'react';
import { Image, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper'
import { Container, Texto, Botao, Box} from './styles';
import imagem from '../../../assets/dumbbell.jpg';
import nutri from '../../../assets/nutri.jpg';
import perfil from '../../../assets/perfil.jpg';
import Tela from '../Treino/AddTreino/Adicionar';
import { useNavigation } from '@react-navigation/native';

     function Home() {
      const navigation=useNavigation()

        return (
          <Swiper>
            <Container>
              <Image source={imagem} style={styles.img}/>
              <Box>
                <Botao onPress={navigation.navigate('Tela')}>
                  <Texto>Meus Treinos</Texto>
                </Botao>
              </Box>
            </Container>
            <Container>
              <Image source={nutri} style={styles.img}/>
              <Box>
                <Botao>
                  <Texto>Nutricao</Texto>
                </Botao>
              </Box>
            </Container>
            <Container>
              <Image source={perfil} style={styles.img}/>
              <Box>
                <Botao>
                  <Texto>Meu perfil</Texto>
                </Botao>
              </Box>
            </Container>
          </Swiper>
        );
      }
  export default Home;


const styles=StyleSheet.create({
 img: {
   width:'80%',
   height:'80%',
   borderRadius:16,
 }
})
  