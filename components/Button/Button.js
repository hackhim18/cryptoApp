import React, { Component } from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'

export default function Button(props) {
     const{text, icon,disable} = props;
        return (
             <TouchableOpacity activeOpacity={0.5}> 
      {text && <Text>{text}</Text>}
      {icon && <Image>source={icon} resizeMode="contain"</Image> }
             </TouchableOpacity>
                 
            
        )
    }
 

 
