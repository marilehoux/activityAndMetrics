import { View, Text, Alert } from 'react-native'
import React, { useContext } from 'react'
import { VariableContext } from '.';
import variableStyles from './style';
import { Button } from 'react-native-paper';

const RecapScreen = () => {
    const {variable, setVariable, navigation} = useContext(VariableContext);

    const sendVariable = async () => {
        setVariable({...variable,
            start : start != undefined ? variable.start.toISOString() : null,
            end : end != undefined ? variable.end.toISOString() : null 
        })

        console.log(variable)
        try {
            const response = await fetch('https://api.pebble.solutions/v5/metric/variable/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(variable),
            });
            
            if (response.status == 201){
                    navigation.navigate('home')
                    Alert.alert('enregistrement effectué');
                    let data = response.json();
                    console.log(data, 'data');
                }
                    
            else if (response.status == 400 ||
                     response.status == 403 ||
                     response.status == 404 || 
                     response.status == 429 ||
                     response.status == 422 ||
                     response.status == 500){	
                    Alert.alert('Enregistrement impossible');
            }
        }
        catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            Alert.alert('L\'enregistrement a échoué');
        }
    }

    return (
        <View>
            <Text style={variableStyles.body}>
                Type de réponse : {variable.type}
            </Text>

            <Text style={variableStyles.body}>
                Début de validité: {variable.start ?? '/'}
            </Text>
            <Text style={variableStyles.body}>
                Fin de validité : {variable.end ?? '/'}
            </Text>


            {variable.type === 'Texte' &&
                <Text style={variableStyles.body}>
                    Avec {variable.min_length ?? 'pas de'} caractère{variable.min_length > 1 && 's'} minimum et {variable.max_length ?? 'pas de'} caractère{variable.min_length > 0 && 's'} maximum
                </Text>
            }

            {variable.type === 'Nombre' &&
                <Text style={variableStyles.body}>
                    Avec {variable.min_value ?? '/'} comme nombre minimum et {variable.max_value ?? '/'} comme nombre maximum
                </Text>
            }

            <Text style={variableStyles.body}>
                La réponse {variable.required ? "est" : "n'est pas"} obligatoire
            </Text>

            <Button
                mode="outlined"
                textColor='black'
                style={variableStyles.body}
                icon="check-all"
                contentStyle={{flexDirection: 'row-reverse'}}
                onPress={sendVariable}>
                Valider la création de votre variable
            </Button>
        </View>
    )
}

export default RecapScreen