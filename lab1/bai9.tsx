import React from 'react';
import { Text, SectionList, StyleSheet, View } from 'react-native';

const DATA = [
    {title: 'A', data: ['Apple', 'Avocado','Application']},
    {title: 'B', data: ['Banana', 'Blueberry',"Build"]},
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22, // Adjust as needed for status bar
        backgroundColor: '#f8f8f8', // Light gray background
    },
    sectionHeader: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#e0f7fa', // Light cyan background for headers
        color: '#008080', // Teal color for header text
    },
    item: {
        padding: 15,
        fontSize: 16,
        color: '#333',
        borderBottomWidth: 1,
        borderColor: '#eee',
        backgroundColor: 'white', // White background for items
    },
    listTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: '#2196f3', // Blue color for title
    },
    listFooter: {
        padding: 20,
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#777',
    },
});

export default () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    let greeting = '';

    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good afternoon!';
    } else if (currentHour >= 18 && currentHour < 22) {
        greeting = 'Good evening!';
    } else {
        greeting = 'Good night!';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.listTitle}>Danh sách các mục</Text>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => (
                    <Text style={styles.item}>{item}</Text>
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
                ListFooterComponent={() => (
                    <View style={styles.listFooter}>
                        <Text style={styles.footerText}>Chúc bạn một ngày tốt lành! ({greeting})</Text>
                    </View>
                )}
            />
        </View>
    );
};