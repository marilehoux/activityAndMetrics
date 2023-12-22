import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { VariableContext } from '.';
import variableStyles from './style';
import DatePicker from 'react-native-date-picker';

const DebutFinScreen = () => {
    const {variable, setVariable} = useContext(VariableContext);

    const [openDebut, setOpenDebut] = useState(false);
    const [openFin, setOpenFin] = useState(false);

    // TODO - format date pour qu'elles soient JSON-serializable

  return (
    <View>
      <View style={[variableStyles.inputRow, variableStyles.inputRowDate]}>
            <Text style={variableStyles.body}>Date de début de validité</Text>
            <Text
                style={[variableStyles.inputField, variableStyles.body]}
                onPress={() => setOpenDebut(true)}>
                {variable.start ? new Date(variable.start).toLocaleDateString("fr") : '__/__/____'}
            </Text>
            <DatePicker
                modal
                title={'Date de début de validité'}
                cancelText={'Annuler'}
                confirmText={'Confirmer'}
                theme="dark"
                mode="date" 
                locale="fr" 
                androidVariant='nativeAndroid'
                open={openDebut}
                date={variable.start ?? new Date()}
                onConfirm={(date) => {
                    setVariable({...variable, start: date})
                    setOpenDebut(false)
                }}
                onCancel={() => {
                setOpenDebut(false)
                }}
            />
        </View>
        <View style={[variableStyles.inputRow, variableStyles.inputRowDate]}>
            <Text style={variableStyles.body}>Date de fin de validité</Text>
            <Text
                style={[variableStyles.inputField, variableStyles.body]}
                onPress={() => setOpenFin(true)}>
                {variable.end?.toLocaleDateString("fr") ?? '__/__/____'}
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
                open={openFin}
                date={variable.end ?? new Date()}
                onConfirm={(date) => {
                    setVariable({...variable, end: date})
                    setOpenFin(false)
                }}
                onCancel={() => {
                setOpenFin(false)
                }}
            />
        </View>
    </View>
  )
}

export default DebutFinScreen