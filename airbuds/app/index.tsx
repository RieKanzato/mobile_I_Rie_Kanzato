import { StatusBar } from "expo-status-bar";
import { ImageComponent, StyleSheet, View } from "react-native";

import ImageViewer from '../components/ImageViewer.js';
import FotoPerfil from '../components/FotoPerfil.js';

const albumFoto = require('../assets/images/strobo.png');
const fotoPerfil = require('../assets/images/userIcon.png');


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.fotoContainer}>
        <FotoPerfil fotoPerfilSource={fotoPerfil}/>
      </View>
      <View style={styles.imageContainer}>
        <ImageViewer albumFotoSource={albumFoto}/>
      </View>
      <StatusBar style='auto'/>
    </View>
  );
      
}

const styles = StyleSheet.create({
  container: {
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
  },
  fotoContainer: {
    paddingRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 18,
  }
});
