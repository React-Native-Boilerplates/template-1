import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteStack from './src/router';
import AppContext from './src/context/app';

const App = () => {
  const {colors} = useContext(AppContext);

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <RouteStack />
      </NavigationContainer>

      <StatusBar backgroundColor={colors.statusbar} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
