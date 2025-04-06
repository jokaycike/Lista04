import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import TabuleiroHM from '../components/TabuleiroHH';

export default function ConversorMoedas({ navigation }) {
    const [realValue, setRealValue] = useState('');
    const [dolarValue, setDolarValue] = useState('');
    const [cotacao, setCotacao] = useState(0);

    useEffect(() => {
        buscarCotacao();
    }, []);

    const buscarCotacao = async () => {
        try {
            const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
            const data = await response.json();
            const taxa = (parseFloat(data.USDBRL.bid) + parseFloat(data.USDBRL.ask)) / 2;
            setCotacao(taxa);
        } catch (error) {
            console.error('Erro ao buscar cotação:', error);
        }
    };

    const converterParaDolar = () => {
        if (!realValue || isNaN(parseFloat(realValue))) return;
        const valorConvertido = parseFloat(realValue) / cotacao;
        setDolarValue(valorConvertido.toFixed(2));
    };

    const converterParaReal = () => {
        if (!dolarValue || isNaN(parseFloat(dolarValue))) return;
        const valorConvertido = parseFloat(dolarValue) * cotacao;
        setRealValue(valorConvertido.toFixed(2));
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Conversor de Moedas</Text>
        
        <View style={styles.inputContainer}>
            <Text style={styles.label}>Valor em Reais</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira um valor em Reais"
                keyboardType="numeric"
                value={realValue}
                onChangeText={setRealValue}
            />
        </View>
        <TouchableOpacity onPress={converterParaDolar} style={styles.button}>
            <Text style={styles.buttonText}>Converter para Dólar</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
            <Text style={styles.label}>Valor em Dólares</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira um valor em Dólares"
                keyboardType="numeric"
                value={dolarValue}
                onChangeText={setDolarValue}
            />
        </View>
        <TouchableOpacity onPress={converterParaReal} style={styles.button}>
            <Text style={styles.buttonText}>Converter para Real</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.buttonBack}>
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
      padding: 20,
  },
  title: {
      fontSize: 24,
      marginBottom: 20,
  },
  label: {
      fontSize: 16,
      marginBottom: 5,
      color: '#333',
  },
  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      borderRadius: 5,
      width: '100%',
      marginBottom: 10,
  },
  button: {
      backgroundColor: '#007BFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
      width: 300
  },
  buttonBack: {
      backgroundColor: '#6c757d',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
  },
});