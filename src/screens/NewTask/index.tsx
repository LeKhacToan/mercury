import React from 'react'
import { Text } from 'react-native'

import { TaskCard, Box } from 'components'

const NewTask: React.FC = () => {
  return (
    <Box ml={8} mr={8} mt={8}>
      <Text>Drawerere</Text>
      <TaskCard />
    </Box>
  )
}

export default NewTask
