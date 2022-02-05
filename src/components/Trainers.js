import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  View,
  StatusBar,
  TouchableHighlight,
  Button,
} from 'react-native';
import {addTrainer} from '../actions/PokemonActions';

const Trainers = ({allTrainers, navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [placeOfResidence, setPlaceOfResidence] = useState('');
  const [phone, setPhone] = useState('');

  function save() {
    dispatch(addTrainer({name, lastName, gender, phone, placeOfResidence}));
    setName('');
    setLastName('');
    setGender('');
    setPhone('');
    setPlaceOfResidence('');
  }

  return (
    <View>
      <StatusBar animated={true} backgroundColor="#86898E" />
      <TextInput
        backgroundColor="#BDBEC0"
        placeholderTextColor="#3C3E42"
        style={{padding: 10}}
        style={{height: 40}}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        backgroundColor="#BDBEC0"
        style={{padding: 10}}
        style={{height: 40}}
        placeholder="Apellido"
        placeholderTextColor="#3C3E42"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        backgroundColor="#BDBEC0"
        style={{padding: 10}}
        style={{height: 40}}
        placeholder="Género"
        placeholderTextColor="#3C3E42"
        value={gender}
        onChangeText={setGender}
      />
      <TextInput
        backgroundColor="#BDBEC0"
        style={{padding: 10}}
        style={{height: 40}}
        placeholder="Lugar de residencia"
        placeholderTextColor="#3C3E42"
        value={placeOfResidence}
        onChangeText={setPlaceOfResidence}
      />
      <TextInput
        backgroundColor="#BDBEC0"
        style={{padding: 10}}
        style={{height: 40}}
        placeholder="Télefono"
        placeholderTextColor="#3C3E42"
        value={phone}
        onChangeText={setPhone}
      />
      <Button
        color="#3D5FA2"
        title="Agregar entrenador"
        onPress={() => save()}
      />
      <FlatList
        data={allTrainers}
        renderItem={({item, key}) => (
          <TouchableHighlight
            key={key}
            onPress={() => navigation.navigate('TrainerDetails', {...item})}>
            <Text style={styles.item}>{item.name}</Text>
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
    allTrainers: pokemonList.allTrainers,
  };
};

export default connect(mapStateToProps)(Trainers);
