import React from 'react'
import { Text, Button } from 'react-native'
import { useNavigation, DrawerActions } from '@react-navigation/native'

import { TaskCard, Box } from 'components'

const NewTask: React.FC = () => {
  const { dispatch } = useNavigation()

  return (
    <Box ml={8} mr={8} mt={8}>
      <Text>Drawerere</Text>
      <TaskCard />
      <Button
        title="sdsds"
        onPress={() => dispatch(DrawerActions.toggleDrawer())}
      />
    </Box>
  )
}

export default NewTask
