import React from 'react'
import { Button, Card, Paragraph } from 'react-native-paper'

const TaskCard: React.FC = () => {
  return (
    <Card onPress={() => console.log('sdsdssd')}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
      <Card.Content>
        <Paragraph>Card content</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Done</Button>
        <Button>Delete</Button>
      </Card.Actions>
    </Card>
  )
}

export default TaskCard
