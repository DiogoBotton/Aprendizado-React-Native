import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [tela, setTela] = useState('menu');
  const [jogadorAtual, setJogadorAtual] = useState('');

  // É preciso colocar <any> para cessar erros na matriz
  const [tabuleiro, setTabuleiro] = useState<any>([]);

  const [jogadasRestantes, setJogadasRestantes] = useState(0);
  const [ganhador, setGanhador] = useState('');

  const iniciarJogo = (jogador: string) => {
    setJogadorAtual(jogador);
    setJogadasRestantes(9);

    // Matriz funciona na ordem Linha X Coluna
    setTabuleiro([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);

    setTela('jogo');
  }

  const jogar = (linha: number, coluna: number) => {
    // Altera linha e coluna específicas da matriz
    tabuleiro[linha][coluna] = jogadorAtual;

    // Alterando os dados na matriz (operador elíptico)
    setTabuleiro([...tabuleiro]);

    // Altera o jogador atual
    setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');

    // Verifica se alguém ganhou ou resultou em empate
    verificarGanhador(tabuleiro, linha, coluna);
  }

  const verificarGanhador = (tabuleiro: any, linha: number, coluna: number) => {
    // Linhas
    if (tabuleiro[linha][0] !== '' && tabuleiro[linha][0] === tabuleiro[linha][1] && tabuleiro[linha][1] === tabuleiro[linha][2]) {
      finalizarJogo(tabuleiro[linha][0])
    }

    // Colunas
    else if (tabuleiro[0][coluna] !== '' && tabuleiro[0][coluna] === tabuleiro[1][coluna] && tabuleiro[1][coluna] === tabuleiro[2][coluna]) {
      finalizarJogo(tabuleiro[0][coluna])
    }

    // Diagonal 1
    else if (tabuleiro[0][0] !== '' && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
      finalizarJogo(tabuleiro[0][0])
    }

    // Diagonal 2
    else if (tabuleiro[0][2] !== '' && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
      finalizarJogo(tabuleiro[0][2])
    }

    // Empate
    else if (jogadasRestantes - 1 === 0) {
      empatarJogo();
    }

    // Retira uma jogada
    setJogadasRestantes(jogadasRestantes - 1);
  }

  const empatarJogo = () => {
    setTabuleiro([]);
    setJogadorAtual('');
    setTela('empate');
  }

  const finalizarJogo = (vencedor: string) => {
    setGanhador(vencedor);
    setTabuleiro([]);
    setJogadorAtual('');
    setTela('ganhador');
  }

  switch (tela) {
    case 'menu':
      return getMenu();

    case 'jogo':
      return getJogo();

    case 'ganhador':
      return getGanhador();

    case 'empate':
      return getEmpate();

    default:
      return getMenu();
  }

  function getMenu() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
        <Text style={styles.title}>Jogo da Velha</Text>
        <Text style={styles.subTitle}>Escolha seu jogador</Text>

        <View style={styles.inlineItems}>
          <TouchableOpacity style={styles.boxJogador} onPress={() => iniciarJogo('X')}>
            <Text style={styles.jogadorX}>X</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.boxJogador} onPress={() => iniciarJogo('O')}>
            <Text style={styles.jogadorO}>O</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }

  function getJogo() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
        <Text style={styles.title}>Jogo da Velha</Text>

        {
          tabuleiro.map((linha: any, nLinha: number) => {
            return (
              <View
                style={styles.inlineItems}
                key={nLinha}>

                {
                  linha.map((coluna: string, nColuna: number) => {
                    return (
                      <TouchableOpacity
                        key={nColuna}
                        style={styles.boxJogador}
                        onPress={() => jogar(nLinha, nColuna)}
                        disabled={coluna !== '' ? true : false} >
                        <Text
                          style={coluna === 'X' ? styles.jogadorX : styles.jogadorO}
                        >{coluna}</Text>

                      </TouchableOpacity>
                    );
                  })
                }
              </View>
            );
          })
        }
        <TouchableOpacity style={styles.botaoVoltar}
          onPress={() => setTela('menu')}>
          <Text style={styles.txtBotaoVoltar}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function getEmpate() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
        <Text>O jogo empatou!</Text>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => setTela('menu')}>
          <Text style={styles.txtBotaoVoltar}>Voltar para o menu</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function getGanhador() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto"></StatusBar>
        <Text>Temos um vendedor!!!</Text>
        <Text>Parabéns!!!</Text>

        <TouchableOpacity
          style={styles.boxJogador}
          disabled={true} >
          <Text
            style={ganhador === 'X' ? styles.jogadorX : styles.jogadorO}
          >{ganhador}</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoVoltar}
          onPress={() => setTela('menu')}>
          <Text style={styles.txtBotaoVoltar}>Voltar para o menu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  botaoVoltar: {
    marginTop: 100,
    padding: 20,
    backgroundColor: '#df0000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },

  txtBotaoVoltar: {
    color: '#fff',
    fontSize: 20
  },

  title: {
    fontSize: 20,
    marginBottom: 80,
    fontWeight: 'bold',
  },

  subTitle: {
    marginTop: 40,
    fontSize: 15,
    color: '#838383'
  },

  boxJogador: {
    width: 50,
    height: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#838383'
  },

  jogadorX: {
    fontSize: 30,
    color: '#fff',
  },

  jogadorO: {
    fontSize: 30,
    color: '#fff',
  },

  inlineItems: {
    margin: 10,
    flexDirection: 'row',
  }
});
