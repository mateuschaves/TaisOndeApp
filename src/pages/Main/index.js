import React, { Component } from 'react';

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

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      loadingButton: false
    };
  }


  render() {
    return (
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
            value={this.state.userName}
            style={styles.inputUser}
            onChangeText={ userName => this.setState({ userName })}
          />
          <Button
            color='#fff'
            loading={this.state.loadingButton}
            style={styles.button}
            icon="send"
            mode='outlined'
            onPress={() => {
              this.setState({ loadingButton: true });
              this.props.navigation.navigate('Maps', { userName: this.state.userName });
            }}
            >
              Manda pá geral
          </Button>
        </View>

      </View>
    );
  }
}
