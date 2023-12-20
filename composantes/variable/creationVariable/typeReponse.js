import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'

const TypeReponseScreen = () => {
    const [checked, setChecked] = React.useState('saisie');

    return (
        <View>
            <View style={style.radio}>
                <RadioButton
                    value="saisie"
                    status={ checked === 'saisie' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('saisie')}
                />
                <Text>
                    Réponse à saisir
                </Text>
            </View>
            <View style={style.radio}>
                <RadioButton
                    value="predefini"
                    status={ checked === 'predefini' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('predefini')}
                />
                <Text>Choix prédéfinis</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    radio : {
        flexDirection: 'row'
    }
})

export default TypeReponseScreen