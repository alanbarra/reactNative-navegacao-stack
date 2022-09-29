import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export default function SobreScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sobre Screen</Text>
            <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}