import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home/index';
import Nutricao from '../Nutricao/index';
import Treino from '../Treino/index';
import Perfil from '../Perfil/index';
import Tela from '../Treino/AddTreino/Adicionar';

import {Pressable} from 'react-native';
import LogOut from '../../../assets/logout.svg'
import { MaterialCommunityIcons, FontAwesome5  } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


function PaginaPrincipal() {
  return (
        <Tab.Navigator initialRouteName="paginaPrincipal" screenOptions={{
        title: 'PowerFit',
        headerStyle:{ backgroundColor: '#03466F' },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'},
          headerTitleAlign: 'center',
          headerRight: () => (
            <Pressable
              onPress={() => alert('This is a button!')}
              ><LogOut style={{paddingLeft:40}}/></Pressable>
          ),
          }}>
          <Tab.Screen name="Home" component={Home} options={{tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={24} color="#03466F" />
          ),}} />
          <Tab.Screen name="Treino" component={Treino} options={{tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dumbbell" size={24} color="#03466F" />
          ),}} />
          <Tab.Screen name="Nutricao" component={Nutricao} options={{tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-apple" size={24} color="#03466F" />
          ),}} />
          <Tab.Screen name="Perfil" component={Perfil} options={{tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={24} color="#03466F" />
          ),}} />
          <Tab.Screen name="Tela" component={Tela} options={{tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="user-alt" size={24} color="#03466F" />
            
          ),}} />

        </Tab.Navigator>
  );
}

export default PaginaPrincipal;