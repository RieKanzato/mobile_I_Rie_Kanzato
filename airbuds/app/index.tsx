import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

import Button from '../components/butao.js';
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
        <Text style={{color: '#fff', fontSize: 15}}>
          <Text> User12345 </Text>
      </Text>
      </View> 
      <View style={styles.imageContainer}>
        <ImageViewer albumFotoSource={albumFoto}/>  
      </View> 
         <Text style={{color: '#fff', fontSize: 25}}> 
          <Text> Fukakoryoku </Text>
        </Text> 
        <Text style={{color: '#fff', fontSize: 15}}> 
          <Text> Vaundy </Text>
        </Text>
      <View style={styles.buttonContainer}>
        <Button label= 'play on'/>
      </View>
      <StatusBar style='auto'/>  
    </View>
    <View style={styles.barra}></View>
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
    marginVertical: 10,
    paddingLeft: 3,
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
    height: 10,
  },
});
