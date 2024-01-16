import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { VariableContext } from '.';
import variableStyles from './style';
import DateTimePicker from '@react-native-community/datetimepicker';

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
            {openDebut &&
                    <DateTimePicker
                        mode="date" 
                        display='spinner'
                        value={variable.start ? new Date(variable.start) : new Date()}
                        onChange={(event, selectedDate) => {
                            if(event.type==='set'){
                                setVariable({...variable, start: selectedDate.toJSON()})
                            }                            
                            setOpenDebut(false)
                        }}
                    />}
        </View>
        <View style={[variableStyles.inputRow, variableStyles.inputRowDate]}>
            <Text style={variableStyles.body}>Date de fin de validité</Text>
            <Text
                style={[variableStyles.inputField, variableStyles.body]}
                onPress={() => setOpenFin(true)}>
                {variable.end ? new Date(variable.end).toLocaleDateString("fr") : '__/__/____'}
            </Text>
            {openFin &&
                    <DateTimePicker
                        mode="date" 
                        display='spinner'
                        value={variable.end ? new Date(variable.end) : new Date()}
                        onChange={(event, selectedDate) => {
                            if(event.type==='set'){
                                setVariable({...variable, end: selectedDate.toJSON()})
                            }                            
                            setOpenFin(false)
                        }}
                    />}
        </View>
    </View>
  )
}

export default DebutFinScreen