import { StyleSheet, View } from 'react-native';
import Celula from './Celula';
import React, { useState } from 'react';

export default function Tabuleiro() {
  const [tabuleiroJogo, setTabuleiroJogo] = useState(Array(9).fill('--'));
  const [jogadas, setJogadas] = useState(0);

  function fazerjogada(indice) {
    let tabuleiroAux = [...tabuleiroJogo];
    let numeroJogadas = jogadas;
  
    if (tabuleiroAux[indice] !== '--') {
      return;
    }
  
    numeroJogadas++;
    tabuleiroAux[indice] = 'X';
  
    if (verificarVitoria('X', tabuleiroAux)) {
      setTabuleiroJogo(tabuleiroAux);
      setTimeout(() => alert('Jogador X venceu!'), 100);
      return;
    }
  
    if (numeroJogadas === 9) {
      setTabuleiroJogo(tabuleiroAux);
      setTimeout(() => alert('Deu Velha!'), 100);
      return;
    }
  
    const indiceMaquina = escolherJogadaMaquina(tabuleiroAux);
    if (indiceMaquina !== -1) {
      tabuleiroAux[indiceMaquina] = 'O';
      numeroJogadas++;

      if (verificarVitoria('O', tabuleiroAux)) {
        setTabuleiroJogo(tabuleiroAux);
        setTimeout(() => alert('Jogador O venceu!'), 100);
        return;
      }
    }
  
    setJogadas(numeroJogadas);
    setTabuleiroJogo(tabuleiroAux);
  }

  function escolherJogadaMaquina(tabuleiro) {
    const jogadasPossiveis = tabuleiro
      .map((valor, indice) => (valor === '--' ? indice : null))
      .filter((indice) => indice !== null);
  
    if (jogadasPossiveis.length === 0) {
      return -1;
    }
  
    
    for (let i = 0; i < jogadasPossiveis.length; i++) {
      const indice = jogadasPossiveis[i];
      const tabuleiroTeste = [...tabuleiro];
      tabuleiroTeste[indice] = 'X';
  
      if (verificarVitoria('X', tabuleiroTeste)) {
        return indice;
      }
    }
  
    const jogadaAleatoria = Math.floor(Math.random() * jogadasPossiveis.length);
    return jogadasPossiveis[jogadaAleatoria];
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
