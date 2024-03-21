import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

interface PokemonDetails{
    id: number;
    name: string;
    abilities: {ability: {name: string} }[];
    sprites: {front_default: string};
}

const PokeDetailsScreen =({route}:{route: any}) =>{
    const [pokemonDetails, setPokemonDetails]= useState<PokemonDetails | null> (null);

    useEffect(()=>{
        axios.get(route.params.url)
        .then(response => setPokemonDetails(response.data));
    }, []);
    return pokemonDetails ? (
        <View style={styles.container}>
            <Image source={{uri: pokemonDetails.sprites.front_default}} style ={styles.image} />
            <Text style={styles.name}>{pokemonDetails.name}</Text>
            <Text style={styles.title}>Habilidades:</Text>
            {pokemonDetails.abilities.map(ability => <Text key={ability.ability.name}
            style={styles.ability}>
            {ability.ability.name}</Text>)}
        </View>
    ) : null;
};

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: '#f5fcff',
    },
    image:{
        width: 250,
        height: 250,
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
    },
    ability:{
        fontSize: 15,
        marginTop: 10,
    },
 });

export default PokeDetailsScreen;