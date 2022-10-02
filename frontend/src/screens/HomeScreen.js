import {StyleSheet, Text, View} from "react-native";
import Timer from "../components/timer";

const HomeScreen = () => {
    return (
        <>
            <Timer />
            {/*<Blink />*/}
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
    },
});