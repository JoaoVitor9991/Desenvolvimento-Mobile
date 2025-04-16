import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, SafeAreaView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native-web';

function MinhasCredenciais({ githubUser }) {
  return (
    <SafeAreaView style={styles.credenciaisContainer}>
      <View style={{ flexDirection: 'row', padding: 15, alignItems: 'center' }}>
        <Image
          style={{
            marginRight: 14,
            width: 40,
            height: 40,
            borderRadius: 20,
          }}
          source={{
            uri: `https://github.com/${githubUser}.png`,
          }}
        />
        <Image
          style={{
            width:"400px",
            height: 350 
            
          }}
     
          source={{
            uri: `https://github.com/${githubUser}.png`,
          }}
        />
        <Text >{githubUser}</Text>
        
        <View>
          <AntDesign name="hearto" size={24} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      {[
        'WRK7',
        'mauriiicio',
        'anneprimonn',
        'joaovitor9991'

      ].map((githubUser) => (
        <MinhasCredenciais key={githubUser} githubUser={githubUser} />
      ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  credenciaisContainer: {
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    marginRight: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});