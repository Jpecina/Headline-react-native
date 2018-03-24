import MainPageHeader from './Header';
import FooterMainPage from './Footer';
import React, { Component } from 'react';
import { Container,List,ListItem,Thumbnail, Header,Left,Button,Icon,Body,Right,Title, Content, Text,  } from 'native-base';
import {ScrollView,View,StyleSheet} from 'react-native';
import axios from 'axios';
import ArticleCardList from '../CardList/Cardlist';
import StatusBarBackground from '../statusBar';





export default class ContentExample extends Component {
  constructor(){
    super()
    this.state = {
      theVerge: []
    }
  }
  componentDidMount(){
      axios.get('http://localhost:3001/api/gettech').then(response => {
        console.warn("this is the response:",response)
        // console.error("this is the response data:",response.data[0])  
      this.setState({theVerge: response.data} )
      }).catch(error => console.warn(error))
    }
  
  render() {
  const articlesList = this.state.theVerge.map((item,i)=>{
    return (<ArticleCardList articleName = {item.title} articleImage = {item.urlToImage} articleDescription = {item.description} articleSource = {item.source.name} key = {i} item={item}/>
    )
    })
  console.warn(this.state.theVerge)
  return (
      <View>
      <StatusBarBackground/>
      <Text style = {styles.titleContainer}>The Verge</Text>
      <ScrollView style={{height:'85%'}}>
      <View style = {styles.articleListContainer}>
          {articlesList}
      </View>
      
    
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    articleListContainer: {
      justifyContent:'space-between',
      backgroundColor:'#2C2C2C'
    },
    
    titleContainer:{
      height:'15%',
      justifyContent:'flex-start',
      fontSize:60,
      fontWeight:'bold',
      // marginTop:25,
      // marginLeft:12,
      color:"#F9F9F9",
      backgroundColor:'#1C1C1C'
    },
    footer:{
      backgroundColor:'blue',
    }
})