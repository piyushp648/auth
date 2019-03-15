// import libraries for making a component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


// make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return(
        <View style={ viewStyle }>
        <Text style={ textStyle } >{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        color: '#333333',
        fontFamily: 'RobotoSlab-Bold',
        
    },

    viewStyle: {
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        //paddingTop: 15,
        /* elevation: for android only */
        elevation:5,
        /* shadow: for ios only */
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        position: 'relative'
    }

});



// make the component availabe to other parts of the app

export {Header};

/**
 * justifyContent: used to position elements in the vertical direction
 * (usually) except for one case
 * justifyContent: flex-end - bottom, center, flex-start = top (default)
 * 
 * alignItems: used to position elements in the horizontal direction(L to R)
 * 
 * alignItems: flex-start: default
 * alignItems: flex-end: right
 * alignItems: center
 */