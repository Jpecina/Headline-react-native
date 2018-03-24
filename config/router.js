import React from 'react';
import {TabNavigator} from 'react-navigation'
import TheVergeView from '../Components/HomeView/TheVergeView';
import HomeView from '../Components/HomeView/HomeView';
import {Icon} from 'react-native-vector-icons';
import SearchView from '../Components/SearchView/SearchView';
export const Tabs = TabNavigator({
    TheVerge: {
        screen:TheVergeView,
        navigationOptions: {
           
        },
    },
    Home: {
        screen:HomeView
    },
    // search: {
    //     screen:SearchView
    // },

});