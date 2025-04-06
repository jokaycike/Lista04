import { StyleSheet, View } from 'react-native';
import Celula from './Celula';
import React, { useState } from 'react';

export default function Tabuleiro() {
    const [tabuleiroJogo, setTabuleiroJogo] = useState(Array(9).fill('--'));
    const [jogadas, setJogadas] = useState(0);
    const [jogadorAtual, setJogadorAtual] = useState('X');

    function fazerjogada(indice) {
        let tabuleiroAux = [...tabuleiroJogo];
        let numeroJogadas = jogadas;

        if (tabuleiroAux[indice] !== '--') {
            return;
        }

        tabuleiroAux[indice] = jogadorAtual;
        numeroJogadas++;

        if (verificarVitoria(jogadorAtual, tabuleiroAux)) {
            setTabuleiroJogo(tabuleiroAux);
            setTimeout(() => alert(`Jogador ${jogadorAtual} venceu!`), 100);
            return;
        }

        if (numeroJogadas === 9) {
            setTabuleiroJogo(tabuleiroAux);
            setTimeout(() => alert('Deu Velha!'), 100);
            return;
        }

        setJogadas(numeroJogadas);
        setTabuleiroJogo(tabuleiroAux);
        setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
    }

    function verificarVitoria(jogador, tabuleiro) {
        const vitorias = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        return vitorias.some(
            ([a, b, c]) =>
                tabuleiro[a] === jogador &&
                tabuleiro[b] === jogador &&
                tabuleiro[c] === jogador
        );
    }

    return (
        <View style={styles.container}>
            {tabuleiroJogo.map((valor, indice) => (
                <Celula key={indice} valor={valor} onPress={() => fazerjogada(indice)} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
