import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title="Contatos" onPress={() => navigation.navigate('ContatoScreen')} />
            <Button title="Sobre" onPress={() => navigation.navigate('SobreScreen')} />
        </View>
    );
}