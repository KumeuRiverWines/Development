import React, { Component, useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Text, ScrollView, Button, Touchable} from "react-native";
import MapView, { Marker } from "react-native-maps";

import SensorComponent1 from '../Components/SensorComponent1';
import TempData10Days from '../Components/tempData2DaysNode1';
import { TouchableOpacity } from "react-native-gesture-handler";

function Node1Details(props) {

    const [sensorData1, setSensorData1] = useState(null);
    const handleDataReceived1 = (latestData) => {
        console.log("Sensor Request Done for Node1Details"); // Log the received data
        setSensorData1(latestData);
    };
    useEffect(() => {
        //console.log("Console Log 1", sensorData1); // This will log the updated value of sensorData1
    }, [sensorData1]);

    return (
        <View style={styles.container}>
            <SensorComponent1 onDataReceived={handleDataReceived1} />
            <View style={styles.header}>
                <Text style={styles.node1}>Node 1</Text>
                <Text style={styles.lastUpdated}>
                    {sensorData1 !== null ? (
                        sensorData1.timeAgo !== null ? `Updated ${sensorData1.timeAgo}` : <ActivityIndicator size="large" />
                    ) : null}
                </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.settingsButton}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SensorControlScreen')}>
                    <Text style={styles.settingsText}>
                        Settings
                    </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mapViewContainer}>
                    <MapView
                        provider={MapView.PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: -36.777676,
                            longitude: 174.565483,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.0025,
                        }}
                        customMapStyle={[]}
                        style={styles.mapView}
                        mapType="satellite"
                    >
                        <Marker
                            coordinate={{ latitude: -36.777676, longitude: 174.565483 }}
                            title="Node 1"
                            description="Maties Vineyard"
                        />
                    </MapView>
                </View>
                <View style={styles.dataGroup}>
                    <View style={styles.dataRow1}>
                        <View style={styles.temperatureGroup}>
                            <View gradientImage="Gradient_WU95P46.png" style={styles.rect}>
                                <Text style={styles.temperatureHeader}>Temperature</Text>
                                <Text style={styles.temperatureData}>
                                    {sensorData1 !== null ? (
                                        sensorData1.temperature !== null ? `${sensorData1.temperature}°c` : <ActivityIndicator size="large" />
                                    ) : null}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.humidityGroup}>
                            <View style={styles.rect1}>
                                <Text style={styles.humidityHeader}>Humidity</Text>
                                <Text style={styles.humidityData1}>
                                    {sensorData1 !== null ? (
                                        sensorData1.humidity !== null ? `${sensorData1.humidity}` : <ActivityIndicator size="large" />
                                    ) : null}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.dewPointGroup}>
                            <View style={styles.rect2}>
                                <Text style={styles.dewPointHeader}>Dew Point</Text>
                                <Text style={styles.dewPointData}>
                                    {sensorData1 !== null ? (
                                        sensorData1.dew_point !== null ? `${sensorData1.dew_point}` : <ActivityIndicator size="large" />
                                    ) : null}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.dataRow2}>
                        <View style={styles.windSpeedGroup}>
                            <View gradientImage="Gradient_WU95P46.png" style={styles.rect3}>
                                <Text style={styles.windSpeedHeader}>Wind Speed</Text>
                                <Text style={styles.windSpeedData}>
                                    {sensorData1 !== null ? (
                                        sensorData1.wind_speed !== null ? `${sensorData1.wind_speed}` : <ActivityIndicator size="large" />
                                    ) : null}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.leafWetnessGroup}>
                            <View style={styles.rect4}>
                                <Text style={styles.leafWetness2}>Leaf Wetness</Text>
                                <Text style={styles.humidityData2}>
                                    {sensorData1 !== null ? (
                                        sensorData1.leaf_wetness !== null ? `${sensorData1.leaf_wetness}` : <ActivityIndicator size="large" />
                                    ) : null}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.rainFallGroup}>
                            <View style={styles.rect5}>
                                <Text style={styles.rainFall2}>Rain Fall</Text>
                                <Text style={styles.dewPointData1}>{sensorData1 !== null ? (
                                    sensorData1.rainfall !== null ? `${sensorData1.rainfall}` : <ActivityIndicator size="large" />
                                ) : null}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <TempData10Days />
                </View>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "rgba(255,255,255,1)",
    },
    settingsButton: {
        width: 100,
        height: 50,
        backgroundColor: "rgba(0,78,124,1)",
        borderRadius: 20,
        marginTop: 10,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    settingsText: {
        color: "white",
        fontSize: 15,
    },
    header: {
        width: "60%",
        height: "10%",
        backgroundColor: "rgba(0,78,124,1)",
        margin: 0,
        // marginTop: 60,
        alignItems: "center",
        borderRadius: 20,
    },
    node1: {
        color: "white",
        fontSize: 30,
        width: 133,
        height: 40,
        textAlign: "center",
        marginTop: 8,
        // marginLeft: 26
    },
    lastUpdated: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        height: "auto",
        width: 300,
        marginTop: 7
    },
    dataGroup: {
        width: 360,
        height: 241,
        alignSelf: "center",
        alignItems: "center",
        margin: 0,
        marginTop: 20
    },
    dataRow1: {
        width: 360,
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        margin: 5
    },
    temperatureGroup: {
        width: 103,
        height: 100
    },
    rect: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: "rgba(0,78,124,1)"
    },
    temperatureHeader: {
        color: "white",
        textAlign: "center",
        height: 17,
        width: 100,
        marginTop: 11
    },
    temperatureData: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: 12
    },
    humidityGroup: {
        width: 103,
        height: 100
    },
    rect1: {
        width: 100,
        height: 100,
        backgroundColor: "rgba(0,78,124,1)",
        borderRadius: 20
    },
    humidityHeader: {
        color: "white",
        textAlign: "center",
        marginTop: 11
    },
    humidityData1: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: 12
    },
    dewPointGroup: {
        width: 103,
        height: 100
    },
    rect2: {
        width: 100,
        height: 100,
        backgroundColor: "rgba(0,78,124,1)",
        borderRadius: 20
    },
    dewPointHeader: {
        color: "white",
        textAlign: "center",
        marginTop: 11
    },
    dewPointData: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: 12
    },
    dataRow2: {
        width: 360,
        height: 100,
        flexDirection: "row",
        justifyContent: "center",
        margin: 10
    },
    windSpeedGroup: {
        width: 103,
        height: 100
    },
    rect3: {
        width: 100,
        height: 100,
        borderRadius: 20,
        backgroundColor: "rgba(0,78,124,1)"
    },
    windSpeedHeader: {
        color: "white",
        textAlign: "center",
        marginTop: 11
    },
    windSpeedData: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: 12
    },
    leafWetnessGroup: {
        width: 103,
        height: 100
    },
    rect4: {
        width: 100,
        height: 100,
        backgroundColor: "rgba(0,78,124,1)",
        borderRadius: 20
    },
    leafWetness2: {
        color: "white",
        textAlign: "center",
        marginTop: 11
    },
    humidityData2: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: 12
    },
    rainFallGroup: {
        width: 103,
        height: 100
    },
    rect5: {
        width: 100,
        height: 100,
        backgroundColor: "rgba(0,78,124,1)",
        borderRadius: 20
    },
    rainFall2: {
        color: "white",
        textAlign: "center",
        marginTop: 11
    },
    dewPointData1: {
        color: "white",
        fontSize: 30,
        textAlign: "center",
        marginTop: 12
    },
    mapView: {
        width: "100%",
        height: "100%",
    },
    mapViewContainer: {
        height: 200,
        width: "96%",
        margin: 0,
        marginTop: 10,
        alignSelf: "center",
        overflow: "hidden",
        backgroundColor: "grey",
        borderRadius: 20,

    },
    scrollView: {
        alignContent: "center",
    }
});

export default Node1Details;