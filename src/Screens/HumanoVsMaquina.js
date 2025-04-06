import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import TabuleiroHM from '../components/TabuleiroHM';

export default function HomemVsMaquina({navigation}) {
  return (
    <View>
      <Text>Jogo Humano x Maquina</Text>
      <TabuleiroHM/>
      <TouchableOpacity
      onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
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
