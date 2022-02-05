import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableHighlight,
  Button,
} from 'react-native';
import {addTeam} from '../actions/PokemonActions';

const Teams = ({allTeams, navigation}) => {
  const dispatch = useDispatch();
  const [teamName, setTeamName] = useState('');
  const [trainerName, setTrainerName] = useState('');

  function save() {
    dispatch(addTeam({teamName, trainerName}));
    setTeamName('');
    setTrainerName('');
  }

  return (
    <View>
      <StatusBar animated={true} backgroundColor="#86898E" />
      <TextInput
        backgroundColor="#BDBEC0"
        style={{padding: 10}}
        style={{height: 40}}
        placeholder="Nombre Equipo"
        placeholderTextColor="#3C3E42"
        value={teamName}
        onChangeText={setTeamName}
      />
      <TextInput
        backgroundColor="#BDBEC0"
        style={{padding: 10}}
        style={{height: 40}}
        placeholderTextColor="#3C3E42"
        placeholder="Nombre Entrenador"
        value={trainerName}
        onChangeText={setTrainerName}
      />
      <Button
        color="#3D5FA2"
        title="Agregar al equipo"
        onPress={() => {
          save();
        }}
      />
      <FlatList
        data={allTeams}
        renderItem={({item, key}) => (
          <TouchableHighlight
            key={key}
            onPress={() => navigation.navigate('TeamDetails', {...item})}>
            <Text style={styles.item}>{item.teamName}</Text>
          </TouchableHighlight>
        )}
      />
    </View>
  );
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
    allTeams: pokemonList.allTeams,
  };
};

export default connect(mapStateToProps)(Teams);
