import * as React from 'react';
import { View, StyleSheet, TextInput, Button, Text } from 'react-native';
import firebase from 'firebase';
export default class App extends React.Component {
  componentDidMount() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDNbmyA1H2VxcKMpYjaiJ3M1ve5UZ7DFDM",
        authDomain: "reactnative-d6f5d.firebaseapp.com",
        databaseURL: "https://reactnative-d6f5d.firebaseio.com",
        projectId: "reactnative-d6f5d",
        storageBucket: "reactnative-d6f5d.appspot.com",
        messagingSenderId: "486790976715",
        appId: "1:486790976715:web:92bed0a699573cfd7e374e",
        measurementId: "G-DWZMFGJP2F"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    console.log(firebase);
  }
  createUser = () => {
    console.log('Button pressed');
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function (response) {
        console.log(response.user.email + " created successfully")
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.itemContainer, { alignItems: 'center' }]}>
          <Text style={styles.textStyles}>Create User</Text>
        </View>
        <View style={styles.itemContainer}>
          <TextInput
            style={styles.box}
            placeholder="enter email address"
            onChangeText={value => {
              this.setState({
                email: value,
              });
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <TextInput
          secureTextEntry={true}
            style={styles.box}
            placeholder="confirm password"
            onChangeText={value => {
              this.setState({
                password: value,
              });
            }}
          />
        </View>
        <View style={[styles.itemContainer, { paddingBottom: 8 }]}>
          <Button title="Create User" onPress={this.createUser} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    padding: 10,
  },
  itemContainer: {
    backgroundColor: 'white',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 8,
  },
  box: {
    borderRadius: 2,
    borderColor: 'gray',
    borderWidth: 1,
  },
  textStyles: {
    fontWeight: 'bold',
    fontSize: 22,
    backgroundColor: 'white',
  },
});
