import { View, Text, TextInput } from 'react-native'
import React from 'react'
import Styles from '../../../outils/style';

const NombreScreen = () => {
  return (
    <View style={Styles.input}>
      <Text>Min</Text>
      <TextInput
        style={Styles.inputField}
        value ={createMinValue}
        onChangeText={handleCreateMinValue}>        
      </TextInput>
    </View>
  )
}

export default NombreScreen