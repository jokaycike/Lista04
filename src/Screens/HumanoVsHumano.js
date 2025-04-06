import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import TabuleiroHM from '../components/TabuleiroHH';

export default function HomemVsHomem({navigation}) {
  return (
    <View>
      <Text>Jogo Humano x Humano</Text>
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
