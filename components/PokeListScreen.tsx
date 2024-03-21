import React, {useEffect, useState} from 'react';
import { View, Text, Image, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Pokemon{
    name: string;
    url: string;
}

const PokeListScreen =({navigation}:{navigation: any}) =>{
    const [pokemonList, setPokemonList]=useState<Pokemon[]>([]);

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(response =>{
            setPokemonList(response.data.results);
        })
        .catch(error => console.error(error));
    
    }, []);

return(
<FlatList
    data={pokemonList}
    keyExtractor={item => item.name}
    renderItem={({item})=>(
        <View style={styles.container}>
            <Image source={{uri:`https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${item.url.split('/')[6]}.png` }} style={styles.image}/>
            <Text style={styles.text}>{item.name}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button} onPress={()=>
                    navigation.navigate('PokeDetails', {url:item.url})}>
                    <Text style={styles.buttonText}>Ver Detalles</Text>
                </TouchableOpacity>             
            </View>
        </View>
        )}
    />
    );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingVertical: 10,
        borderBottomWidth:1,
        borderColor:'#ccc',
        borderRadius:10,
        margin:10,
        padding:10,
        alignItems:'center',
        justifyContent:'space-between',
    },
    image:{
        width:100,
        height:100,
        borderRadius:25,
    },
    text:{
        fontSize:18,
        marginLeft:10,
    },
    buttonContainer:{
    alignItems:'flex-end'
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:120,
        height:40,
        backgroundColor:'#1E90FF',
        borderRadius:5,
    },
    buttonText:{
        color:'white',
        fontSize:15,
    }
});

export default PokeListScreen;