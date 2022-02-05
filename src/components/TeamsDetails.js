import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

const TeamDetails = ({route}) => {
  return (
    <View>
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <Text style={styles.item}>
        {'Nombre Equipo: '}
        {route?.params.teamName}
      </Text>
      <Text style={styles.item}>
        {'Nombre entrenador: '}
        {route?.params.trainerName}
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

export default TeamDetails;
