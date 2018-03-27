// import MainPageHeader from './Header';
// import FooterMainPage from './Footer';
import React, { Component } from 'react';
import { Container,List,ListItem,Thumbnail, Header,Left,Button,Icon,Body,Right,Title, Content, Text,  } from 'native-base';
import {ScrollView,View,StyleSheet,Image} from 'react-native';
import axios from 'axios';
import ArticleCardList from '../CardList/Cardlist'
import StatusBarBackground from '../statusBar'
import polygonLogo from '../../assets/poligons.png'





export default class PolygonView extends Component {
  constructor(){
    super()
    this.state = {
      PolygonArticles: []
    }
  }
  componentDidMount(){
      axios.get('http://localhost:3001/api/getPolygon').then(response => {
        // console.error("this is the response data:",response.data[0])  
      this.setState({PolygonArticles: response.data} )
      }).catch(error => console.warn(error))
    }
  
  
  render() {
  const articlesList = this.state.PolygonArticles.map((item,i)=>{
    return (<ArticleCardList articleName = {item.title} articleImage = {item.urlToImage} articleDescription = {item.description} articleSource = {item.source.name} key = {i} item={item}/>
    )
    })
  return (
      <View>
      {/*<View style={{width: '100%', height: 70, backgroundColor: '#1C1C1C',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <Icon name="arrow-back" style={{color:'#F9F9F9',width:10,marginLeft:15}}/>
                  <Image source={polygonLogo} style={{height:30,width:30,marginRight:15}}/>
  </View>*/}
      <ScrollView style={{height:'100%'}}>
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