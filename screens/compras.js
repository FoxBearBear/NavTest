import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import {FontAwesome5, Ionicons} from '@expo/vector-icons';
import createBottomTabNavigator from "@react-navigation/bottom-tabs/lib/commonjs/navigators/createBottomTabNavigator";
import { NavigationContainer } from '@react-navigation/native';
import EarthQuakes from './earthquakes';

const Tabs = createBottomTabNavigator();

function CheckQuakes(){
    return(
        <React.Fragment>
         <EarthQuakes url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson'/>
        </React.Fragment>
    )
}


function CheckQuakes2(){
    return(
        <React.Fragment>
         <EarthQuakes url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson'/>
        </React.Fragment>
    )
}


const Tab = createBottomTabNavigator();


export default function Compras({navigation}) {
    return (
        <View style={{flex:1,}}>
        <SafeAreaView style={{flex:1,}}>
            <TouchableOpacity style={{alignItems: 'flex-end', margin: 16}}  onPress={() => navigation.openDrawer()}>
                <FontAwesome5 name='bars' size={24} color='#161924'/>
            </TouchableOpacity>

            <Tab.Navigator>
<Tab.Screen name="Past Hour" component={CheckQuakes} />
<Tab.Screen name="All Day" component={CheckQuakes2} />
</Tab.Navigator>

        </SafeAreaView>
    </View>

    );
  }


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "black",
    },
    text: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",

    }
})
