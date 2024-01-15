import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { VariableContext } from '.';
import variableStyles from './style';
import { Button } from 'react-native-paper';

const TypeSaisieScreen = () => {
    const {variable, setVariable} = useContext(VariableContext);
    const listChoices = [{id : 1 , libelle: "Texte", icone: "text"},
                        {id : 2 ,libelle: "Nombre", icone: "numeric"},
                        {id : 3 ,libelle: "Date", icone: "calendar"},
                        {id : 4 ,libelle: "Période", icone: "calendar-clock"},
                        {id : 5 ,libelle: "Oui/Non", icone: "toggle-switch-off-outline"}]

    const ChoiceItem = ({libelle, icone}) => {
        return(
            <Button
                key={libelle} 
                icon={icone}
                textColor={libelle === variable?.type ? 'grey' : 'black'}
                contentStyle={{alignSelf: 'flex-start'}}
                onPress={() => {
                    setVariable({...variable, type : libelle})
                }}>
                {libelle}
            </Button>
        )
    }

    return (
            <View style={variableStyles.inputRow}>
                <Text style={variableStyles.inputLabel}>
                    Sélectionnez un type de saisie
                </Text>
                <View style={variableStyles.listContainer}>
                    {listChoices.map((choice) => <ChoiceItem key={choice.id} libelle={choice.libelle} icone={choice.icone}/>)}
                </View>
            </View>
    )
}

export default TypeSaisieScreen