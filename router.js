import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet } from 'react-native';

import Screen from './Screen';



const Screens = createStackNavigator(

    {
        Screen :{
            screen: Screen,
            navigationOptions: {
                title: 'Screen',
                //headerTitleStyle: styles.titleMenu,
                headerLeft: null
            }
        },
    },
    {
        initialRouteName: 'Screen',
        headerMode:'float',        
    }
);

const AppContainer = createAppContainer(
    Screens
)

export default AppContainer;

const styles = StyleSheet.create({
    titleMenu: {
      left: 50
    },
}); 