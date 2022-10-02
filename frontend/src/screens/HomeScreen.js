import {StyleSheet, Text, View} from "react-native";
import Timer from "../components/timer";
import Button from "../components/button";



const HomeScreen = () => {
    return (
        <>
            <Timer />
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
    },
});