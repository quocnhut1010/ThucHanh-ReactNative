import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    box: {
        width: 80,
        height: 80,
        backgroundColor: '#7ce0f9',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

interface SquareProps {
    text: string; // Khai báo kiểu dữ liệu cho prop 'text' là string
}

const Square: React.FC<SquareProps> = ({ text }) => (
    <View style={styles.box}>
        <Text>{text}</Text>
    </View>
);

export default () => (
    <View style={styles.container}>
        <Square text="1" />
        <Square text="2" />
        <Square text="3" />
    </View>
);