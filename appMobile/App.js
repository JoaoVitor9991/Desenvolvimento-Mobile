import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';

export default function App() {
  const handlePress = () => {
    alert('Você Ganhou 200 Milhões');
  };



  return (
    <View style={styles.container}>
      <Text>João Vitor</Text>
      <Image
        style ={styles.Image}
        source={require('./Imagem/imagem.jpg')}
      />
      <Button
      title='Press Here'
      onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
