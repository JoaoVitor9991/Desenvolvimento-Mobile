import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView} from 'react-native';

function MinhasCredenciais({ githubUser }) {
  const[isLiked, setIsLiked] = useState(false);
  return (
    <View>
      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
        <Image
          style={{
            marginRight: 15,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{
            uri: `https://github.com/${githubUser}.png `
          }}
        />
        <Text>{githubUser}</Text>
      </View>
      <Image
        style={{
          width: '100%',
          height: 350
        }}
        source={{
          uri: `https://github.com/${githubUser}.png `
        }}
      />
      <View>
        <AntDesign 
        onPress={() => setIsLiked(!isLiked)}
        name={isLiked? "heart" : "hearto"}
        size={24}
        color={isLiked? "red" : "black"} 
        />
      </View>
    </View>

  )
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {[
          'mauriiicio',
          'eulampio',
          'celsolucas',
          'anneprimonn',
          'joaovitor9991'
        ].map((githubUser) => <MinhasCredenciais
          key={githubUser} githubUser={githubUser} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
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

  }
});