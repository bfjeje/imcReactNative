import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {
  const [resultado, setResultado] = useState('');
  const [altura, setAltura] = useState(0.0);
  const [peso, setPeso] = useState(0);
  const [resultadoEmPalabras, setResultadoEmPalabras] = useState('');
  const calcular = () => {
    const imc = peso / Math.pow(altura, 2);
    setResultado(Math.round(imc * 100) / 100);
  };

  useEffect(() => {
    if (parseFloat(resultado) >= 30.0) {
      setResultadoEmPalabras('Obesidade');
    } else if (parseFloat(resultado) <= 18.5) {
      setResultadoEmPalabras('Baixo peso');
    } else if (parseFloat(resultado) >= 25.0 && parseFloat(resultado) < 30.0) {
      setResultadoEmPalabras('Sobrepeso');
    } else if (parseFloat(resultado) > 18.5 && parseFloat(resultado) < 25.0) {
      setResultadoEmPalabras('Normal');
    } else {
      setResultadoEmPalabras('');
    }
  }, [resultado]);

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Qual é seu IMC?</Text>
      <TextInput
        style={styles.input}
        inputMode={'numeric'}
        placeholder="Insira sua altura em cm"
        onChangeText={value => {
          setAltura(parseInt(value, 10) / 100);
        }}
      />
      <TextInput
        style={styles.input}
        inputMode={'numeric'}
        placeholder="Insira seu peso em kg"
        onChangeText={value => {
          setPeso(parseInt(value, 10));
        }}
      />
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.button_text}>Calcular!</Text>
      </TouchableOpacity>
      <View style={styles.view_resultado}>
        <Text style={styles.title}>Resultado: </Text>
        <View style={styles.view_values}>
          <Text>Valor do IMC: {resultado}</Text>
          <Text>Isso significa: {resultadoEmPalabras}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#76c893',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
  input: {
    margin: 8,
    backgroundColor: '#b5e48c',
  },
  button: {
    backgroundColor: '#184e77',
    borderRadius: 4,
    marginHorizontal: 8,
    padding: 8,
  },
  button_text: {
    alignSelf: 'center',
    color: 'white',
  },
  view_resultado: {
    backgroundColor: '#34a0a4',
    margin: 8,
    padding: 8,
  },
  view_values: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
export default App;
