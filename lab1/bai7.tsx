import React, { useState } from 'react';
import { Text, TextInput, Button, View } from 'react-native';
export default () => {
    const [name, setName] = useState('');
    return (
        <View style={{ padding: 20 }}>
            <Text>What is your name?</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                style={{ borderBottomWidth: 1, marginBottom: 10}}
                placeholder="Enter name"
            />
            <Button title="Submit" onPress={() => alert(`Hello, ${name}!`)} />
        </View>
    );
};