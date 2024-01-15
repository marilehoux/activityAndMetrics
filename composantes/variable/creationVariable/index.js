import { View, Text, ScrollView, TextInput, Alert } from 'react-native'
import React, { createContext, useState } from 'react'
import TypeSaisieScreen from './typeSaisie';
import TypeReponseScreen from './typeReponse';
import variableStyles from './style';
import { Button, Switch } from 'react-native-paper';
import DetailsSaisieScreen from './details';
import PieceJointeScreen from './pieceJointe';
import RecapScreen from './recap';
import DebutFinScreen from './debutFin';

const CreationVariableScreen = ({route, navigation}) => {
    const {page, createdVariable} = route.params;

    const [variable, setVariable] = useState(createdVariable);

    if(variable?.required == undefined) setVariable({...variable, required : false})
    if(variable?.file_upload_enabled == undefined) setVariable({...variable, file_upload_enabled : false})
    if(variable?.file_upload_required == undefined) setVariable({...variable, file_upload_required : false})

    const RenderElement = () => {
        switch(page){
            case 'dateDebutFin':
                return <DebutFinScreen />
            case 'typeSaisie' :
                return <TypeSaisieScreen />
            case 'typeReponse' :
                return <TypeReponseScreen />
            case 'detailsSaisie' :
                return <DetailsSaisieScreen />
            case 'pieceJointe' :
                return <PieceJointeScreen />
            case 'recap' :
                return <RecapScreen />
        }
    };

    const Retour = () => {
        navigation.goBack()
    }

    const Valider = () => {
        switch(page){
            case 'typeSaisie':
                if(variable.type){
                    navigation.push('creationVariable', { page: 'detailsSaisie', createdVariable: variable })
                } else {
                    Alert.alert('Attention', 'La saisie du type de variable est obligatoire')
                }                
                break
            case 'detailsSaisie' :
                navigation.push('creationVariable', { page: 'dateDebutFin', createdVariable: variable })
                break
            case 'dateDebutFin' :
                navigation.push('creationVariable', { page: 'pieceJointe', createdVariable: variable })
                break
            case 'pieceJointe' :
                navigation.push('creationVariable', { page: 'recap', createdVariable: variable })
                break
        }
    }

    return (
        <ScrollView>
            <View>
                <Text style={variableStyles.title}>Création d'une nouvelle variable</Text>
                        
                <View style={variableStyles.inputRow}>
                    <Text style={variableStyles.inputLabel}>
                        Libellé
                    </Text>
                    <TextInput
                        style={variableStyles.inputField}
                        placeholder = 'Saississez un libellé'
                        value ={variable?.label}
                        onChangeText={(text) => {
                            setVariable({...variable, label : text})}}>
                    </TextInput>
                </View>

                <View style={variableStyles.inputRow}>
                    <Text style={variableStyles.inputLabel}>
                        Description
                    </Text>
                    <TextInput
                        style={variableStyles.inputField}
                        placeholder = 'Saississez une description'
                        value ={variable?.description}
                        onChangeText={(text) => {
                            setVariable({...variable, description : text})}}
                        multiline={true}>
                    </TextInput>
                </View>

                <View style={variableStyles.inputRow}>
                    <Text style={variableStyles.inputLabel}>
                        Question
                    </Text>
                    <TextInput
                        style={variableStyles.inputField}
                        value={variable?.question}
                        onChangeText={(text) => {
                            setVariable({...variable, question : text})}}
                        placeholder='Saisissez votre question'>
                    </TextInput>
                </View>

                <View>
                    <VariableContext.Provider value={{variable, setVariable, navigation}}>
                        <RenderElement />
                    </VariableContext.Provider>
                </View>

                <View style={variableStyles.buttonContainer}>
                    <Button
                        icon="arrow-left"
                        mode="outlined"
                        textColor='black'
                        onPress={Retour}>
                        Retour
                    </Button>

                    { page != 'recap' &&
                    <Button
                        icon="arrow-right"
                        mode="outlined"
                        textColor='black'
                        contentStyle={{flexDirection: 'row-reverse'}}
                        onPress={Valider}>
                        Valider
                    </Button>
                    }
                </View>
            </View>
        </ScrollView>
        
    )
}

export const VariableContext = createContext()

export default CreationVariableScreen