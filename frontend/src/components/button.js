import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Button } from 'react-native';
import Attention from './attention';

const OneButton = ({navigation}) => {
    return (
      <View style={styles.container}>
        {/* <Button1 title="Focus" size="sm" navigation={navigation} backgroundColor="#FFB6C1" />
        <Button2 title="Cooking" size="sm" navigation={navigation} backgroundColor="#FFB6C1" />
        <Button3 title="Excercise" size="sm" navigation={navigation} backgroundColor="#FFB6C1" />
        <Button4 title="Reading" size="sm" navigation={navigation} backgroundColor="#FFB6C1" />
        <Button5 title="Meditation" size="sm" navigation={navigation} backgroundColor="#FFB6C1" />
        <Button6 title="Coding" size="sm" navigation={navigation} backgroundColor="#FFB6C1" /> */}
        <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen", {"text": "Focus"})} style={styles.ButtonContainer1}><Text>Focus</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen", {"text": "Cooking"})} style={styles.ButtonContainer2}><Text>Cooking</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen", {"text": "Excercise"})} style={styles.ButtonContainer3}><Text>Excercise</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen", {"text": "Reading"})} style={styles.ButtonContainer4}><Text>Reading</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen", {"text": "Meditation"})} style={styles.ButtonContainer5}><Text>Meditation</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen", {"text": "Coding"})} style={styles.ButtonContainer6}><Text>Coding</Text></TouchableOpacity>
      </View>
    );
  }
  export default OneButton;

  const styles = StyleSheet.create({
    
    ButtonContainer1: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: -10,
      left: -125,
      bottom: -160,
      width: 115,
      alignItems: 'center',
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",

    },
  
    ButtonContainer2: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 0,
      left: -5,
      bottom: -120,
      alignItems: 'center',
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
  
    },
  
    ButtonContainer3: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      left: 128,
      alignItems: 'center',
      bottom: -80,
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
  
    },
  
    ButtonContainer4: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 11,
      left: -126,
      alignItems: 'center',
      bottom: -130,
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      width: 115
  
    },
  
    ButtonContainer5: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 9,
      left: -6,
      alignItems: 'center',
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      bottom: -90,
  
    },
  
    ButtonContainer6: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 23,
      left: 127,
      alignItems: 'center',
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      bottom: -50,
  
    },
  
    ButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      textTransform: "uppercase",
      alignSelf: "center",
      
    },
  });
  

  const Button1 = ({ onPress, title, navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={styles.ButtonContainer1}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button2 = ({ onPress, title, navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={styles.ButtonContainer2}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button3 = ({ onPress, title,navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={styles.ButtonContainer3}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button4 = ({ onPress, title,navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={styles.ButtonContainer4}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button5 = ({ onPress, title,navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={styles.ButtonContainer5}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button6 = ({ onPress, title,navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={styles.ButtonContainer6}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );

