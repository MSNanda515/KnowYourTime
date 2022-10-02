import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ImagesExample from './image.js';
import OneButton from './button.js';


const Textword =({navigation})=> (
    <View style={styles.container}>
      <Text style={styles.title}>Know your Time !</Text>
      <StatusBar style="auto" />
      <ImagesExample />
      <OneButton navigation={navigation}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFB6C1',
      alignItems: 'center',
    },
    title:{
      fontfamily: 'Roboto', 
      alignitems: 'center',
      color: "#D13F3F",
      fontWeight: "bold",
      padding:24,
      fontSize:40,
      marginTop:120,
    }
})

export default Textword