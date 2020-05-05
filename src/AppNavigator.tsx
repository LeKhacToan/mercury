import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from 'screens'

const Stack = createStackNavigator()

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'My home' }}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
