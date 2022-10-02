import {Button, StyleSheet, Text, View} from "react-native";
import Attention from "./attention";
import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [sec, setSec] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        let intervalId;
        if (running) {
            intervalId = setInterval(() => {
                setSec((prevSec) => prevSec + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [running]);

    return (
        <>
            <View style={styles.container}>
                <Attention />
                <View style={styles.timeBox}>
                    <Text style={styles.timeText}>{getHour(sec)}:</Text>
                    <Text style={styles.timeText}>{getMin(sec)}:</Text>
                    <Text style={styles.timeText}>{getSec(sec)}</Text>
                </View>

                <Button onPress={() => setRunning(true)} title={"Start"} />
                <Button onPress={() => setRunning(false)} title={"Pause"} />
            </View>
        </>
    )
}

const getHour = (sec) => (
    ("0" + Math.floor(sec / 3600)).slice(-2)
);

const getMin = (sec) => (
    ("0" + Math.floor(sec % 3600 / 60)).slice(-2)
);

const getSec = (sec) => (
    ("0" + (sec % 3600 % 60)).slice(-2)
);

export default Timer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FDF3F2",
        marginLeft: "auto",
    },
    timeView: {
        margin: 20,
    },
    timeBox: {
        flexDirection: "row",
        margin: 10,
    },
    timeText: {
        fontSize: 30,
        fontWeight: "bold",
    }
});