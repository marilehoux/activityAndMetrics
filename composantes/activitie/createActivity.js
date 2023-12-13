import { View, Text, Button, Alert, TextInput} from 'react-native'
import React, {useState, useEffect} from 'react';
import dashboardStyles from '../../ecrans/Activities/style';
import { fetchData } from '../../actions/fechdata';


const CreateActivity = () => {
	const [activity, setActivity] = useState('création d\'une nouvelle activité');
	const [createLabel, setCreateLabel] = useState('');
	const [createDescription, setCreateDescription] = useState('');
	const [createStart, setCreateStart] = useState('');
	const [createEnd, setCreateEnd] = useState('');
	const [createColor, setCreateColor] = useState('');
	

	const handleCreateLabel = (text) => {
		setCreateLabel(text);
	};
	const handleCreateDescription = (text) => {
		setCreateDescription(text);
	};
	const handleCreateStart = (text) => {
		setCreateStart(text);
	};
	const handleCreateEnd = (text) => {
		setCreateEnd(text);
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
				// "start": createStart,
				// "end": createEnd,
				"color": createColor,
				
			};	
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
						setActivity('mise à jour effectuée');
							

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
			<View style={dashboardStyles.itemContainer} >
					<Text style={dashboardStyles.text}>{activity}</Text>
					
				<View style={dashboardStyles.input}>
					<TextInput
					 style={dashboardStyles.inputField}
					 placeholder = 'libellé'
					 value ={createLabel}
					 onChangeText={handleCreateLabel}>
					 </TextInput>

					<TextInput 
						style={dashboardStyles.inputField}
						placeholder = 'description'
						value={createDescription}
						onChangeText={handleCreateDescription}>
					</TextInput>
					<TextInput
						style={dashboardStyles.inputField}
						placeholder = 'color'
						value={createColor}
						onchangeText={handleCreateColor}>
					</TextInput>

					{/* <TextInput 
						style={dashboardStyles.inputField}
						placeholder='date start'
					 	value = {setCreateStart}
						onchangeText={handleCreateStart}>
					</TextInput>
					<TextInput
						style={dashboardStyles.inputField}
						placeholder = 'end'
						value={setCreateEnd}
						onchangeText={handleCreateEnd}>
					</TextInput> */}
					
				</View>
				<View style={dashboardStyles.buttonContainer}>
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