import React from 'react';
import {Image} from 'react-native'
import {TabNavigator,StackNavigator} from 'react-navigation'
import TheVergeView from '../Components/HomeView/TheVergeView';
import HomeView from '../Components/HomeView/HomeView';
// import {Icon} from 'react-native-vector-icons';
import {Icon} from 'native-base'
import SearchView from '../Components/SearchView/SearchView';
import SourceView from '../Components/SourceCards/SourceCardView'
import PolygonView from '../Components/Views/PolygonView';
import Axios from 'axios';
import AxiosView from '../Components/Views/AxiosView';
import BuzzfeedView from '../Components/Views/BuzzfeedView';
import VergeLogo from '../assets/theverge.png';
import polyLogo from '../assets/polygons.png';
import BuzzLogo from '../assets/buzzfeed.png';
import axiosLogo from '../assets/axios.png';
import mainLogo from '../assets/logotest.png'

const header = {
    height:60,
    backgroundColor: '#1C1C1C',
    display:'flex',
    justifyContent:"center",
    alignItems:'center',
    shadowOffset:{width: 1,  height: 1,},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    borderBottomWidth:0
}
export const FeedStack = StackNavigator({
    SourceView:{
        screen: SourceView,
        navigationOptions:{
            headerStyle:header,
            headerTitle:<Image source={mainLogo} style={{height:45,width:100,marginBottom:10}} />,
            headerBackTitle:null,
            headerTitleStyle:{
                color:'#F9F9F9',
                fontSize:20
            }
        },
        
    },
    TheVergeView:{
        screen:TheVergeView,
        navigationOptions:{
            headerStyle:header,
            headerTitle:<Image source={VergeLogo} style={{height:45,width:45,marginBottom:10}} />,
            headerBackTitle:null,
            headerTitleStyle:{
                color:'#F9F9F9',
                fontSize:20
            }
        },
        TabNavigatorConfig:{
            
        }
    },
    PolygonView:{
        screen:PolygonView,
        navigationOptions:{
            headerStyle:header,
            headerTitle:<Image source={polyLogo} style={{height:80,width:80,marginBottom:10}}/>,
            headerBackTitle:null,
            headerTitleStyle:{
                color:'#F9F9F9',
                fontSize:20
            }
        }
    },
    BuzzfeedView:{
        screen:BuzzfeedView,
        navigationOptions:{
            headerStyle:header,
            headerTitle:<Image source={BuzzLogo} style={{height:45,width:45,marginBottom:10}} />,
            headerBackTitle:null,
            headerTitleStyle:{
                color:'#F9F9F9',
                fontSize:20
            }
        }
    },
    AxiosView:{
        screen:AxiosView,
        navigationOptions:{
            headerStyle:header,
            headerTitle:<Image source={axiosLogo} style={{height:45,width:45,marginBottom:10}} />,
            headerBackTitle:null,
            headerTitleStyle:{
                color:'#F9F9F9',
                fontSize:20
            }
        }
    }
})

// <View style={{width: '100%', height: 70, backgroundColor: '#1C1C1C',display:'flex',justifyContent:"center",alignItems:'center'}}>
// <Text style={{color:'#F9F9F9',fontSize:30}}>
// Headline
// </Text>
// </View>




export const Tabs = TabNavigator({
    SourceView: {
        screen: FeedStack,
        
        navigationOptions: {
            tabBarLabel: 'Featured',
            tabBarIcon: ({tintColor}) => <Icon name='paper' size={25} color={tintColor} active={true}/>,
            
        },
        tabBarOptions:{
            showLabel:false,
            style:{
                height:100,
                backgroundColor:'#2C2C2C'
            }
        }
    },
    SearchView:{
        screen:SearchView,
        navigationOptions:{
            tabBarLabel:'Search',
            tabBarIcon:({tintColor}) => <Icon name='search' size={25} color={tintColor} active={true}/>
        }
    },
    SavedView:{
        screen:HomeView,
        navigationOptions:{
            tabBarLabel:'Saved',
            tabBarIcon:({tintColor}) => <Icon name='bookmark' size={25} color={tintColor} active={true}/>
        }
    }
})
