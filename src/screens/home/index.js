import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import React from 'react';
import TouchableOpacityComponent from '../../components/touchable-opacity';
import {AppColors} from '../../constants/colors';
import {} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const handleNavigation = name => {
    navigation.navigate(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
      </View>

      <View style={{marginHorizontal: 20}}>
        <TouchableOpacityComponent
          size={'s'}
          type={AppColors.primary}
          text={'Go to Settings Screen'}
          handleOnPress={() => {
            handleNavigation('Settings');
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
