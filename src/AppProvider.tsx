import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './AppNavigator'

const AppProvider: React.FC = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default AppProvider
