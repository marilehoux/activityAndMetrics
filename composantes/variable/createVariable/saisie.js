import { View, Text, ScrollView, TextInput, FlatList } from 'react-native';
import React, { useState } from 'react';
import Styles from '../../../outils/style';

const SaisieScreen = () => {
    const [variable, setVariable] = useState('Création d\'une nouvelle variable');
	const [createLabel, setCreateLabel] = useState('');
	const [createDescription, setCreateDescription] = useState('');
    const [createQuestion, setCreateQuestion] = useState('');
    const [createDefaultValue, setCreateDefaultValue] = useState('');
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
    const handleCreateType = (text) => {
        setCreateType(text);
    };
	const handleCreateDateStart = (date) => {
		setCreateDateStart(new Date(date));
	};
	const handleCreateDateEnd = (date) => {
		setCreateDateEnd(date);
	};

    const listChoices = ["Texte", "Nombre"]

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
                    <FlatList
                        data={listChoices}
                        renderItem={({item}) => (<Text>{item}</Text>)}
                    />
                    </View>
                </View>
        </ScrollView>
    )
}

export default SaisieScreen