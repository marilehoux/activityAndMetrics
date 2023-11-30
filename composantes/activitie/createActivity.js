import { View, Text, Button, Alert, TextInput} from 'react-native'
import React, {useState} from 'react';
import dashboardStyles from '../../ecrans/Home/style';


const CreateActivity = () => {
	const [activity, setActivity] = useState(0);

    //une fonction fléchée  save pour enregistrer les informations du formulaire
    const save = () => {
		Alert.alert('allez');
		
		{/*fonction setandpost activity qui envoie les données au serveur avec une requête post*/}
			
			const postActivity = async () => {
			 	let newActivity = {

					"name": "TUTO REACT",
					"description": "Service de Jessica aussi ",
				// 		// "start": "20/20/2023",
				// 		// "end": "21/10/2024",
				// 		// "color": "#4287f5",
				// 		// "url_logo": "",
				// 		// "url_img": "",
				// 		// "groups": [],
			};	
				try {
					const response = await fetch('https://api.pebble.solutions/v5/activiti/', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(newActivity),
					});
					console.log(response, 'response');
					console.log(response.status, 'response.status')
					if (response){
						let data = response.json();
						console.log(data, 'data');
						setActivity('ok');

					}
						
					else	{
						console.log(response.json(), 'ko');
					}

				}
				catch (error) {
					console.error('Erreur lors de la récupération des données:', error);
				}
			}
		postActivity();
      } 
   //une fonction fléchée  checkout pour quitter le formulaire
    const checkout = () => {
       
      }



    //une fonction fléchée  renderView pour afficher le formulaire
    const renderView = () => {
    
        return (
			<View style={dashboardStyles.formContainer}>
				<View style={dashboardStyles.input}>
					<Text style={dashboardStyles.inputField}>{activity}</Text>
					<TextInput style={dashboardStyles.inputField}>libellé</TextInput>
					<TextInput style={dashboardStyles.inputField}>description</TextInput>
					<TextInput style={dashboardStyles.inputField}>start</TextInput>
					<TextInput style={dashboardStyles.inputField}>end</TextInput>
					<TextInput style={dashboardStyles.inputField}>url_logo</TextInput>
					<TextInput style={dashboardStyles.inputField}>url_img</TextInput>
					<TextInput style={dashboardStyles.inputField}>groups</TextInput>
				</View>
				<View style={dashboardStyles.buttonContainer}>
					<Button title="Annuler" color='#FF0000' onPress={save} />
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