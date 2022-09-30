import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export default function SobreScreen() {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sobre Screen</Text>
            <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
            <Text>{route.params.nome}</Text>
        </View>
    );
}
