import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import SafeAreaView from 'react-native-safe-area-view'

import { Box } from 'components'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 8,
  },
  dateInput: {
    flex: 1,
  },
})

const NewTask: React.FC = () => {
  return (
    <SafeAreaView>
      <Box ml={12} mr={12} mt={12}>
        <TextInput
          label="Tiêu đề"
          mode="outlined"
          placeholder="Nhập tiêu đề"
          onChangeText={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Giờ phút"
            mode="outlined"
            placeholder="Giờ phút"
            editable={false}
            style={styles.dateInput}
            onChangeText={() => {}}
          />
          <Box mr={6} ml={6} />
          <TextInput
            label="Ngày tháng"
            mode="outlined"
            placeholder="Ngày tháng"
            editable={false}
            style={styles.dateInput}
            onChangeText={() => {}}
          />
        </View>

        <Box mt={8} mb={12}>
          <TextInput
            multiline
            selectionColor="white"
            numberOfLines={5}
            label="Nội dung"
            mode="outlined"
            placeholder="Nhập nội dung"
            onChangeText={() => {}}
          />
        </Box>
        <Button icon="note-plus-outline" mode="contained">
          Thêm
        </Button>
      </Box>
    </SafeAreaView>
  )
}

export default NewTask
