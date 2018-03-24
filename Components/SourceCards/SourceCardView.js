import React from 'react';
import {View,Text} from 'react-native';
import SourceCard from './SourceCards';
import StatusBarBackground from '../statusBar'
import { Icon, Row } from 'native-base';
import VergeLogo from '../../assets/theverge.png';
import PolygonLogo from '../../assets/poligons.png';

function SourceView(){
    return (
        <View>
            <View>
            <StatusBarBackground/>
            </View>
            <View style={{width: '100%', height: 70, backgroundColor: '#1C1C1C',display:'flex',justifyContent:"center",alignItems:'center'}}>
                <Text style={{color:'#F9F9F9',fontSize:30}}>
                    Headline
                </Text>
            </View>
            <View style={{backgroundColor:'#2C2C2C',height:'90%',display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',alignContent:'center'}}>
            <SourceCard name="The Verge" logo={VergeLogo}/>
            <SourceCard name="Polygon" logo={PolygonLogo}/>
            <SourceCard name="Buzzfeed"/>
            <SourceCard name="Axios"/>
            </View>
        </View>
    )
}

export default SourceView;