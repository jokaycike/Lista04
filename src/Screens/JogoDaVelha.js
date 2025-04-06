import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import TabuleiroHM from '../components/TabuleiroHH';

export default function JogoDaVelha({navigation}) {
  return (
    <View>
      <Text>Jogo Da velha</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('HomemVsHomem')}>
        <Text>Navegar para jogo humano x humano</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={() => navigation.navigate('HomemVsMaquina')}>
        <Text>Navegar para jogo humano x maquina</Text>
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
