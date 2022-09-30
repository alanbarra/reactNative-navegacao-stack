import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';

export default function SobreScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { nome } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sobre Screen</Text>
            <Button title="Voltar para Home" onPress={() => navigation.navigate('Home')} />
            <Text>{nome}</Text>
        </View>
    );
}
