import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WelcomeScreen =({navigation}: {navigation: any}) => (
<View style={styles.container}>
    <Text style={styles.text}> Bienvenido al POKEDEX</Text>
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('PokeList')}>
    <Image source={require('../assets/Pokebola.png')} style={styles.image}/>
    </TouchableOpacity>
    <Text>Toca la Pokebola para ingresar</Text>
</View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ff0000',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom:10,
    },
    image: {
        width:'100%',
        height:'100%',
        resizeMode:'contain',
    },
});
export default WelcomeScreen;