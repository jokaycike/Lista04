import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import TabuleiroHM from '../components/TabuleiroHM';

export default function HomemVsMaquina({navigation}) {
  return (
    <View>
      <Text style={styles.title}>Jogo Humano x Maquina</Text>
      <TabuleiroHM/>
      <TouchableOpacity style={styles.buttonBack}
      onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
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
  buttonBack: {
    backgroundColor: '#6c757d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '20%',
    marginTop: 20,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
  },
});
