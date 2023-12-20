import { View, Text, ScrollView, TextInput, StyleSheet, Alert, Button } from 'react-native'
import React, { useState } from 'react'
import SaisieScreen from './saisie';
import Styles from '../../../outils/style';
import TypeReponseScreen from './typeReponse';

const CreationVariableScreen = () => {
const [page, setPage] = useState('saisie');

const [variable, setVariable] = useState('Création d\'une nouvelle variable');
	const [createLabel, setCreateLabel] = useState('');
	const [createDescription, setCreateDescription] = useState('');
    const [createQuestion, setCreateQuestion] = useState('');
    const [createDefaultValue, setCreateDefaultValue] = useState('');
    const [createMinValue, setCreateMinValue] = useState('');
    const [createMaxValue, setCreateMaxValue] = useState('');
    const [createType, setCreateType] = useState('');
    const [createDateStart, setCreateDateStart] = useState(new Date());
	const [createDateEnd, setCreateDateEnd] = useState(new Date);
	const [newVariable, setNewVariable] = useState('');
    const [openStart, setOpenStart] = useState(false);
    const [openEnd, setOpenEnd] = useState(false);

    const handleCreateLabel = (text) => {
		setCreateLabel(text);
	};
	const handleCreateDescription = (text) => {
		setCreateDescription(text);
	};
    const handleCreateQuestion = (text) => {
        setCreateQuestion(text);
    };
    const handleCreateDefaultValue = (text) => {
        setCreateDefaultValue(text);
    };
    const handleCreateMinValue = (text) => {
        setCreateMinValue(text);
    };
    const handleCreateMaxValue = (text) => {
        setCreateMaxValue(text);
    };
    const handleCreateType = (text) => {
        setCreateType(text);
    };
	const handleCreateDateStart = (date) => {
		setCreateDateStart(new Date(date));
	};
	const handleCreateDateEnd = (date) => {
		setCreateDateEnd(date);
	};

    const RenderElement = () => {
        switch(page){
            case 'saisie' :
                return <SaisieScreen />
            case 'type' :
                return <TypeReponseScreen />
        }
    };

    const Retour = () => {
        Alert.alert("retour")
    }

    const Valider = () => {
        if(page === 'saisie') setPage('type')
    }

    return (
        <ScrollView>
            <View style={Styles.create} >
                <Text style={Styles.headerListItemText}>{variable}</Text>
                <Text style={Styles.text}>{newVariable.label}</Text>
                        
                <View style={Styles.input}>
                    <TextInput
                        style={Styles.inputField}
                        placeholder = 'Saississez un libellé'
                        value ={createLabel}
                        onChangeText={handleCreateLabel}>
                    </TextInput>
                </View>
                <View style={Styles.input}>
                    <Text>
                        Description
                    </Text>
                    <TextInput
                        style={Styles.inputField}
                        placeholder = 'Saississez une description'
                        value ={createDescription}
                        onChangeText={handleCreateDescription}
                        multiline={true}>
                    </TextInput>
                </View>
                <View style={Styles.input}>
                    <TextInput
                        style={Styles.inputField}
                        value={createQuestion}
                        onChangeText={handleCreateQuestion}
                        placeholder='Saisissez votre question'>
                    </TextInput>
                </View>
                <View>
                    <RenderElement />
                </View>
            </View>
            <View style={Styles.buttonContainer}>
                <Button
                    title="Retour"
                    onPress={Retour} />
                <Button
                    title="Valider"
                    onPress={Valider} />
            </View>
        </ScrollView>
    )
}

export default CreationVariableScreen