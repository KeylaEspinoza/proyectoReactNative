import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import {loadPokemonDetailAPI} from '../services/Service';

const PokemonDetails = ({pokemon, route}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemonDetailAPI(route.params.id));
  }, []);

  return (
    <View>
      <ScrollView>
        <StatusBar animated={true} backgroundColor="#61dafb" />
        <Text style={styles.item}>
          {'Id: '}
          {pokemon?.order}
        </Text>
        <Image
          style={styles.logo}
          source={{
            uri: pokemon?.sprites.front_default,
          }}
        />
        <Text style={styles.item}>
          {'Name: '}
          {pokemon?.name}
        </Text>
        <Text style={styles.item}>
          {'Height: '}
          {pokemon?.height}
        </Text>
        <Text style={styles.item}>
          {'Weight: '}
          {pokemon?.weight}
        </Text>
        <Text style={styles.item}>
          {'Type: '}
          {pokemon?.types
            .map(typeElement => {
              return typeElement.type.name;
            })
            .toString()}
        </Text>
        <Text style={styles.item}>
          {'Movements: '}
          {pokemon?.moves
            .map(typeElement => {
              return typeElement.move.name;
            })
            .toString()}
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontWeight: 'bold',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#66738C',
    fontSize: 20,
  },
  logo: {
    marginTop: 2,
    width: 100,
    height: 100,
    borderWidth: 4,
    borderColor: '#6BA2E8',
    borderRadius: 40,
  },
});

const mapStateToProps = ({pokemonList}) => {
  return {
    pokemon: pokemonList.selectedPokemon,
  };
};

export default connect(mapStateToProps)(PokemonDetails);
