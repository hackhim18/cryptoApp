import React,{useState,useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import style from "../style";

export default function Welcome(props) {

   const { navigation } = props;
   const { visible, setVisible} = useState(false)   
    
   useEffect(() =>{
   })

 return (
            <SafeAreaView style={style.container}>
             <View style={style.mainView}>
                <Text style={style.textStyle}> cryptoApp </Text>
                <Text style={style.textStyle}> Clone</Text>
            </View>
            </SafeAreaView>
            
        );
}
