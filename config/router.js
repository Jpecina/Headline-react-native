import React from 'react';
import {TabNavigator} from 'react-navigation'
import TheVergeView from '../Components/HomeView/TheVergeView';
import HomeView from '../Components/HomeView/HomeView';
import {Icon} from 'react-native-vector-icons';
import SearchView from '../Components/SearchView/SearchView';
import SourceView from '../Components/SourceCards/SourceCardView'
import PolygonView from '../Components/Views/PolygonView';


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
    }

    // search: {
    //     screen:SearchView
    // },

});