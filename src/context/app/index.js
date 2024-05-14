import {View, Text} from 'react-native';
import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppColors} from '../../constants/colors';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  useEffect(() => {
    const loadColors = async () => {
      try {
        // Check if colors exist in AsyncStorage
        const storedColors = await AsyncStorage.getItem('colors');
        if (storedColors !== null) {
          // If colors exist, parse and set them in state
          setColors(JSON.parse(storedColors));
        } else {
          // If colors don't exist, set default colors and store them
          const defaultColors = {
            statusbar: AppColors.primary,
          };
          setColors(defaultColors);
          await AsyncStorage.setItem('colors', JSON.stringify(defaultColors));
        }
      } catch (error) {
        console.error('Error loading colors from AsyncStorage:', error);
      }
    };

    loadColors();
  }, []);

  const [colors, setColors] = useState({
    statusbar: AppColors.primary,
  });

  const contextChildren = {
    colors,
    setColors,
  };

  return (
    <AppContext.Provider value={contextChildren}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
