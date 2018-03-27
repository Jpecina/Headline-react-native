import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import FooterTabsIconTextExample from './Components/HomeView/Footer'
import HeaderIconTextExample from './Components/HomeView/Header'
import HomeView from './Components/HomeView/TheVergeView';
import { Tabs } from './config/router';
import StatusBarBackground from './Components/statusBar'




class App extends Component {
  
  render() {
    console.disableYellowBox = true;
    return (
      <View style={{height:'100%',backgroundColor:'#1C1C1C'}}>
      <StatusBarBackground/>
      <Tabs/>
      </View>
    )
  }
}
export default App;