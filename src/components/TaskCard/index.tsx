import React from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Paragraph } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { Task } from 'typings'

interface Props {
  task: Task
}

const styles = StyleSheet.create({
  card: {
    paddingRight: 4,
  },
})

const TaskCard: React.FC<Props> = ({ task }: Props) => {
  const { navigate } = useNavigation()
  return (
    <Card style={styles.card} onPress={() => navigate('NewTask')}>
      <Card.Title title={task.title} subtitle={task.createdAt} />
      <Card.Content>
        <Paragraph>{task.content}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Done</Button>
        <Button>Delete</Button>
      </Card.Actions>
    </Card>
  )
}

export default TaskCard
