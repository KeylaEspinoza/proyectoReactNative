import React from 'react';
import Pokemon from './src/components/Pokemon';
import {Provider} from 'react-redux';
import configureStore from './src/Store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonDetails from './src/components/PokemonDetails';
import Trainers from './src/components/Trainers';
import Teams from './src/components/Teams';
import TrainerDetails from './src/components/TrainersDetails';
import TeamDetails from './src/components/TeamsDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Pokemon"
            component={Pokemon}
            options={{title: 'Pokemón'}}
          />
          <Stack.Screen
            name="PokemonDetails"
            component={PokemonDetails}
            options={{title: 'Detalle Pokemón'}}
          />
          <Stack.Screen
            name="Trainers"
            component={Trainers}
            options={{title: 'Entrenadores'}}
          />
          <Stack.Screen
            name="Teams"
            component={Teams}
            options={{title: 'Equipos'}}
          />
          <Stack.Screen
            name="TrainerDetails"
            component={TrainerDetails}
            options={{title: 'Detalle Entrenadores'}}
          />
          <Stack.Screen
            name="TeamDetails"
            component={TeamDetails}
            options={{title: 'Detalle Equipo'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
