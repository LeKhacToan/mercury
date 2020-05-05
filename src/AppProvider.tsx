import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './AppNavigator'

const AppProvider: React.FC = () => {
  return (
    <NavigationContainer>
      <PaperProvider>
        <AppNavigator />
      </PaperProvider>
    </NavigationContainer>
  )
}

export default AppProvider
