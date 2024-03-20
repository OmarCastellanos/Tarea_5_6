import React, {useEffect, useState} from 'react';
import { View, Text, Image, Button, FlatList } from 'react-native';
import axios from 'axios';

interface Pokemon{
    name: string;
    url: string;
}

const PokeListScreen =({navigation}:{navigation: any}) =>{
    const [pokemonList, setPokemonList]=useState<Pokemon[]>([]);

return(
<FlatList
    data={pokemonList}
    keyExtractor={item => item.name}
    renderItem={({item})=>(
        <View>
            <Image source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${item.url.split('/')[6]}.png` }} />
            <Text>{item.name}</Text>
        <Button title='Ver Detalles' onPress={()=>
        navigation.navigate('PokeDetail', {url:item.url})}/>
        </View>

        )}
    />
    );
};
export default PokeListScreen;