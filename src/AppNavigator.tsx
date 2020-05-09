import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Text } from 'react-native'

import { Home, NewTask } from 'screens'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const MyDrawer: React.FC = () => {
  return (
    <Drawer.Navigator drawerContent={() => <Text>sdsdsdsds</Text>}>
      <Drawer.Screen
        name="NewTask"
        component={NewTask}
        options={{ drawerLabel: 'NewTask' }}
      />
    </Drawer.Navigator>
  )
}

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'My home' }}
      />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
    </Stack.Navigator>
  )
}

export default AppNavigator
