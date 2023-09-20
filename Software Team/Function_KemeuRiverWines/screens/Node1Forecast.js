import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

import TempForecastGraphNode1 from '../Components/TempForecastGraphNode1';
import ForecastComponent from '../Components/ForecastComponent';

const Node1Forecast = () => {

    const [data, setData] = useState(null);

    const getForecastId = () => {
        const currentTime = new Date();
        const minutesSinceMidnight =
            currentTime.getHours() * 60 + currentTime.getMinutes();
        const forecastId = Math.floor(minutesSinceMidnight / 5) + 1;
        console.log(forecastId);
        return forecastId;
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <ForecastComponent onData={setData} />
                {/* {data && <Text>{JSON.stringify(data)}</Text>} */}
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Node 1 Temperature Forecast</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.dataDisplay}>
                    <View style={styles.dataDisplayBox}>
                        <Text style={styles.dataDisplayText}>In 15 Minutes</Text>
                        <Text style={styles.dataDisplayValue}>{data && data[0].temperature}°c</Text>
                    </View>
                    <View style={styles.dataDisplayBox}>
                        <Text style={styles.dataDisplayText}>In 60 Minutes</Text>
                        <Text style={styles.dataDisplayValue}>{data && data[1].temperature}°c</Text>
                    </View>
                    <View style={styles.dataDisplayBox}>
                        <Text style={styles.dataDisplayText}>In 120 Minutes</Text>
                        <Text style={styles.dataDisplayValue}>{data && data[2].temperature}°c</Text>
                    </View>
                </View>
                <View style={styles.graph}>
                    <TempForecastGraphNode1 />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: 'rgba(0,78,124,1)',
        width: "95%",
        height: "7%",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        // fontWeight: 'bold',
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    dataDisplay: {
        marginTop: "5%",
        flexDirection: 'row',
        width: "96%",
        height: "15%",
        backgroundColor: 'white',
    },
    dataDisplayBox: {
        width: "30%",
        margin: "1.5%",
        height: "100%",
        backgroundColor: 'rgba(0,78,124,1)',
        alignSelf: 'center',
        borderRadius: 30,
    },
    dataDisplayText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        marginTop: "10%",
    },
    dataDisplayValue: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        marginTop: "10%",
    },
    graph: {
        width: "96%",
        height: "50%",
        marginTop: "10%",
        backgroundColor: 'white',
    },
    graphText: {
        color: 'white',
        fontSize: 40,
        textAlign: 'center',
        marginTop: "10%",
    },
});

export default Node1Forecast;
