import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import FooterTabsIconTextExample from './Components/HomeView/Footer'
import HeaderIconTextExample from './Components/HomeView/Header'
import HomeView from './Components/HomeView/TheVergeView';
import { Tabs } from './config/router';



class App extends Component {
  render() {
    return <Tabs/>
  }
}
export default App;