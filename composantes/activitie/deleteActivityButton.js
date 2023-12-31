import React, { useState} from 'react';
import {  Text, TouchableHighlight, Alert, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import appStyles from '../../outils/style';


const DeleteActivityButton = ({title, id}) => {
	
	const [activity, setActivity] = useState(null);
	const AlertConfirm = () =>
    Alert.alert('ATTENTION', 'Souhaitez-vous supprimer cette activité?', [
		{
		text: 'Annuler',
		// onPress: () => console.log('Cancel Pressed'),
		style: 'cancel',
		},
		{text: 'OK',
		onPress: () => onPressButton(),
		},
    ]);

	
	const onPressButton = () => {
		Alert.alert('suppression de l\'activité	');

			const deleteActivity = async () => {
				let activity = {
					id: id,
				}
				try{
					const response = await fetch('https://api.pebble.solutions/v5/activity/'+activity.id, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					});
	
					if (response .status ==202){
						Alert.alert('suppression effectuée');
						setActivity(null);
					}
					else if (response.status == 400 ||
						response.status == 403 ||
						response.status == 404 || 
						response.status == 429 ||
						response.status == 422 ||
						response.status == 500){	
					Alert.alert('suppression impossible');
					}
				}
				catch (error) {
					console.error('Erreur lors de la récupération des données:', error);
					Alert.alert('la suppression a échoué');
				}
			}	
			deleteActivity();

	}
	return (
		<View>
			<TouchableHighlight onPress={AlertConfirm}>
				<View style={appStyles.button}>
					<Text style={appStyles.textWhite}>{title}</Text>
					<MaterialCommunityIcons name="trash-can" color={'white'} size={25} />
				</View>
			</TouchableHighlight>
			
		</View>
);
}




export default DeleteActivityButton;