import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";

import Button from '../components/butao.js';
import ImageViewer from '../components/ImageViewer.js';
import FotoPerfil from '../components/FotoPerfil.js';


const albumFoto = require('../assets/images/strobo.png');
const fotoPerfil = require('../assets/images/userIcon.png');
const home = require('../assets/images/home.png');
const friends = require('../assets/images/friends.png');
const perfil = require('../assets/images/perfil.png');

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
        <View style={styles.barra}>
        
          <View style= {{width: 30, marginLeft: 61, marginTop: -20 }}>
          <Link href={'../nots/index'}>
          <Pressable onPress={() => {  } }>
          <Image source={friends} style={styles.friends} />
          </Pressable> 
          </Link>
          </View>

          <View style={{width: 30, marginTop: 16}}>
          <Link href={'../account/perfil'}>
          <Pressable onPress={() => {  } }> 
          <Image source={perfil} style={styles.perfil} />
          </Pressable> 
          </Link>
          </View>
          
          <View style={{width: 30, marginRight: 50, marginBottom: 40, alignContent: 'space-around'}}>
          <Link href={'../index'}>
          <Pressable onPress={() => {  } }> 
          <Image source={home} style={styles.home} />
          </Pressable> 
          </Link>
          </View>

      </View>
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
    height: 65,
  },
  buttonContainer:{
    height: 10,
  },
  home:{
    marginBottom: 400,
    paddingRight: 60,
    marginVertical: -27,
    width: 40,
    height: 40,
  },
  friends:{
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 90,
    width: 50,
    height: 50,
    marginVertical: 11,
  },
  perfil:{
    position: 'absolute',
    marginLeft: 240,
    width: 45,
    height: 45,
    marginVertical: -20,
    marginLeft: 310
  }
});
