import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ContatoScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contato Screen</Text>
            <Button title="Voltar para Home" onPress={() => navigation.navigate('HomeScreen')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    );
}