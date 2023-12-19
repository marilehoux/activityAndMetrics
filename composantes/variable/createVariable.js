import { View, Text, Button, Alert, TextInput} from 'react-native'
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
import Styles from '../../outils/style';
import COLORMAIN, { COLORS }  from '../../outils/constantes';

const CreateVariable = () => {
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
	// const handleCreateColor = (text) => {
	// 	setCreateColor(text);
	// };
	
	
	const cancel = () => {
		Alert.alert('annuler');
	}
	

    //une fonction fléchée  save pour enregistrer les informations du formulaire
    const save = () => {
		
		{/*fonction setandpost activity qui envoie les données au serveur avec une requête post*/}
		
		const postVariable = async () => {
			let newVariable = {
				
				"label": createLabel,
				"description": createDescription,
                "question": createQuestion,
                "defaultValue": createDefaultValue,
                "type": createType,
				// "color": createColor,
				"start": createDateStart.toISOString(),
				"end": createDateEnd.toISOString(),
				
			};	
            Alert.alert(JSON.stringify(newVariable), 'variable');
            console.log(newVariable.label, 'variable');
            console.log(JSON.stringify(newVariable), 'variable');
			try {
				const response = await fetch('https://api.pebble.solutions/v5/metric/variable/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newVariable),
				});
				
				if (response.status == 201){
						Alert.alert('enregistrement effectué');
						let data = response.json();
						console.log(data, 'data');
						setVariable('activité enregistrée');
						setNewVariable(newVariable);
							

					}
						
				else if (response.status == 400 ||
						 response.status == 403 ||
						 response.status == 404 || 
						 response.status == 429 ||
						 response.status == 422 ||
						 response.status == 500){	
						Alert.alert('enregistrement impossible');
				}
			}
			catch (error) {
				console.error('Erreur lors de la récupération des données:', error);
				Alert.alert('enregistrement a échoué');
			}
		}
		postVariable();
      } 
   



    //une fonction fléchée  renderView pour afficher le formulaire
    const renderView = () => {
        return (
			<View style={Styles.create} >
					<Text style={Styles.headerListItemText}>{variable}</Text>
					<Text style={Styles.text}>{newVariable.label}</Text>
					
				<View style={Styles.input}>
					<TextInput
                        style={Styles.inputField}
                        placeholder = 'libellé'
                        value ={createLabel}
                        onChangeText={handleCreateLabel}>
                        </TextInput>
					<TextInput 
						style={Styles.inputField}
						placeholder = 'description'
						value={createDescription}
						onChangeText={handleCreateDescription}>
					</TextInput>
                     <TextInput
                        style={Styles.inputField}
                        placeholder = 'question'
                        value={createQuestion}
                        onChangeText={handleCreateQuestion}>
                     </TextInput>
                    <TextInput
                        style={Styles.inputField}
                        placeholder = 'type'
                        value={createType}
                        onChangeText={handleCreateType}>
                    </TextInput>
                     <TextInput
                        style={Styles.inputField}
                        placeholder = 'DefaultValue'
                        value={createDefaultValue}
                        onChangeText={handleCreateDefaultValue}>
                    </TextInput>
					<View style={Styles.rowInput}>
                        <Text style={Styles.idText}>validité :</Text>
                            <Button  title="début" color='#898C95'  onPress={() => setOpenStart(true)} />
                            <DatePicker
                                modal
                                title={'date de début'}
                                cancelText={'Annuler'}
                                confirmText={'Confirmer'}
                                theme="dark"
                                mode="date" 
                                locale="fr" 
                                androidVariant='nativeAndroid'
                                open={openStart}
                                date={createDateStart}
                                onConfirm={(date) => {
                                    handleCreateDateStart(date)
                                    setOpenStart(false)
                                }}
                                onCancel={() => {
                                setOpenStart(false)
                                }}
                            />
                            {/* <DatePicker  date={createDateStart} onDateChange={handleCreateStart} mode="date" locale="fr" androidVariant='nativeAndroid' ></DatePicker> */}
                            <Button title="fin" color="#898C95"   onPress={() => setOpenEnd(true)} />
                            <DatePicker
                                modal
                                title={'date de fin'}
                                cancelText={'Annuler'}
                                confirmText={'Confirmer'}
                                theme="dark"
                                mode="date"
                                locale="fr"
                                androidVariant='nativeAndroid'
                                open={openEnd}
                                date={createDateEnd}
                                onConfirm={(date) => {
                                setOpenEnd(false)
                                handleCreateDateEnd(date)
                                }}
                                onCancel={() => {
                                setOpenEnd(false)
                                }}
                            />
                        </View>
					{/* <TextInput
						style={Styles.inputField}
						placeholder = 'end'
						value={setCreateDateEnd}
						onDatechange={handleCreateDateEnd}>
					</TextInput>  */}
					
				</View>
				<View style={Styles.buttonContainer}>
					<Button title="Annuler" color='#FF0000' onPress={cancel} />
					<Button title="enregistrer cette variable" onPress={save} />
				</View>
			</View>
        );
      };
  return (
    <View>
      {renderView()}
    </View>
  )
}

export default CreateVariable