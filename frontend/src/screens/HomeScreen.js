import {StyleSheet, Text, View} from "react-native";
import Timer from "../components/timer";
import Button from "../components/button";
import OneButton from "../components/button";



const HomeScreen = ({route}) => {
    const { text } = route.params;
    return (
        <>
            <Timer text={text}/>
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
    },
});