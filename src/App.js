import React from "react";
import { SafeAreaView,View,Text,TouchableOpacity,StyleSheet } from "react-native";
import Card from './components/Card'


const App=()=>
{
  return(
    <SafeAreaView style={styles.container}>
     
    <Card title="Ali" text="Uygulamaya hoşgeldiniz :)"></Card>

    <Card title="Veli" text="Uygulamaya hoşgeldiniz :)"></Card>

    <Card title="Deli" text="Uygulamaya hoşgeldiniz :)"></Card>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create(
  {
    container:{
      flex:1,     
      backgroundColor:'#852546'    
      
    }

  }
);
export default App;