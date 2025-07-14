import { StyleSheet, Text, View, Image, Button} from 'react-native';

export default function App() {
  const handlePress = () => {
    alert('Você clicou no botão ! Parabéns');
  };


  return (
    <View style={styles.container}>
      <Text>Mauricio</Text>
      
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
