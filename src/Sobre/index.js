import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SobreScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sobre Screen</Text>
            <Button title="Voltar para Home" onPress={() => navigation.navigate('HomeScreen')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
}