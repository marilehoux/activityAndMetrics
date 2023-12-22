import { View, Text, Switch, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { VariableContext } from '.';
import variableStyles from './style';
import DatePicker from 'react-native-date-picker';
import { COLORMAIN } from "../../../outils/constantes";


const DetailsSaisieScreen = () => {
  const {variable, setVariable} = useContext(VariableContext);

  const NombreComposant = () =>{
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
    return(
        <View style={[variableStyles.inputRow, variableStyles.inputRowNumeric]}>
            <Text>Nombre de caractères min</Text>
            <TextInput
                style={[variableStyles.inputField, variableStyles.inputFieldNumeric]}
                value ={variable.min_length}
                inputMode='numeric'
                onChangeText={(text) => {
                setVariable({...variable, min_length : text})}}>        
            </TextInput>
            <Text>Nombre de caractères max</Text>
            <TextInput
                style={[variableStyles.inputField, variableStyles.inputFieldNumeric]}
                value ={variable.max_length}
                inputMode='numeric'
                onChangeText={(text) => {
                setVariable({...variable, max_length : text})}}>        
            </TextInput>
        </View>
    )
}

const DateComposant = () => {
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
                        {variable.default_value?.toLocaleDateString("fr") ?? '__/__/____'}
                    </Text>
                    <DatePicker
                        modal
                        title={'Date par défaut'}
                        cancelText={'Annuler'}
                        confirmText={'Confirmer'}
                        theme="dark"
                        mode="date" 
                        locale="fr" 
                        androidVariant='nativeAndroid'
                        open={openDefault}
                        date={variable.default_value ?? new Date()}
                        onConfirm={(date) => {
                            setVariable({...variable, default_value: date})
                            setOpenDefault(false)
                        }}
                        onCancel={() => {
                        setOpenDefault(false)
                        }}
                    />
                </View>
                <View style={[variableStyles.inputRow, variableStyles.inputRowDate]}>
                    <Text style={variableStyles.body}>Date minimum</Text>
                    <Text
                        style={[variableStyles.inputField, variableStyles.body]}
                        onPress={() => setOpenMin(true)}>
                        {variable.min_value?.toLocaleDateString("fr") ?? '__/__/____'}
                    </Text>
                    <DatePicker
                        modal
                        title={'Date minimum'}
                        cancelText={'Annuler'}
                        confirmText={'Confirmer'}
                        theme="dark"
                        mode="date" 
                        locale="fr" 
                        androidVariant='nativeAndroid'
                        open={openMin}
                        date={variable.min_value ?? new Date()}
                        onConfirm={(date) => {
                            setVariable({...variable, min_value: date})
                            setOpenMin(false)
                        }}
                        onCancel={() => {
                        setOpenMin(false)
                        }}
                    />
                </View>
                <View style={[variableStyles.inputRow, variableStyles.inputRowDate]}>
                    <Text style={variableStyles.body}>Date maximum</Text>
                    <Text
                        style={[variableStyles.inputField, variableStyles.body]}
                        onPress={() => setOpenMax(true)}>
                        {variable.max_value?.toLocaleDateString("fr") ?? '__/__/____'}
                    </Text>
                    <DatePicker
                        modal
                        title={'Date maximum'}
                        cancelText={'Annuler'}
                        confirmText={'Confirmer'}
                        theme="dark"
                        mode="date" 
                        locale="fr" 
                        androidVariant='nativeAndroid'
                        open={openMax}
                        date={variable.max_value ?? new Date()}
                        onConfirm={(date) => {
                            setVariable({...variable, max_value: date})
                            setOpenMax(false)
                        }}
                        onCancel={() => {
                        setOpenMax(false)
                        }}
                    />
                </View>
            </View>
        );
}

const RequiredSwitch = () => {
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

  return (
    <View>
        <Text style={variableStyles.body}>Vous avez sélectionné une variable de type {variable.type}</Text>

        {variable.type === 'Nombre' && <NombreComposant />}

        {variable.type === 'Texte' && <TexteComposant />}

        {(variable.type === 'Date' || variable.type === 'Période') && <DateComposant />}

        <RequiredSwitch />
    </View>
  )
}

export default DetailsSaisieScreen