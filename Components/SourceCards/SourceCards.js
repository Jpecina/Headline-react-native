import React from 'react';
import { View,Text,StyleSheet,Image } from "react-native";
import logo from '../../assets/theverge.png'

function SourceCard(props){



    return(
        <View style={styles.mainContainer}>
            <Image source={props.logo} style={styles.logo}/>
            <Text style={styles.text} onPress={props.stackFunction}>{props.name}</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        height:'30%',
        width:'40%',
        margin:10,
        backgroundColor:'#242424',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        shadowOffset:{width: 1,  height: 1,},shadowColor: 'black',
            shadowOpacity: 1.0,
    },
    text:{
        color:'#F9F9F9',
        fontSize:20,
        margin:5
    },
    logo:{
        margin:5,
        height:80,
        width:80,
        
    }
})

export default SourceCard;

