/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, FlatList, TouchableOpacity, TextInput
} from 'react-native';
import Data from './Data'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ID: '',
            Name: '',
            Age: '',
            School: '',

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
                <FlatList style={styles.FlatList}
                    data={Data}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('detail', { id: item.id, Name: item.Name, Age: item.Age, School: item.School })}>
                                    <Text>{item.Name}</Text>
                                </TouchableOpacity>
                            </View>)} />
                <View style={styles.TextInput}>
                    <TextInput
                        style={{ width: 100, }}
                        placeholder="ID"
                        value={this.state.ID}
                        onChangeText={(text) => this.setState({ ID: text })}
                    />
                    <TextInput
                        style={{ width: 100, }}
                        placeholder="Name"
                        value={this.state.Name}
                        onChangeText={(text) => this.setState({ Name: text })}
                    />
                    <TextInput
                        style={{ width: 100, }}
                        placeholder="Age"
                        value={this.state.Age}
                        onChangeText={(text) => this.setState({ Age: text })}
                    />
                    <TextInput
                        style={{ width: 100, }}
                        placeholder="School"
                        value={this.state.School}
                        onChangeText={(text) => this.setState({ School: text })}
                    />
                    <TouchableOpacity
                    onPress={()=>
                        {if (this.state.ID.length==0 || this.state.Name==0 || this.state.Age ==0  || this.state.School ==0){
                            alert("Bạn chưa nhập thông tin")                     
                        }
                    const newId ={
                        key:this.state.ID,
                        Name:this.state.Name,
                        Age:this.state.Age,
                        School:this.state.School
                    };
                    Data.push(newId)
                    }
                    }
                    >
                        <Text>Thêm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    TextInput: {
        flex: 5
    },
    FlatList: {
        height: 100,
        width: 100,
    }

});
