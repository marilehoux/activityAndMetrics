import { View, Button, Alert } from 'react-native'
import React from 'react'
import {create as createActivity} from '../../actions/activityAction'

const AddActivityButton = (title) => {
    const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Annuler',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: createActivity},
    ]);
  return (
    <View>
        <Button title='{ajouter}' onPress={createThreeButtonAlert}></Button>
    </View>
  )
}

export default AddActivityButton