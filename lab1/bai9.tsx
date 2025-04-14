import React from 'react';
import { Text, SectionList } from 'react-native';
const DATA = [
    {title: 'A', data: ['Apple', 'Avocado']},
    {title: 'B', data: ['Banana', 'Blueberry']},
];
    export default () => (
    <SectionList
        sections = {DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={{ paddingLeft: 20}}>{item}</Text>}
        renderSectionHeader= {({ section: {title} }) => (
        <Text style={{ fontWeight: 'bold', backgroundColor: '#eee' }}>{title}</Text>
        )}
    />
);