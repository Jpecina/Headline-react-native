import React from 'react';
import {TabNavigator} from 'react-navigation'
import TheVergeView from '../Components/HomeView/TheVergeView';
import HomeView from '../Components/HomeView/HomeView';
import {Icon} from 'react-native-vector-icons';
import SearchView from '../Components/SearchView/SearchView';
import SourceView from '../Components/SourceCards/SourceCardView'
import PolygonView from '../Components/Views/PolygonView';
import Axios from 'axios';
import AxiosView from '../Components/Views/AxiosView';
import BuzzfeedView from '../Components/Views/BuzzfeedView';


export const Tabs = TabNavigator({
    TheVerge: {
        screen:TheVergeView,
        navigationOptions: {
           
        },
    },
    Home: {
        screen:HomeView
    },
    Source:{
        screen:SourceView
    },
    Polygon:{
        screen:PolygonView
    },
    Axios:{
        screen: AxiosView
    },
    Buzzfeed:{
    screen: BuzzfeedView
    }
    // search: {
    //     screen:SearchView
    // },

});