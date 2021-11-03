import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

export const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const calculateluckyNumber = () => {
    if (!name || !age) {
      ToastAndroid.show('Favor de ingresar los valores solicitados', 2000);
      return;
    }
    let luckyNumber = Number(age);
    if (luckyNumber < 1 || luckyNumber > 99) {
      ToastAndroid.show('Edad no válida', 2000);
      return;
    }
    if (luckyNumber < 10 && luckyNumber > 1) {
      luckyNumber *= 7;
    }
    while (luckyNumber > 9 && luckyNumber < 100) {
      luckyNumber = luckyNumber
        .toString()
        .split('')
        .reduce(
          (previousValue, currentValue) =>
            Number(previousValue) + Number(currentValue),
          0,
        );
    }
    ToastAndroid.show(
      `Bienvenido ${name} tu número de la suerte es ${luckyNumber}`,
      2000,
    );
  };
  return (
    <View style={styles.ContentPrimary}>
      <View style={styles.Content}>
        <Image
          style={styles.Image}
          source={{
            uri: 'data:image/jpeg;base64,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',
          }}
        />
        <Text style={styles.Textstyle}>
          Welcome! enter your age and Captain Hawk will give your lucky number!
        </Text>
        <TextInput
          style={styles.Input}
          placeholder="Name"
          placeholderTextColor="#9E9E9E"
          underlineColorAndroid="transparent"
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.Input}
          placeholder="Age"
          placeholderTextColor="#9E9E9E"
          underlineColorAndroid="transparent"
          keyboardType="numeric"
          onChangeText={text => setAge(text)}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => calculateluckyNumber()}>
          <Text style={styles.Textstyle}>Calculated...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ContentPrimary: {
    backgroundColor: '#f72585',
    paddingVertical: 32,
  },
  Content: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#212f45',
    borderRadius: 20,
    paddingVertical: 40,
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 16,
    margin: 10,
  },
  Textstyle: {
    color: '#dfff',
    textAlign: 'center',
    fontSize: 20,
    margin: 15,
  },
  Input: {
    marginTop: 20,
    borderRadius: 25,
    fontSize: 18,
    paddingLeft: 30,
    paddingRight: 160,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    color: '#dfff',
  },
  buttonStyle: {
    marginTop: 20,
    borderRadius: 80,
    backgroundColor: '#7209b7',
    color: 'white',
  },
});

export default App;
