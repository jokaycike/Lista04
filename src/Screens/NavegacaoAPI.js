import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import TabuleiroHM from '../components/TabuleiroHH';

export default function NavegacaoAPI({navigation}) {
  return (
    <View>
      <Text style={styles.title}>Jogo Da velha</Text>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('HomemVsHomem')}>
        <Text style={styles.buttonText}>Navegar para jogo humano x humano</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('HomemVsMaquina')}>
        <Text style={styles.buttonText}>Navegar para jogo humano x maquina</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Conversor de moeda</Text>
      <TouchableOpacity style={styles.button}
      onPress={() => navigation.navigate('ConversorMoedas')}>
        <Text style={styles.buttonText}>Navegar para Conversor de moeda</Text>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    width: '50%'
  },
  buttonBack: {
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
},
buttonText: {
    color: '#fff',
    fontSize: 16,
},
});
