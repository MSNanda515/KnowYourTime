import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import Textword from '../components/text.js';
// import OneButton from '../src/components/button.js';
// import Attention from '../src/components/attention.js';
// import HomeScreen from '../src/screens/HomeScreen.js';


export default function Frontscreen({navigation}) {
  var clicked= true;
  
  return (<>
    <Textword navigation={navigation}/>
    {/* <HomeScreen/> */}
    {/* <OneButton/> */}
    {/* <Attention/> */}
    </>
  );
}
