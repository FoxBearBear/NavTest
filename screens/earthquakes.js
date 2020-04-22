import React, {useEffect,useState} from 'react';
import {Button, TextInput, View, StyleSheet, Text,ScrollView} from 'react-native';
import {globalStyles} from "../styles/global";
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';
import {ListItem} from 'react-native-elements'



export default function EarthQuakes(props){
    const styles = globalStyles;
    const url = props.url;
    const [data, setData] = useState([]);
    useFocusEffect(
        React.useCallback(() => {
            let isActive = true;
            const fetchData = async () => {
                const result = await axios.get(url);
                setData(result.data.features);
            };

            fetchData();

            return () => {
                isActive = false;
            };
        }, []),
    );



    return(
        <React.Fragment>
  <View style={{flex:1,backgroundColor: 'white'}}>
                <ScrollView>
                    {data.map((m, i) => (
                        <ListItem
                            key={m.id}
                            title={
                                <View style={styles.subtitleView}>
                                    <Text style={styles.titleText}>{m.properties.place}</Text>
                                </View>
                            }
                            bottomDivider
                            chevron
                        />
                    ))
                    }
                </ScrollView>
            </View>
        </React.Fragment>
    )
}
