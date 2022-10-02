import {Button, StyleSheet, Text, TouchableOpacity, View,Image,TouchableHighlight} from "react-native";
import Attention from "./attention";
import React, { useState, useEffect } from 'react';
import Play from "react-native-vector-icons/Entypo"
import Pause from "react-native-vector-icons/AntDesign"
import Stop from "react-native-vector-icons/Entypo"
import constants from "../constants";

const endpoint = "activity";

const Timer = ({text}) => {
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
        let userId = constants.getUserId();
        let uploadActivity = `user/${userId}/activity`
        let url = constants.getUrl(uploadActivity);
        const payload = {
            "activity": {
                "category": text,
                "start": Date.now(),
                "duration": sec,
            }
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
                setSec(0);
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <>
            <View style={styles.container}>
                <Attention text={text}/>
                <View style={styles.timeBox}>
                    <Text style={styles.timeText}>{getHour(sec)}:</Text>
                    <Text style={styles.timeText}>{getMin(sec)}:</Text>
                    <Text style={styles.timeText}>{getSec(sec)}</Text>
                </View>

                {/* <Button onPress={() => setRunning(true)} title={"Start"} /> */}
                <View style={styles.Buttonpress}>
                    <TouchableOpacity onPress={() => setRunning(true)}>
                        <Play name="controller-play" size={60}/>
                        {/* <Image source = {require('../../assets/Buttonstop.png')} style ={styles.buttonAltText}/> */}
                    </TouchableOpacity>
                    {/* <Button onPress={() => setRunning(false)} title={"Pause"} /> */}
                    <TouchableOpacity onPress={() => setRunning(false)}>
                        <Pause name="pause" size={60}/>
                        {/* <Image source = {require('../../assets/Buttonstop.png')} style ={styles.buttonAltText}/> */}
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.buttonAlt} onPress={onStopHandler}>
                        <Stop name="controller-stop" size={60}/>
                        {/* <Text style={styles.buttonAltText}>Stop</Text> */}
                    </TouchableOpacity>
                </View>
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
        backgroundColor: "#FFB6C1",
        
    },Buttonpress:{
        flexDirection:"row"
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
    buttonAltText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '400',
    },
});