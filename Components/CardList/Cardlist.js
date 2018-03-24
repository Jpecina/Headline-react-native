import React, { Component } from 'react';
import {Icon} from 'native-base';
import {View,Text,Image,StyleSheet,Button} from 'react-native';
import axios from 'axios';


class ArticleCardList extends Component {
  constructor(){
    super();
    this.state = {
      saveStatus: ""
    }
    this.saveArticle = this.saveArticle.bind(this);
  }
  saveArticle(){
    axios.post('http://localhost:3001/api/saveArticle',this.props.item).then(response => console.warn("this is the response back from save:", response));
    this.setState({saveStatus:"you clicked saved"})
  }
  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.container}>
        <Image
        style={{width:300, height:200}}
        source={{uri: this.props.articleImage}}
      />
        </View>
        <View style = {styles.textContainer}>
        <Text style = {styles.titleText}>{this.props.articleName}</Text>
        <Text style = {styles.sourceText}>{this.props.articleSource}</Text>
        <Text style = {styles.descriptionText}>{this.props.articleDescription}</Text>
        <View><Icon name="bookmark" style = {styles.icon} onPress={this.saveArticle } /></View>
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
      backgroundColor: '#FFFFFF',
      margin:10,
      padding:10,
      height:'auto',
      borderRadius:15,

    },
    textContainer:{
     margin:10,

    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:"#222222"
    },
    sourceText:{
        fontSize:15,
        fontStyle:'italic',

    },
    descriptionText:{
        fontSize:20,
        fontWeight:'normal'
    },
    icon:{
      marginTop:10,
      marginLeft:10
    }

  
  });