import { StyleSheet, Image } from 'react-native';
import { Redirect } from 'expo-router';

export default function ImageViewer({ homeSource }) {
  return (
    <Pressable style={styles.home} onPress={() => {<Redirect href="/login" /> 
    </Pressable>
  );    
}

const styles = StyleSheet.create({
  home: {
    width: 220,
    height: 220,
  },
});