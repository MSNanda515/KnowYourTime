import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';




const Button = () => {
    return (
      <View style={styles.container}>
        <Button1 title="Focus" size="sm" backgroundColor="#FFB6C1" />
        <Button2 title="Cooking" size="sm" backgroundColor="#FFB6C1" />
        <Button3 title="Excercise" size="sm" backgroundColor="#FFB6C1" />
        <Button4 title="Reading" size="sm" backgroundColor="#FFB6C1" />
        <Button5 title="Meditation" size="sm" backgroundColor="#FFB6C1" />
        <Button6 title="Coding" size="sm" backgroundColor="#FFB6C1" />
      </View>
    );
  }
  export default Button;

  const styles = StyleSheet.create({
    
    ButtonContainer1: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: -10,
      left: -125,
      bottom: -160,
      width: 115

  
    },
  
    ButtonContainer2: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 0,
      left: -5,
      bottom: -120,
  
    },
  
    ButtonContainer3: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      left: 128,
      bottom: -80,
  
    },
  
    ButtonContainer4: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 11,
      left: -126,
      bottom: -130,
      width: 115
  
    },
  
    ButtonContainer5: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 9,
      left: -6,
      bottom: -90,
  
    },
  
    ButtonContainer6: {
      elevation: 5,
      backgroundColor: "#AA336A",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 23,
      left: 127,
      bottom: -50,
  
    },
  
    ButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
  });
  

  const Button1 = ({ onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer1}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button2 = ({ onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer2}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button3 = ({ onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer3}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button4 = ({ onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer4}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button5 = ({ onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer5}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
  
  const Button6 = ({ onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.ButtonContainer6}>
    <Text style={styles.ButtonText}>{title}</Text>
  </TouchableOpacity>
  );
