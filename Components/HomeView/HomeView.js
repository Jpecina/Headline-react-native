import React, {Component} from 'react'
import {Text,View,ScrollView,StyleSheet,Body,FlatList,TextInput} from 'react-native';
import {Icon} from 'native-base';
import Header from './Header';
import Tab from '../../config/router'
import StatusBarBackground from '../statusBar';
import axios from 'axios';
import ArticleCardList from '../CardList/Cardlist'
import SavedCard from '../CardList/SavedCardList';

class HomeView extends Component{
    constructor(){
        super();
        this.state = {
            saved:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/api/getSaved').then(response => {
            console.warn('this is the saved response from the back',response.data)
            this.setState({
                saved:response.data
            })
        })

        
    }

    render(){
        
        const savedArticles = this.state.saved
        console.warn('this is the savedArticles var:',savedArticles)
        const savedList = savedArticles.map((item,i)=>{
            return (
                // <ArticleCardList articleName = {item.title} articleImage = {item.urlToImage} articleDescription = {item.description} articleSource = {item.source.name} key = {i}/>
                <SavedCard articleName={item.title} source={item.source.name} articleImage={item.urlToImage}/>
            )
            })

        return(
            <View>
            <StatusBarBackground/>
            <View style={{width: '100%', height: 70, backgroundColor: '#1C1C1C',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <Icon name='search' style={{marginLeft:10, color:'#F8F8F8'}} />
                <TextInput defaultValue="Search Articles" style={styles.searchInput}/>
                <Text style={{marginRight:15,color:'#F8F8F8'}}>Cancel</Text>
            </View>
            <View style={{width: '100%', height: 530,backgroundColor:'#2C2C2C'}}>
            <ScrollView>
                {savedList}
                <SavedCard/>
            </ScrollView>
            </View>
            
            </View>
        )
    }
}

export default HomeView;

const styles = StyleSheet.create({
    mainViewContainer: {
        flex:1,
        backgroundColor:'blue'
    },
    headerDiv:{
        flex:1,
        height:'auto',
        backgroundColor:'purple'
    },
    searchInput:{
        height:30,
        width:260,
        backgroundColor:"#2C2C2C",
        paddingLeft:5,
        color:"#807F7B"
        
    }


})