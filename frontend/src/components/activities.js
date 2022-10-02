import {StyleSheet, Text, View, FlatList} from "react-native";
import {useEffect, useState} from "react";
import backendApi from "../backendApi";
import {StatusBar} from "expo-status-bar";
import constants from "../constants";

const ActivityItem = ({activity}) => {
    return (
        <>
            <View style={{paddingTop: 15}}>
                <StatusBar style="auto" />
                <Text>Date: Today</Text>
                <Text>Category: {activity.category}</Text>
                <Text>Duration: {constants.getHour(activity.duration)}:{constants.getMin(activity.duration)}:
                    {constants.getSec(activity.duration)}</Text>
                <View
                    style={{
                        paddingTop: 5,
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
            </View>

        </>
    )
}

const Activities = ({navigation}) => {
    const [activities, setActivities] = useState([]);
    useEffect( () => {
        backendApi.getActivities()
            .then(act => {
                setActivities(act);
            })
    }, [])
    return (
        <>
            <View style={styles.container}>
                <FlatList
                    data={activities}
                    renderItem={({item}) => <ActivityItem activity={item} />}
                />

            </View>

        </>
    )
};

export default Activities;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 60,
        paddingHorizontal: 40,
        backgroundColor: "#FDF3F2",
    },
});