import React, { useLayoutEffect } from 'react'
import { ScrollView, StyleSheet, StatusBar } from 'react-native'
import { Headline, Button } from 'react-native-paper'
import SafeAreaView from 'react-native-safe-area-view'
import { useNavigation } from '@react-navigation/native'

import { TaskCard, Box } from 'components'

import { Task } from 'typings'

import { color } from 'utils/constants'

const task: Task = {
  title:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ScrollView',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  createdAt: '12/12/1998',
  dueDate: '12/12/1998',
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
  },
})

const Home: React.FC = () => {
  const { setOptions } = useNavigation()

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => <Button>sdsdsdsd</Button>,
    })
  }, [setOptions])

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={color.WHITE} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box ml={8} mr={8} mt={12}>
          <Headline style={styles.heading}>Công việc</Headline>
        </Box>
        <Box ml={8} mr={8} mt={8}>
          <TaskCard task={task} />
        </Box>
        <Box ml={8} mr={8} mt={8}>
          <TaskCard task={task} />
        </Box>
        <Box ml={8} mr={8} mt={8}>
          <TaskCard task={task} />
        </Box>
        <Box ml={8} mr={8} mt={8}>
          <TaskCard task={task} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
