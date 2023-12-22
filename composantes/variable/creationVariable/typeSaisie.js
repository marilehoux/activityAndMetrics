import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useContext, useState } from 'react';
import { VariableContext } from '.';
import variableStyles from './style';
import { List } from 'react-native-paper';

const TypeSaisieScreen = () => {
    const {variable, setVariable} = useContext(VariableContext);
    const listChoices = [{libelle: "Texte", icone: "text"},
                        {libelle: "Nombre", icone: "numeric"},
                        {libelle: "Date", icone: "calendar"},
                        {libelle: "Période", icone: "calendar-clock"},
                        {libelle: "Oui/Non", icone: "toggle-switch-off-outline"}]

    const Item = ({item, onPress, textColor}) => (
        <List.Item
            titleStyle={{color: textColor}}
            onPress={onPress}
            title={item.libelle}
            left={props => <List.Icon {...props} color={textColor} icon={item.icone} />}/>
    );

    const renderItem = ({item}) => {
        const color = item.libelle === variable?.type ? 'grey' : 'black';

        return (
        <Item
            item={item}
            onPress={() => {
                setVariable({...variable, type : item.libelle})}}
            textColor={color}
        />
        );
    };

    return (
            <View style={variableStyles.inputRow}>
                <Text style={variableStyles.inputLabel}>
                    Sélectionnez un type de saisie
                </Text>
                <FlatList
                    style={variableStyles.listContainer}
                    data={listChoices}
                    renderItem={renderItem}
                />
            </View>
    )
}

export default TypeSaisieScreen