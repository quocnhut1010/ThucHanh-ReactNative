import React from 'react';
import { Text, View, FlatList } from 'react-native';

const data = Array.from({ length: 50 }, (_, i) => ({
    key: `${i}`, 
    name: `Item ${i + 1}`, 
}));

export default () => (
    <FlatList
        data={data} 
        renderItem={({ item }) => ( 
            <View style={{ padding: 18 }}>
                <Text>{item.name}</Text>
            </View>
        )}
    />
);