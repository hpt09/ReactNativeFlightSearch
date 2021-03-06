import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import data from '../json/flights.json'
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }
    componentDidMount() {
        this.setState({
            isLoading: false,
            dataSource: data
        })
    }
    render() {

        if (this.state.isLoading) {
            return (
                <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View>

            <Text style={styles.heading}>One-way Flights from {this.props.navigation.getParam('originCity')} to {this.props.navigation.getParam('destinationCity')}</Text>
               
                {this.state.dataSource.map(flight => {
                    return flight.originCity.toUpperCase() === this.props.navigation.getParam('originCity').toUpperCase() &&
                        flight.destinationCity.toUpperCase() == this.props.navigation.getParam('destinationCity').toUpperCase() &&
                        flight.departureDate == this.props.navigation.getParam('departureDate') &&
                        flight.passengers > this.props.navigation.getParam('passengers') && 
                        // <Text>{flight.originCity} to {flight.destinationCity}</Text>
                        <View style={styles.boxContainer}>
                            <Text>${flight.price}</Text>
                            <Text>Flight No: {flight.flightNo}</Text>
                            
                            <Text>Depart: {flight.departTime}</Text>
                            <Text>Arrival: {flight.arriveTime}</Text>
                        </View>
                })}

            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    row: {
        padding: 12,
        marginBottom: 5,
        backgroundColor: 'skyblue'
    },
    boxContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        height: 200,
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        fontSize: 20,
        textAlign: "center"
    }
})
