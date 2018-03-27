import React from 'react';
import {View,Text} from 'react-native';
import SourceCard from './SourceCards';
import StatusBarBackground from '../statusBar'
import { Icon, Row } from 'native-base';
import VergeLogo from '../../assets/theverge.png';
import PolygonLogo from '../../assets/poligons.png';
import axiosLogo from '../../assets/axios.png'
import buzzfeedLogo from '../../assets/buzzfeed.png';
import TheVergeView from '../HomeView/TheVergeView';
import {withNavigation} from 'react-navigation'

class SourceView extends React.Component{
    constructor(props){
        super(props)
        this.handlePress = this.handlePress.bind(this)
    }
    handlePress(name){
        console.log(name)
        this.props.navigation.navigate(name)
    }
    render(){console.log(this.props)

    return (
        <View>
            <View style={{backgroundColor:'#2C2C2C',height:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'center'}}>
            <SourceCard name="The Verge" logo={VergeLogo} viewName={`TheVergeView`} handlePress={this.handlePress}/>
            <SourceCard name="Polygon" logo={PolygonLogo} viewName={`PolygonView`} handlePress={this.handlePress}/>
            <SourceCard name="Buzzfeed" logo={buzzfeedLogo} viewName={`BuzzfeedView`} handlePress={this.handlePress}/>
            <SourceCard name="Axios" logo={axiosLogo} viewName={`AxiosView`} handlePress={this.handlePress}/>
            </View>
        </View>
    )
}
}
export default withNavigation(SourceView);