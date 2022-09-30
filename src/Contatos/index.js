import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export default function ContatoScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contato Screen</Text>
            <Button title="Sobre" onPress={() => navigation.navigate('Sobre', { nome: 'Alan' })} />
        </View>
    );
}
