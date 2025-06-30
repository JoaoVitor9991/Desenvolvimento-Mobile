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
    //justifyContent: 'center ',
  },
});