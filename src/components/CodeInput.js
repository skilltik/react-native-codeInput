import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, Platform, Text } from 'react-native';

class CodeInput extends Component {

    state = {
        value: ''
    }

    constructor(props) {
        super(props);
    }

    render() {

        /*return (
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>

                <TextInput ref="_codeInput" onChangeText={event => this.onChangeInput(event)} value={codeInput.value} keyboardType={'numeric'} caretHidden={false} autoCorrect={false} style={styles.inputCode} />

                <View style={{ justifyContent: 'space-between', width: 200, heigh: 2, flexDirection: 'row', top: -10 }}>
                    <View style={[styles.underlineInput, { borderBottomColor: codeInput.value.length > 0 ? PRIMARY : GRAY01 }]} />
                    <View style={[styles.underlineInput, { borderBottomColor: codeInput.value.length > 1 ? PRIMARY : GRAY01 }]} />
                    <View style={[styles.underlineInput, { borderBottomColor: codeInput.value.length > 2 ? PRIMARY : GRAY01 }]} />
                    <View style={[styles.underlineInput, { borderBottomColor: codeInput.value.length > 3 ? PRIMARY : GRAY01 }]} />
                    <View style={[styles.underlineInput, { borderBottomColor: codeInput.value.length > 4 ? PRIMARY : GRAY01 }]} />
                    <View style={[styles.underlineInput, { borderBottomColor: codeInput.value.length > 5 ? PRIMARY : GRAY01 }]} />
                </View>
            </View>
        );*/

        return (<Text>test</Text>)
    }
}

const styles = StyleSheet.create({

});


export default CodeInput;
