import {StyleSheet, Text, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
// import {BiBrain} from "react-icons/all";

const Attention = ({text}) => {
    return (
        <>
            <View style={styles.container}>
                <Icon name="brain" size={20}/>
                <Text style={styles.level}>{text}</Text>
            </View>
        </>
    )
}

export default Attention;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ECCFCF",
        borderRadius: 20,
        borderColor: "#1a1919",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
    },
    level: {
        paddingLeft: 5,
        paddingVertical: 5,
    }
});