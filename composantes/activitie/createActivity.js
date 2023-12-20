import { View, Text, Button, Alert, TextInput} from 'react-native'
import React, {useState, useEffect} from 'react';
import DatePicker from 'react-native-date-picker';
import Styles from '../../outils/style';
import { fetchData } from '../../actions/fechdata';
import { set } from '@gluestack-style/react';


const CreateActivity = () => {
	const [activity, setActivity] = useState('création d\'une nouvelle activité');
	const [createLabel, setCreateLabel] = useState('');
	const [createDescription, setCreateDescription] = useState('');
	const [createColor, setCreateColor] = useState('');
	const [createDateStart, setCreateDateStart] = useState(new Date());
	const [createDateEnd, setCreateDateEnd] = useState(new Date);
	const [newActivity, setNewActivity] = useState('');
	const [openStart, setOpenStart] = useState(false);
    const [openEnd, setOpenEnd] = useState(false);
	

	const handleCreateLabel = (text) => {
		setCreateLabel(text);
	};
	const handleCreateDescription = (text) => {
		setCreateDescription(text);
	};
	const handleCreateDateStart = (date) => {
		setCreateDateStart(new Date(date));
	};
	const handleCreateDateEnd = (date) => {
		setCreateDateEnd(new Date(date));

	};
	
	const handleCreateColor = (text) => {
		setCreateColor(text);
	};
	
	
	const cancel = () => {
		Alert.alert('annuler');
	}
	

    //une fonction fléchée  save pour enregistrer les informations du formulaire
    const save = () => {
		
		{/*fonction setandpost activity qui envoie les données au serveur avec une requête post*/}
		
		const postActivity = async () => {
			let newActivity = {
				
				"label": createLabel,
				"description": createDescription,
				"color": createColor,
				"start": createDateStart.toISOString(),
				"end": createDateEnd.toISOString(),
				
			};	
			console.log(newActivity, 'activity')
			try {
				const response = await fetch('https://api.pebble.solutions/v5/activity/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newActivity),
				});
				
				if (response.status == 201){
						Alert.alert('enregistrement effectué');
						let data = response.json();
						console.log(data, 'data');
						setActivity('activité enregistrée');
						setNewActivity(newActivity);
							

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
		postActivity();
      } 
   



    //une fonction fléchée  renderView pour afficher le formulaire
    const renderView = () => {
        return (
			<View style={Styles.create} >
					<Text style={Styles.text}>{activity}</Text>
					<Text style={Styles.text}>{newActivity.label}</Text>
					
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
						placeholder = 'color'
						value={createColor}
						onchangeText={handleCreateColor}>
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
						placeholder='date start'
					 	value = {setCreateStart}
						onchangeText={handleCreateStart}>
					</TextInput>
					<TextInput
						style={Styles.inputField}
						placeholder = 'end'
						value={setCreateEnd}
						onchangeText={handleCreateEnd}>
					</TextInput>  */}
					
				</View>
				<View style={Styles.buttonContainer}>
					<Button title="Annuler" color='#FF0000' onPress={cancel} />
					<Button title="enregister l'activité" onPress={save} />
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

export default CreateActivity