import * as React from 'react';
import { View, StyleSheet, TextInput, Button, Text, Switch } from 'react-native';
export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      originCity: '',
      destinationCity: '',
      departureDate: '',
      passengers: 0,
      returnDate: '',
      return: false,
      price:100000,
      flights: []
      };
    }
  
  handle = () => {
    if(this.state.return === false){
      this.props.navigation.navigate("Results", this.state)
    } else {
      this.props.navigation.navigate("ReturnResults", this.state)
    }
    
   
  };

  onSwitchChange(value) {
    this.setState({
      return: !this.state.return,
    });
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name]:e.target.value})
        console.log(e.target.value)
        console.log(this.state.passengers)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.itemContainer, { alignItems: 'center' }]}>
          <Text style={styles.textStyles}>Flight Search Engine</Text>
        </View>
        <View style={styles.itemContainer}>
          <TextInput
            style={styles.box}
            placeholder="Enter Origin city"
            onChangeText={value => {
              this.setState({
                originCity: value,
              });
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          <TextInput
            style={styles.box}
            placeholder="Enter Destination city"
            onChangeText={value => {
              this.setState({
                destinationCity: value,
              });
            }}
          />
        </View>
        <View style={styles.itemContainer}>
          
        <Text>Departure Date</Text>
        <input type="date" name="departureDate" onChange={this.handleChange} ></input>

          
        </View>

        {this.state.return && 
        <View style={styles.itemContainer}>
        <Text>Arrival Date</Text>
        <input type="date" name="returnDate" onChange={this.handleChange} ></input> 
        </View>
        }

        <View style={styles.itemContainer}>
          
          <Text>Passengers</Text>
          <input type="number" name="passengers" onChange={this.handleChange}></input>
          </View>

          <View style={styles.itemContainer}>
          
          <Text>One Way</Text>
          <Switch
          value={this.state.return}
          onValueChange={value => this.onSwitchChange(value)}
        />
          <Text>Return</Text>
          </View>


        <View style={[styles.itemContainer, { paddingBottom: 8 }]}>
          <Button title="Search" onPress={this.handle} />
        
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
