import React, { useState } from 'react';

import {
  Text, Image, StyleSheet, Dimensions, ImageBackground, StatusBar, View
} from 'react-native';

import {
   TextInput,
   Button
} from 'react-native-paper';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#7159c1'
  },
  form: {
    width: 300,
    marginTop: 100
  },
  textName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },
  button: {
    marginTop: 20,
    width: 300,
    borderColor: '#fff'
  },
  inputUser: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
});

export default function Main(){
  const [userName, setUserName] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  return(
    <View
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

      <View
        style={styles.form}
      >
          <Text style={styles.textName}>Manda teu nome aí </Text>
          <TextInput
            label='Usuário'
            value={userName}
            style={styles.inputUser}
            onChangeText={ text => setUserName(text)}
          />
          <Button
            color='#fff'
            loading={loadingButton}
            style={styles.button}
            icon="send" 
            mode='outlined' 
            onPress={() => setLoadingButton(true)}>
              Manda pá geral
          </Button>
      </View>
    
    </View>
  );
}
