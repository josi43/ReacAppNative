/*import React from 'react';
import {Auth} from './screens/Setup'


export const LogarUser=(email,senha) =>{
  return new Promise(function(resolve,reject) {
  Auth().createUserWithEmailAndPassword(email,senha)
  .then(() => {
    resolve('logado com sucesso');
  })
  .catch((error) => {
    reject(error);
  })
  });
};
*/


/*const BASE_API = 'powerfit-436d8.firebaseapp.com';

export default{
  checkToken: async(token) => {
    const req= await fetch(`${BASE_API}/auth/refresh`,{
      method:'POST',
      header:{
        Accept:'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({token})
    });
    const json= await req.json();
    return json;

  },
  logar: async(emailField, senhaField) => {
    alert(JSON.stringify(emailField, senhaField))
  },
  cadastrar: async(email,password) =>{
    const req= await fetch(`${BASE_API}/user`,{
      method:'POST',
      header:{
        Accept:'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({email,password})
    });
    const json= await req.json();
    return json;
  },
    


};
*/