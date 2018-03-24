import React from 'react'
import {View,Text,ScrollList,StyleSheet,Image} from 'react-native'
import axios from 'axios';

function SavedCard(props){

   
    return(
        <View style={styles.mainSavedCardDiv}>
        <View>
            <Image source={{uri:props.articleImage}} alt="image coming soon" style={styles.savedImage}/>
        </View>
        <View style={styles.info}>
            <Text style={{fontSize:15,color:'#F9F9F9'}}>
                {props.articleName}
            </Text>
            <Text style={{fontSize:10,color:'#A1A1A1'}}>{props.source}</Text>
            <View style={{height:15,width:60,fontSize:10, backgroundColor:'#CD4031',textAlign:'center',borderRadius:10,display:'flex',justifyContent:'center',alignItems:'center'}} >
                  <Text style={{fontSize:10,textAlign:'center',width:'100%',color:'white'}} onPress={() => props.handlePress(props.index)}>Delete</Text>
            </View>
        </View>
        </View>
    )
}

export default SavedCard;

const styles = StyleSheet.create({
    mainSavedCardDiv:{
        display:'flex',
        flexDirection:'row-reverse',
        height:120,
        width:'100%',
        backgroundColor:'#242424',
        justifyContent:'space-between',
        alignItems:'center',
        padding:10,
        // borderStyle:"solid",
        // borderBottomWidth:2,
        // borderTopWidth:1,
        // borderColor:"#807F7B",
        shadowOffset:{width: 1,  height: 1,},shadowColor: 'black',
            shadowOpacity: 1.0,


    
        
    },
    savedImage:{
        height:90,
        width:90,
        
    },
    info:{
        display:'flex',
        justifyContent:'space-evenly',
        height:90,
        width:250,
        // backgroundColor:'blue'
    },
    
})
