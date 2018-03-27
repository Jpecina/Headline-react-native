import React,{Component} from 'react';
import {View,Text,TextInput,ScrollView,StyleSheet} from 'react-native'
import {Icon} from 'native-base'
import StatusBarBackground from '../statusBar';
import ArticleCardList from '../CardList/Cardlist'
import {apiKey} from '../../server/config'
import axios from 'axios';
class SearchView extends Component{
    constructor(){
        super()
        this.state = {
            searchInput:'Search Sources',
            queryResults:[]
        }
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleInput=this.handleInput.bind(this);
    }
    
    handleSubmit(query){
        axios.get(`https://newsapi.org/v2/everything?q=${query}&from=2018-03-25&sortBy=popularity&apiKey=${apiKey}`).then(response => {
        console.log("this is the response",response)    
        this.setState({
                queryResults:response.data.articles,
                searchInput:''
            })
        }).catch(console.log)
    }
    handleInput(text){
        this.setState({
            searchInput:text
        })
    }
    render(){
        const searchResults = this.state.queryResults
        // console.warn('this is the savedArticles var:',savedArticles)
        const resultList = searchResults.map((item,i)=>{
            return (
                <ArticleCardList articleName = {item.title || ''} articleImage = {item.urlToImage || ''} articleDescription = {item.description || ''} articleSource = {item.source.name || ''} key = {i}/>
                
            )
            })




        return(
            <View>
            <View style={{width: '100%', height: 85, backgroundColor: '#1C1C1C',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center',shadowOffset: {width: 1,  height: 1,},
            shadowColor: 'black',
            shadowOpacity: 1.0}}>
                <Icon name='search' style={{marginLeft:10, color:'#F8F8F8'}} />
                <TextInput defaultValue={this.state.searchInput} style={styles.searchInput} onChangeText={(text) => this.handleInput(text)} onSubmitEditing={() => this.handleSubmit(this.state.searchInput)} returnKeyType='search' clearTextOnFocus={true}/>
                <Text style={{marginRight:15,color:'#F8F8F8'}}>Cancel</Text>
            </View>
            <View style={{width: '100%', height: 530,backgroundColor:'#2C2C2C'}}>
            <ScrollView>
            {this.state.queryResults.length >= 1 && resultList}
            </ScrollView>
            </View>
            </View>
        )
    }
}



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
export default SearchView;