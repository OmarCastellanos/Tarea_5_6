import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen =({navigation}: {navigation: any}) => (
<View>
<Text> Bienvenido al POKEDEX</Text>
<Button title='Ingresar' onPress={()=> navigation.navigate('Pokelist')}/>
</View>
);
export default WelcomeScreen;