import * as React from 'react';
import { View, StyleSheet, TextInput, Button, Text, Alert } from 'react-native';
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
      signInUser = () => {
        console.log('Button pressed');
        firebase
          .auth().signInWithEmailAndPassword(this.state.email, this.state.password)
          .then( (response) => {
            console.log(response.user.email + " signed in successfully");
            this.props.navigation.navigate("Home");
          })
          .catch( (error) => {
            this.displayAlert(error.message)
            console.log(error.code);
            console.log(error.message);
          });
      };

    displayAlert = (message) => {
        Alert.alert(
            'Login Unsuccessful',
            {message},
            [
                {
                    text: 'OK',
                    onPress: () => console.log('Ok Pressed'),
                },
            ],
            { cancelable: false }
        );
    };

    signup = () => {
        this.props.navigation.navigate("SignUp")
    }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.itemContainer, { alignItems: 'center' }]}>
          <Text style={styles.textStyles}>Login</Text>
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
          <Button title="Login" onPress={this.signInUser} />
        </View>
        <View style={[styles.itemContainer, { paddingBottom: 8 }]}>
          <Button title="Sign Up" onPress={this.signup} />
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
