import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import axios from 'axios';

interface PokemonDetails{
    id: number;
    name: string;
    abilities: {ability: {name: string} }[];
}

const PokeDetailsScreen =({route}:{route: any}) =>{
    const [pokemonDetails, setPokemonDetails]= useState<PokemonDetails | null> (null);

    useEffect(()=>{
        axios.get(route.params.url)
        .then(response => setPokemonDetails(response.data));
    }, []);
    return pokemonDetails ? (
        <View>
            <Image source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${pokemonDetails.id}.png` }} />
            <Text>{pokemonDetails.name}</Text>
            <Text>Habilidades:</Text>
            {pokemonDetails.abilities.map(ability => <Text key={ability.ability.name}>
            {ability.ability.name}</Text>)}
        </View>
    ) : null;
};

export default PokeDetailsScreen;