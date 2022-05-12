import React from 'react';
import{View,Text,TouchableOpacity} from 'react-native';
import styles from  './Card.style'
const Card = (props)=>
{
    function sayHi(){
alert('Merhaba ,'+ props.title + ' seni selamlıyor :)')
    }
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>
                  Kişi:  {props.title}
                </Text>
                <Text style={styles.text}>
                {props.text}
                </Text>
            </View>
            <TouchableOpacity style={styles.button_container} onPress={sayHi}>
                <Text style={styles.button_title}>I LIKED</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Card;