import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'
import variableStyles from './style'
import { COLORMAIN } from '../../../outils/constantes'

const TypeReponseScreen = () => {
    const [checked, setChecked] = React.useState('saisie');

    return (
        <View style={variableStyles.inputRow}>
            <View style={variableStyles.radio}>
                <RadioButton
                    color={COLORMAIN.black}
                    value="saisie"
                    status={ checked === 'saisie' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('saisie')}
                />
                <Text style={variableStyles.radioLabel}>
                    Réponse à saisir
                </Text>
            </View>
            <View style={variableStyles.radio}>
                <RadioButton
                    color={COLORMAIN.black}
                    value="predefini"
                    status={ checked === 'predefini' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('predefini')}
                />
                <Text style={variableStyles.radioLabel}>
                    Choix prédéfinis
                </Text>
            </View>
        </View>
    )
}

export default TypeReponseScreen