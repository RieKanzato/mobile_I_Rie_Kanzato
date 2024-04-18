import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>É na sola da bota</Text>
      <StatusBar style="auto" />
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

<Button
  onPress={onPressLearnMore}
  title="OIIIIIIII"
  color = "#841584"
  acessibilityLabel="Botao roxo!!!!"
/> 

});
