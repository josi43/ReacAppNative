import React from 'react';
import { Image, StyleSheet, View, Text, Animated} from 'react-native';
import { Container, Barra} from './styles';



     function Nutricao() {
        return (
          <View style={styles.container}>
          <Text>
            Loading.....
          </Text>
          <View style={styles.progressBar}></View>
          <Animated.View style={styles.absoluteFill}/>
          <Text>50%</Text>
        </View>
        );
      }
  export default Nutricao;



  const styles = StyleSheet.create({
    container: {
     flex: 1,
     flexDirection: "column", //column direction
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#ecf0f1',
     padding: 8,
   },
    progressBar: {
      height: 20,
      flexDirection: "row",
      width: '100%',
      backgroundColor: 'white',
      borderColor: '#000',
      borderWidth: 2,
      borderRadius: 5
   },
   absoluteFill: {
    backgroundColor: "#8BED4F", width: "50%"
   }
   
  });