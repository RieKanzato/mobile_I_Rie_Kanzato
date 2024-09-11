import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Redirect } from 'expo-router';

import Button from '../components/butao.js';
import ImageViewer from '../components/ImageViewer.js';
import FotoPerfil from '../components/FotoPerfil.js';


const albumFoto = require('../assets/images/strobo.png');
const fotoPerfil = require('../assets/images/userIcon.png');
const home = require('../assets/images/home.png');
const friends = require('../assets/images/friends.png');

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
          <Pressable onPress={() => {return <Redirect href="../friends.tsx" /> } }>
          <Image source={friends} style={styles.friends} />
          </Pressable>
          {/*<Pressable onPress={() => {return <Redirect href="../index.tsx" /> } }> */}
          <Image source={home} style={styles.home} />
          {/* </Pressable> */}
          
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
    paddingRight: 30,
    marginVertical: 5,
    width: 50,
    height: 50,
  },
  friends:{
    position: 'absolute',
    marginLeft: 90,
    width: 40,
    height: 44,
    marginVertical: 11,
  }
});
