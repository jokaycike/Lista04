import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Pagina1({navigation}) {
  return (
    <View>
      <Text>Estou na pagina 1</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Pagina2')}>
        <Text>Navegar pag2</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
