import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { TaskCard, Box } from 'components'

const Home: React.FC = () => {
  const { navigate } = useNavigation()

  return (
    <>
      <Box ml={8} mr={8} mt={8}>
        <TaskCard />
        <Button mode="contained" onPress={() => navigate('MyDrawer')}>
          Test drawer
        </Button>
      </Box>
      <Box ml={8} mr={8} mt={8}>
        <TaskCard />
      </Box>
      <Box ml={8} mr={8} mt={8}>
        <TaskCard />
        <Button mode="contained" onPress={() => navigate('MyDrawer')}>
          Test drawer
        </Button>
      </Box>
    </>
  )
}

export default Home
