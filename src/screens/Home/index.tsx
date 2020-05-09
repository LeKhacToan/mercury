import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { Headline } from 'react-native-paper'

import { TaskCard, Box } from 'components'

import { Task } from 'typings'

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
  return (
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
  )
}

export default Home
