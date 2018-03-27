import React, {Component} from 'react'
import {Text,View,ScrollView,StyleSheet,Body,FlatList,TextInput} from 'react-native';
import {Icon} from 'native-base';
import _ from 'lodash'
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
            saved:[],
            search:''
        }
        this.deleteSaved = this.deleteSaved.bind(this);
        // this.handleInput=this.handleInput.bind(this);
    }
    componentDidMount(){
        console.log("Hit did mount")
        axios.get('http://localhost:3001/api/getSaved').then(response => {
            this.setState({
                saved:response.data
            })
        })

        
    }
    // componentWillUnmount(){
    //     console.log("unmounting")
    // }
    deleteSaved(id){
        axios.delete(`http://localhost:3001/api/deleteSaved/${id}`).then(response => {
            this.setState({
                saved:response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }
        handleCancel(){
            // this.setState({search:''})
            console.warn("clicked!!!!!!!")
        }

        // handleInput(text){
        //   this.state.saved.filter(source => {
        //      return source === text
        //   })
        // }
    render(){
        console.log(this.props)
        const savedArticles = this.state.saved
        // console.warn('this is the savedArticles var:',savedArticles)
        const savedList = savedArticles.map((item,i)=>{
            return (
                // <ArticleCardList articleName = {item.title} articleImage = {item.urlToImage} articleDescription = {item.description} articleSource = {item.source.name} key = {i}/>
                <SavedCard key={i}  articleName={item.title} source={item.source.name || ''} articleImage={item.urlToImage} index={i} handlePress={this.deleteSaved}/>
            )
            })

        return(
            <View>
            <View style={{width: '100%', height: 85, backgroundColor: '#1C1C1C',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <Icon name='search' style={{marginLeft:10, color:'#F8F8F8'}} />
                <TextInput defaultValue="Search Articles" style={styles.searchInput} onChangeText={(text) => this.handleInput(text)} clearTextOnFocus={true}/>
                <Text style={{marginRight:15,color:'#F8F8F8'}} onPress={() => this.handleCancel}>Cancel</Text>
            </View>
            <View style={{width: '100%', height: 530,backgroundColor:'#2C2C2C'}}>
            <ScrollView>
                {savedList}
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