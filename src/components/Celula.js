import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function Celula({valor, onPress}){
    return(
        <View style={styles.container}>
          <TouchableOpacity onPress={onPress}>
            <Text styles={styles.text}>{valor}</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: 100,
      height: 100,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      fontSize: 36,
      fontWeight: 'bold'
    }
  });