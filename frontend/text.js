import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import ImagesExample from './image.js';


const Textword =()=> (
    <View style={styles.container}>
      <Text style={styles.title}>Know your Time !</Text>
      <StatusBar style="auto" />
      <ImagesExample />
    </View>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFB6C1',
      alignItems: 'center',
      //justifyContent: 'center',
      
    
    },
    title:{
      // width: 694,
      // height: 247,
      fontfamily: 'Roboto', 
      alignitems: 'center',
      color: "#D13F3F",
      // flex: "none",
      // order: 0,
      // flexGrow: 0,
      fontWeight: "bold",
      padding:24,
      fontSize:40,
      marginTop:120,
  
  
    }
})

export default Textword