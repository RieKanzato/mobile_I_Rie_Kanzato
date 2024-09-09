import { StatusBar } from "expo-status-bar";
import { ImageComponent, StyleSheet, View, Text } from "react-native";


import Button from '../components/butao.js'
import ImageViewer from '../components/ImageViewer.js';
import FotoPerfil from '../components/FotoPerfil.js';

const albumFoto = require('../assets/images/strobo.png');
const fotoPerfil = require('../assets/images/userIcon.png');


export default function Index() {
  return (
    <View style={styles.container}>
    <View style={styles.centerContainer}>
      <View style={styles.fotoContainer}>
        <FotoPerfil fotoPerfilSource={fotoPerfil}/>
      </View>
      <View>
      <Text style={{color: '#fff'}}>
          <Text> User12345 </Text>
      </Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer albumFotoSource={albumFoto}/>  
      </View> 
         <Text style={{color: '#fff'}}> 
          <Text> Fukakoryoku </Text>
        </Text>
      <View style={styles.buttonContainer}>
        <Button label= 'play on'/>
      </View>
      <StatusBar style='auto'/>  
    </View>
    <View style={styles.barra}>A</View>
    </View>
    
  );
      
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 14,
  },
  fotoContainer: {
    paddingRight: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  barra: {
    backgroundColor: 'black',
    width: '100%',
    height: 90,
  },
  buttonContainer:{
    height: 20,
  },
});
