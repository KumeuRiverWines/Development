import React, { Component, useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Text, ScrollView, Button, TouchableOpacity, ImageBackground, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Slider from "@react-native-community/slider";

import SensorComponent1 from '../Components/SensorComponent1';
import TempData2DaysNode1 from '../Components/tempData2DaysNode1';
import NodeTable from '../Components/NodeTable';

import AUTLogo from '../assets/Images/AUTLogo.png';
import Logo from '../assets/Images/Logo.png';

function Node1Details(props) {

    const [selectedDataType, setSelectedDataType] = useState("TEMPERATURE");
    const [sliderValue, setSliderValue] = useState(4);
    const [finalSilderValue, setFinalSliderValue] = useState(4);

    const [sensorData1, setSensorData1] = useState(null);
    const handleDataReceived1 = (latestData) => {
        console.log("Sensor Request Done for Node1Details"); // Log the received data
        setSensorData1(latestData);
    };
    useEffect(() => {
        //console.log("Console Log 1", sensorData1); // This will log the updated value of sensorData1
    }, [sensorData1]);

    return (
        // <ImageBackground source={Background} style={styles.container}>
        <View style={styles.container}>

            <View style={{
                position: 'absolute', // Position it absolutely
                top: '0.5%', // At the top
                right: '0.5%', // On the right
            }}>
                <Image
                    source={AUTLogo} // Replace with your image URL
                    style={{ width: 100, height: 50 }}
                    resizeMode="contain"
                />
            </View>

            <View style={{
                position: 'absolute', // Position it absolutely
                top: '0.5%', // At the top
                left: '0.5%', // On the right
            }}>
                <Image
                    source={Logo} // Replace with your image URL
                    style={{ width: 100, height: 50 }}
                    resizeMode="contain"
                />
            </View>

            <SensorComponent1 onDataReceived={handleDataReceived1} />
            <View style={styles.header}>
                <Text style={styles.node1}>Node 1</Text>
                <Text style={styles.lastUpdated}>
                    {sensorData1 !== null ? (
                        sensorData1.timestamp !== null ?
                            new Date(sensorData1.timestamp).toLocaleString("en-NZ", { timeZone: "Pacific/Auckland", hour12: true, hour: '2-digit', minute:'2-digit', day: '2-digit', month: '2-digit', year: 'numeric' })
                            : <ActivityIndicator size="large" />
                    ) : null}
                </Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.buttons}>
                    <View style={styles.settingsButton}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Temperature Forecast')}>
                            <Text style={styles.settingsText}>
                                Forecast Temp
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.settingsButton}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('History')}>
                            <Text style={styles.settingsText}>
                                Historical Data
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={styles.settingsButton}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Sensor Control Screen')}>
                            <Text style={styles.settingsText}>
                                Settings
                            </Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
                <View style={styles.mapViewContainer}>
                    <MapView
                        provider={MapView.PROVIDER_GOOGLE}
                        initialRegion={{
                            latitude: -36.777676,
                            longitude: 174.565483,
                            latitudeDelta: 0.0025,
                            longitudeDelta: 0.0005,
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
                        <TouchableOpacity onPress={() => { setSelectedDataType('TEMPERATURE'); console.log("TEMPERATURE SELECTED") }}>
                            <View style={styles.temperatureGroup}>
                                <View style={[styles.rect, selectedDataType === 'TEMPERATURE' ? styles.selected : {}]}>
                                    <Text style={styles.temperatureHeader}>Temperature</Text>
                                    <Text style={styles.temperatureData}>
                                        {sensorData1 !== null ? (
                                            sensorData1.temperature !== null ? `${parseFloat(sensorData1.temperature).toFixed(1)}°c` : <ActivityIndicator size="large" />
                                        ) : null}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedDataType('HUMIDITY'); console.log("HUMIDITY SELECTED") }}>
                            <View style={styles.humidityGroup}>
                                <View style={[styles.rect1, selectedDataType === 'HUMIDITY' ? styles.selected : {}]}>
                                    <Text style={styles.humidityHeader}>Humidity</Text>
                                    <Text style={styles.humidityData1}>
                                        {sensorData1 !== null ? (
                                            sensorData1.humidity !== null ? `${sensorData1.humidity}` : <ActivityIndicator size="large" />
                                        ) : null}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedDataType('DEWPOINT'); console.log("DEWPOINT SELECTED") }}>
                            <View style={styles.dewPointGroup}>
                                <View style={[styles.rect2, selectedDataType === 'DEWPOINT' ? styles.selected : {}]}>
                                    <Text style={styles.dewPointHeader}>Dew Point</Text>
                                    <Text style={styles.dewPointData}>
                                        {sensorData1 !== null ? (
                                            sensorData1.dew_point !== null ? `${sensorData1.dew_point}` : <ActivityIndicator size="large" />
                                        ) : null}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dataRow2}>
                        <TouchableOpacity onPress={() => { setSelectedDataType('WINDSPEED'); console.log("WINDSPEED SELECTED") }}>
                            <View style={styles.windSpeedGroup}>
                                <View style={[styles.rect3, selectedDataType === 'WINDSPEED' ? styles.selected : {}]}>
                                    <Text style={styles.windSpeedHeader}>Wind Speed</Text>
                                    <Text style={styles.windSpeedData}>
                                        {sensorData1 !== null ? (
                                            sensorData1.wind_speed !== null ? `${sensorData1.wind_speed}` : <ActivityIndicator size="large" />
                                        ) : null}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedDataType('LEAFWETNESS'); console.log("LEAFWETNESS SELECTED") }}>
                            <View style={styles.leafWetnessGroup}>
                                <View style={[styles.rect4, selectedDataType === 'LEAFWETNESS' ? styles.selected : {}]}>
                                    <Text style={styles.leafWetness2}>Leaf Wetness</Text>
                                    <Text style={styles.humidityData2}>
                                        {sensorData1 !== null ? (
                                            sensorData1.leaf_wetness !== null ? `${sensorData1.leaf_wetness}%` : <ActivityIndicator size="large" />
                                        ) : null}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setSelectedDataType('RAINFALL'); console.log("RAINFALL SELECTED") }}>
                            <View style={styles.rainFallGroup}>
                                <View style={[styles.rect5, selectedDataType === 'RAINFALL' ? styles.selected : {}]}>
                                    <Text style={styles.rainFall2}>Rain Fall</Text>
                                    <Text style={styles.dewPointData1}>{sensorData1 !== null ? (
                                        sensorData1.rainfall !== null ? `${sensorData1.rainfall}` : <ActivityIndicator size="large" />
                                    ) : null}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text style={{ alignContent: "center", alignSelf: "center", fontWeight: "bold", marginBottom: 10 }}>Data for the last: {sliderValue} days</Text>
                    <Slider
                        style={{ width: "80%", height: 20, alignContent: "center", alignSelf: "center" }}
                        minimumValue={1}
                        maximumValue={10}
                        value={finalSilderValue}
                        step={1}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#000000"
                        thumbTintColor="rgba(0,78,124,1)"
                        onValueChange={setSliderValue}
                        onSlidingComplete={setFinalSliderValue}
                    />
                </View>
                <View>
                    <TempData2DaysNode1 selectedDataType={selectedDataType} selectedDays={finalSilderValue} />
                </View>
                <View>
                    <NodeTable selectedDataType={selectedDataType} selectedDays={finalSilderValue} nodeID={"eui-70b3d57ed005de54"} />
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
        marginHorizontal: 10,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    settingsText: {
        color: "white",
        fontSize: 15,
        textAlign: "center",
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
    selected: {
        backgroundColor: 'rgba(1,49,77,1)',
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
        // height: 17,
        // width: 100,
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
        height: 150,
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
        width: "100%",
        marginTop: 10,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
});

export default Node1Details;
