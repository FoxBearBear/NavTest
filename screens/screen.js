import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from "react-native";
import {FontAwesome5} from '@expo/vector-icons';
import { globalStyles } from '../styles/global';


class Screen extends Component {
    render() {
        return (
            <View style={{flex:1,}}>
                <SafeAreaView style={{flex:1,}}>
                    <TouchableOpacity style={{alignItems: 'flex-end', margin: 16}} onPress={this.props.navigation.openDrawer}>
                        <FontAwesome5 name='bars' size={24} color='#161924'/>
                    </TouchableOpacity>
                    <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
                        <Text style={styles.text}>
                            {this.props.name}
                        </Text>
                    </View>

                </SafeAreaView>
            </View>

        );
    }
}

const styles = globalStyles

export default Screen;
