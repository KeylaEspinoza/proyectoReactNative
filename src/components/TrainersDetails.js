import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';

const TrainerDetails = ({route}) => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Text style={styles.item}>
        {'Nombre: '}
        {route?.params.name}
      </Text>
      <Text style={styles.item}>
        {'Apellido: '}
        {route?.params.lastName}
      </Text>
      <Text style={styles.item}>
        {'Generó: '}
        {route?.params.gender}
      </Text>
      <Text style={styles.item}>
        {'Lugar: '}
        {route?.params.placeOfResidence}
      </Text>
      <Text style={styles.item}>
        {'Teléfono: '}
        {route?.params.phone}
      </Text>
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

export default TrainerDetails;
