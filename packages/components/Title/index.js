import React from 'react';
import {Text} from 'react-native';

export default (props) => (
    <Text style={{
        color: "#1C1CAC",
        fontSize: 28,
        padding: 22,
        marginTop: 32,
        fontWeight: '700',
    }}>
        {props.text}
    </Text>
)