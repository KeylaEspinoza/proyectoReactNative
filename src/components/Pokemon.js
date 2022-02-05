import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Button,
} from 'react-native';
//import {SearchBar} from 'react-native-elements';
import {loadPokemonAPI} from '../services/Service';

const Pokemon = ({allPokemon, navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemonAPI());
  }, []);

  /*  <SearchBar
        placeholder="Buscar aquí..."
        onChangeText={this.updateSearch}
        value={search}
        lightTheme
        round
        value={this.state.searchValue}
        onChangeText={text => this.searchFunction(text)}
        autoCorrect={false}
      />*/
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#86898E" />
      <Button
        color="#3D5FA2"
        title="Entrenadores"
        onPress={() => {
          navigation.navigate('Trainers', {});
        }}
      />
      <Button
        color="#3D5FA2"
        title="Equipos"
        onPress={() => {
          navigation.navigate('Teams', {});
        }}
      />
      <FlatList
        data={allPokemon}
        renderItem={({item, key}) => (
          <TouchableHighlight
            key={key}
            onPress={() =>
              navigation.navigate('PokemonDetails', {id: item.name})
            }>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
};

searchFunction = text => {
  const updatedData = this.arrayholder.filter(item => {
    const item_data = `${item.title.toUpperCase()})`;
    const text_data = text.toUpperCase();
    return item_data.indexOf(text_data) > -1;
  });
  this.setState({data: updatedData, searchValue: text});
};

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    padding: 30,
    backgroundColor: '#66738C',
    fontSize: 24,
  },
});

const mapStateToProps = ({pokemonList}) => {
  return {
    allPokemon: pokemonList.allPokemon,
  };
};

export default connect(mapStateToProps)(Pokemon);
