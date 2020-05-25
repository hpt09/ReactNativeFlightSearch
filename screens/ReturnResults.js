import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Text, StyleSheet } from 'react-native';
import data from '../json/returnFlights.json'

export default class ReturnResults extends Component {
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
                <Text style = {styles.heading}>Return Flights from {this.props.navigation.getParam('originCity')} to {this.props.navigation.getParam('destinationCity')}</Text>
               
                {this.state.dataSource.map(flight => {
                    return flight.originCity == this.props.navigation.getParam('originCity') &&
                        flight.destinationCity == this.props.navigation.getParam('destinationCity') &&
                        flight.departureDate == this.props.navigation.getParam('departureDate') &&
                        flight.arrivalDate == this.props.navigation.getParam('arrivalDate') &&
                        flight.passengers > this.props.navigation.getParam('passengers') && 
                        // <Text>{flight.originCity} to {flight.destinationCity}</Text>
                        <View style={styles.boxContainer}>
                            <Text>${flight.price}</Text>
                            <Text>Flight No: {flight.flightNo}</Text>
                            <Text>Depart Date: {flight.departureDate}</Text>
                            <Text>Depart: {flight.departTime}</Text>
                            <Text>Arrival: {flight.arriveTime}</Text>
                            <Text>Return Date: {flight.returnDate}</Text>
                            <Text>Depart: {flight.returnDepartTime}</Text>
                            <Text>Arrival: {flight.returnArriveTime}</Text>
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
