import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Modal, KeyboardAvoidingView, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NewWindow from './NewWindow';

const Stack = createStackNavigator();

function mainScreen({navigation}){
  const [heartColor, setHeartColor] = useState('gray');
  const [login, setLogin] = useState('');
  const[p2assword, setPassword] = useStatee('');
  const [modalVisible, setModalVisible] = useState (false);
  const [modalMessage, setModalMessage] = useState('');

  const toggleHeartColor = () => {
    setHeartColor(heartColor === 'red' ? 'gray' : 'red');
  };

  const showAlert = () => {
    try{
      if (login === 'admin' && password === 'admin'){
        setModalMessage('Login e Senha Corretos');
      } else {
        setModalMessage ('Login ou senha Incorretos');
      }
      setModalVisible(true);
    }catch(error){
      console.error('Erro Modal: ', error);
    } 
  };
  return(
    <KeyboardAvoidingView
    style= {style.container}
    behavior = {Platform.OS === 'ios' ? 'padding': 'height'}
    keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
     <View style={styles.innerContainer}>
      <Text style={styles.text}>Aplicativo Maneiro</Text>
       <image
         source= {{uri: 'https:/github.com/joaovitor9991.png'}}
         style = {styles.image} 
          
        
       /> 
     </View>
    




    </KeyboardAvoidingView>
  );





}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 15
  },

  input:{
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius:8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },

  customButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal:20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset:{widht: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevetion: 3,  
  },

  buttonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay:{
    color: 'fff',
    backgroundColor: 'rgba(0,0,0,0,5)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    widht: '80%',
    maxWidth: 300,
  },

  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',

  },

  modalButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },


});