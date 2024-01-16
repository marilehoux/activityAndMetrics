import { View, Text, Switch, TextInput } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { VariableContext } from '.';
import variableStyles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORMAIN } from "../../../outils/constantes";

const NombreComposant = () => {
    const {variable, setVariable} = useContext(VariableContext);

    return(
        <View>
            <View style={[variableStyles.inputRow, variableStyles.inputRowNumeric]}>
                <Text>Valeur par défaut</Text>
                <TextInput
                    style={[variableStyles.inputField, variableStyles.inputFieldNumeric]}
                    value ={variable.default_value}
                    inputMode='numeric'
                    onChangeText={(text) => {
                    setVariable({...variable, default_value : text})}}>        
                </TextInput>
            </View>
            <View style={[variableStyles.inputRow, variableStyles.inputRowNumeric]}>
            <Text>Min</Text>
            <TextInput
                style={[variableStyles.inputField, variableStyles.inputFieldNumeric]}
                value ={variable.min_value}
                inputMode='numeric'
                onChangeText={(text) => {
                setVariable({...variable, min_value : text})}}>        
            </TextInput>
            <Text>Max</Text>
            <TextInput
                style={[variableStyles.inputField, variableStyles.inputFieldNumeric]}
                value ={variable.max_value}
                inputMode='numeric'
                onChangeText={(text) => {
                setVariable({...variable, max_value : text})}}>        
            </TextInput>
        </View>
    </View>
    )
}

const TexteComposant = () => {
    const {variable, setVariable} = useContext(VariableContext);

    return(       
        <View style={[variableStyles.inputRow, variableStyles.inputRowNumeric]}>
            <Text>Nombre de caractères min</Text>
            <TextInput
                style={[variableStyles.inputField, variableStyles.inputFieldNumeric]}
                value ={variable.min_length}
                keyboardType='numeric'
                onChangeText={(text) => {
                    setVariable({...variable, min_length : text})
                }}>        
            </TextInput>
            <Text>Nombre de caractères max</Text>
            <TextInput
                style={[variableStyles.inputField, variableStyles.inputFieldNumeric]}
                value ={variable.max_length}
                keyboardType='numeric'
                onChangeText={(text) => {
                    setVariable({...variable, max_length : text})}}>        
            </TextInput>
        </View>
    )
}

const DateComposant = () => {
    const {variable, setVariable} = useContext(VariableContext);

    const [openDefault, setOpenDefault] = useState(false);
    const [openMin, setOpenMin] = useState(false);
    const [openMax, setOpenMax] = useState(false);
        return (
            <View>
                <View style={[variableStyles.inputRow, variableStyles.inputRowDate]}>
                    <Text style={variableStyles.body}>Date par défaut</Text>
                    <Text
                        style={[variableStyles.inputField, variableStyles.body]}
                        onPress={() => setOpenDefault(true)}>
                        {variable.default_value ? new Date(variable.default_value).toLocaleDateString("fr") : '__/__/____'}
                    </Text>
                    {openDefault &&
                    <DateTimePicker
                        mode="date" 
                        display='spinner'
                        value={variable.default_value ? new Date(variable.default_value) : new Date()}
                        onChange={(event, selectedDate) => {
                            if(event.type==='set'){
                                setVariable({...variable, default_value: selectedDate.toJSON()})
                            }                            
                            setOpenDefault(false)
                        }}
                    />}
                </View>
                <View style={[variableStyles.inputRow, variableStyles.inputRowDate]}>
                    <Text style={variableStyles.body}>Date minimum</Text>
                    <Text
                        style={[variableStyles.inputField, variableStyles.body]}
                        onPress={() => setOpenMin(true)}>
                        {variable.min_value ? new Date(variable.min_value).toLocaleDateString("fr") : '__/__/____'}
                    </Text>
                    {openMin &&
                    <DateTimePicker
                        mode="date" 
                        display='spinner'
                        value={variable.min_value ? new Date(variable.min_value) : new Date()}
                        onChange={(event, selectedDate) => {
                            if(event.type==='set'){
                                setVariable({...variable, min_value: selectedDate.toJSON()})
                            }                            
                            setOpenMin(false)
                        }}
                    />}
                </View>
                <View style={[variableStyles.inputRow, variableStyles.inputRowDate]}>
                    <Text style={variableStyles.body}>Date maximum</Text>
                    <Text
                        style={[variableStyles.inputField, variableStyles.body]}
                        onPress={() => setOpenMax(true)}>
                        {variable.max_value?.toLocaleDateString("fr") ?? '__/__/____'}
                    </Text>
                    {openMax &&
                    <DateTimePicker
                        mode="date" 
                        display='spinner'
                        value={variable.max_value ? new Date(variable.max_value) : new Date()}
                        onChange={(event, selectedDate) => {
                            if(event.type==='set'){
                                setVariable({...variable, max_value: selectedDate.toJSON()})
                            }                            
                            setOpenMax(false)
                        }}
                    />}
                </View>
            </View>
        );
}

const RequiredSwitch = () => {
    const {variable, setVariable} = useContext(VariableContext);

    return(
        <View style={variableStyles.switchContainer}>
            <Text style={variableStyles.body}>Obligatoire</Text>
            <Switch
            onValueChange={() => {
                setVariable({...variable, required : !variable.required})}}
            value={variable.required}
            thumbColor={variable.required ? COLORMAIN.green : COLORMAIN.gray}
            />
        </View>
    )
}

const RenderElement = ({type}) => {
    switch(type){
        case 'Nombre':
            return <NombreComposant />
        case 'Texte':
            return <TexteComposant />
        case 'Date':
        case 'Période':
            return <DateComposant />
    }
}

const DetailsSaisieScreen = () => {
    const {variable, setVariable} = useContext(VariableContext);

    return (
        <View>
            <Text style={variableStyles.body}>Vous avez sélectionné une variable de type {variable.type}</Text>

            <RenderElement type={variable.type} />

            <RequiredSwitch />
        </View>
    )
}

export default DetailsSaisieScreen