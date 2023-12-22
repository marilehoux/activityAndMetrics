import { View, Text, Switch } from 'react-native'
import React, { useContext } from 'react'
import variableStyles from './style'
import { VariableContext } from '.';
import { COLORMAIN } from '../../../outils/constantes';

const PieceJointeScreen = () => {
    const {variable, setVariable} = useContext(VariableContext);

    return (
        <View>
            <View style={variableStyles.switchContainer}>
                <Text style={variableStyles.body}>Ajouter la possibilité d'uploader un fichier</Text>
                <Switch
                onValueChange={(value) => {
                    setVariable({...variable, file_upload_enabled : value,
                        file_upload_required : (!variable.file_upload_enabled ? false : variable.file_upload_required)
                    });
                }}
                value={variable.file_upload_enabled}
                thumbColor={variable.file_upload_enabled ? COLORMAIN.green : COLORMAIN.gray}
                />
            </View>
            { variable.file_upload_enabled &&
            <View style={variableStyles.switchContainer}>
                <Text style={variableStyles.body}>Le fichier est obligatoire</Text>
                <Switch
                onValueChange={(value) => {
                    setVariable({...variable, file_upload_required : value})}}
                value={variable.file_upload_required}
                thumbColor={variable.file_upload_required ? COLORMAIN.green : COLORMAIN.gray}
                />
            </View>
            }
        </View>
    )
}

export default PieceJointeScreen