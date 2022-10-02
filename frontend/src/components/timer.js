import {Button, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Attention from "./attention";
import React, { useState, useEffect } from 'react';
import constants from "../constants";

const endpoint = "activity";

const Timer = () => {
    const [sec, setSec] = useState(0);
    const [running, setRunning] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        let intervalId;
        if (running) {
            intervalId = setInterval(() => {
                setSec((prevSec) => prevSec + 1);
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [running]);

    const onStopHandler = () => {
        let url = constants.getUrl(endpoint);
        console.log("Function called")
        const payload = {
            time: sec,
            user: "mehar",
        };
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(async res => {
                try {
                    const jsonRes = await res.json();
                    if (res.status !== 200) {
                        setIsError(true);
                        setMessage(jsonRes.message);
                    } else {
                        setIsError(false);
                        setMessage(JSON.stringify(jsonRes.message));
                    }
                } catch (err) {
                    console.log(err);
                };
            })
            .catch(err => {
                console.log(err);
            });
    }

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
                <TouchableOpacity style={styles.buttonAlt} onPress={onStopHandler}>
                    <Text style={styles.buttonAltText}>Stop</Text>
                </TouchableOpacity>
                <Text>Message: {message}</Text>
                <Text>error: {isError}</Text>
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
    },
    buttonAlt: {
        width: '90%',
        borderWidth: 1,
        height: 50,
        borderRadius: 50,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
});