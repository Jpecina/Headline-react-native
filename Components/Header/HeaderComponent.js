import React,{Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import {Icon} from 'native-base';

class HeaderComponent extends Component{
    render(){
        return(
            <View style={{width: '100%', height: 70, backgroundColor: '#1C1C1C',display:'flex',flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
                <Icon name="arrow-back" style={{color:'#F9F9F9',width:10,marginLeft:15}}/>
                  <Image style={{height:30,width:30,marginRight:15}}/>
            </View>
        )
    }
}

export default HeaderComponent;