import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View,Image, TextInput} from 'react-native';
import logoPNG from  './img/LOGO.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
      <StatusBar style="auto" />
    </View>
  );
}

export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
        <Image source={logoPNG} style={styles.logo}></Image>
        <Text style={styles.texto}>Paperplus</Text>
        <Text style={styles.texto}>Paperplus</Text>
        <Button title='Iniciar sesion' onPress={funcion}/>      
    </View>
  );
}

export const Pie=()=>{
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
        <Text style={styles.texto}>X</Text>
      </View>
  )
}



export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
        <Text style={styles.texto}>Cuerpo</Text>
        <Login/>
    </View>
  )
}




const funcion=()=>{
  //funcion bien largota
  Alert.alert('llamada desde la funcion')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff56dbb',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  encabezado:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    backgroundColor:'#1d3019',
  },
  cuerpo:{
    flex:7
  },
  pie:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    backgroundColor:'#202020',
    alignItems:'center'
  },
  texto:{
    fontSize:25,
    color:'#ffff',
    margin:20,
    marginRight:30
  },
  loginfom:{
    backgroundColor:'#24303c',
    margin:30,
     
  },
  logo:
  {
    width:60,
    height:60,
    marginLeft:20,
    marginTop:10
  },
  input:{
    margin:24,
       
  }
  
});