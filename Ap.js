import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  Modal, 
  KeyboardAvoidingView, 
  Platform, 
  TouchableOpacity 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function NewWindow() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Nova Tela!</Text>
    </View>
  );
}

const Stack = createStackNavigator();


function MainScreen({ navigation }) {
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState(''); 
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLoginPress = () => {
    try {
      if (login.toLowerCase() === 'admin' && password === 'admin') {
        setModalMessage('Login e Senha Corretos!');
      } else {
        setModalMessage('Login ou Senha Incorretos.');
      }
      setModalVisible(true);
    } catch (error) {
      console.error('Erro ao exibir o modal: ', error);
    }
  };

 
  const handleCloseModal = () => {
    setModalVisible(false);
    if (login.toLowerCase() === 'admin' && password === 'admin') {
      navigation.navigate('NewWindow'); 
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.titleText}>Aplicativo Maneiro</Text>
        
        
        <Image
          source={{ uri: 'https://github.com/joaovitor9991.png' }}
          style={styles.image}
        />

       
        <TextInput
          style={styles.input}
          placeholder='Login'
          autoCapitalize='none'
          value={login}
          onChangeText={setLogin}
        />

        
        <TextInput
          style={styles.input}
          placeholder='Senha'
          secureTextEntry 
          autoCapitalize='none'
          value={password}
          onChangeText={setPassword}
        />

       
        <TouchableOpacity onPress={handleLoginPress} style={styles.customButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{modalMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCloseModal} 
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="NewWindow" 
          component={NewWindow}
          options={{ title: 'Área do Usuário' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleText: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 20, 
    color: '#333',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginBottom: 30, 
  },
  input: {
    width: '90%', 
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  customButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%', 
    maxWidth: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  modalButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});