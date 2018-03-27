import React, { Component } from 'react';
import {Icon} from 'native-base';
import {View,Text,Image,StyleSheet,Button} from 'react-native';
import axios from 'axios';


class ArticleCardList extends Component {
  constructor(props){
    super(props);
    this.state = {
      saveStatus: "",
      iconActive:false
    }
    this.saveArticle = this.saveArticle.bind(this);
  }
  saveArticle(){
    axios.post('http://localhost:3001/api/saveArticle',this.props.item).then(response => this.setState({saveStatus:"you clicked saved"}) );
    this.setState({
      iconActive:true
    })
    
  }
  render() {
    console.log(this.props, "Props from search")
    return (
      <View style = {styles.container}>
        
        <Image
        style={{width:300, height:200,marginTop:10}}
        source={{uri: this.props.articleImage}}
      />
        <View style = {styles.textContainer}>
        <Text style = {styles.titleText}>{this.props.articleName}</Text>
        <Text style = {styles.sourceText}>{this.props.articleSource}</Text>
        <Text style = {styles.descriptionText}>{this.props.articleDescription}</Text>
        <View><Icon name="bookmark" style = {styles.icon} onPress={this.saveArticle } active={this.state.iconActive} /></View>
        </View>
      </View>
    );
  }
}
export default ArticleCardList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#242424',
      margin:10,
      padding:10,
      height:'auto',
      borderRadius:15,
      shadowOffset:{
        width: 1,  
        height: 1,
      },
      shadowColor: 'black',
      shadowOpacity: 1.0

    },
    textContainer:{
     margin:10,
     

    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:"#F9F9F9"
    },
    sourceText:{
        fontSize:15,
        fontStyle:'italic',
        color:'#A1A1A1'

    },
    descriptionText:{
        fontSize:20,
        fontWeight:'normal',
        color:'#DCDCDC'
    },
    icon:{
      marginTop:10,
      marginLeft:10,
      color:"#A1A1A1"
    }

  
  });