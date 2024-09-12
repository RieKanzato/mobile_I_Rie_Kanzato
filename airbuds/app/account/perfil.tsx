import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";


import PerfilFoto from '../../components/Perfil.js';

const perfilFoto = require('../../assets/images/userIcon.png');
const friend = require('../../assets/images/friends.png');
const albumFoto = require('../../assets/images/strobo.png');


export default function friends (){
    return(
        <View style={styles.container}>
            <View style={styles.centerContainer}>
            <PerfilFoto perfilFotoSource={perfilFoto}/>
            <View style={styles.textContainer}>
            <Text style={{color: '#fff', fontSize: 25 }}>
              <Text> User12345 </Text>
            </Text>  
            <Text style={{color: '#fff', fontSize: 15}}>
              <Text> @User12345 </Text>
            </Text>  
            </View>
            <View style={styles.musicaContainer}>
           
            <Text style={{color: '#fff', fontSize: 10, marginRight: 168, marginVertical: 40}}>
              <Text> Recently played </Text>
              </Text>
            </View>
            <Image source={albumFoto} style={styles.musica} />
            </View>
            <View style={styles.favoriteContainer}>

            </View>
            <View style={styles.barra}>
            <Link href={'./nots/index'}>
            <Pressable onPress={() => {  } }>
            <Image source={friend} style={styles.friend} />
            </Pressable>
            </Link>
            <View>
            <StatusBar style='auto'/>  
            </View>
            </View>
        </View>
    )
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
      justifyContent: 'space-around',
     margin: 0,
    },
    textContainer:{
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 0,
    },
    musicaContainer:{

    },
    musica:{
      height: 40,
      width: 40,
      marginRight: 190,
    },
    favoriteContainer:{
      backgroundColor: 'gray',
      width: '90%',
      height: 50,
      borderRadius: 60,
      alignItems: 'center'
    },
    barra:{
      backgroundColor: 'black',
      width: '100%',
      height: 65,
    },
    friend:{
      position: 'absolute',
      marginLeft: 90,
      width: 20,
      height: 24,
      marginVertical: 11,
    }
});