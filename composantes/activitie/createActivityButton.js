import React, { useState} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { TextInput } from 'react-native-paper';
import dashboardStyles from '../../ecrans/Home/style';
import CreateActivity from './createActivity';

const TouchableHighlightExample = () => {

	const [activity, setActivity] = useState(0);
	
	const onPressButton = () => {
		
			

			const deleteActivity = async () => {
				let activity = {
					"id": "01HGG83GW0D9TQM0QK378KT77H",	
				}
				try {
					const response = await fetch('https://api.pebble.solutions/v5/activity/'+activity.id, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					});
					if (response){
						let data = await response.json();
						console.log(data, 'data');
						setActivity('supprimé');

					}
						
					else	{
						console.log(await response.json(), 'ko');
					}

					
				}
				catch (error) {
					console.error('Erreur lors de la récupération des données:', error);
				}
			}	
			deleteActivity();


			// const patchActivity = async () => {
			// 	let activity = {
			// 		"id": "01H81Z7W545XNWSP7B4JMRRRC0",
			// 		// "name": "BOWLING",
			//  		// "description": "Betton sur Vilaine",
			//  		//"start": "2024-12-20 00:00.000Z",
			// 		//"end": "2021-10-20T14:00:00.000",
			// 		//"color": "#4287f5",
			// 		// "url_logo": "",
			// 		// "url_img": "",
			// 		// "groups": [],	
			// 	}
			// 	try {
			// 		const response = await fetch('https://api.pebble.solutions/v5/activity/'+activity.id, {
			// 			method: 'PATCH',
			// 			headers: {
			// 				'Content-Type': 'application/json',
			// 			},
			// 			body: JSON.stringify(activity),
			// 			});
			// 		const data = await response.json();
			// 		console.log (response.details);
			// 		console.log (data);
			// 		setActivity('ok');
			// 	}
			// 	catch (error) {
			// 		console.error('Erreur lors de la récupération des données:', error);
			// 	}
			// }	
			// patchActivity();

		}
	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={onPressButton}>
				<View style={styles.button}>
					<Text>Suppr</Text>
					<Text>{activity}</Text>
				</View>
			</TouchableHighlight>
		</View>
);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 10,
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#DDDDDD',
		padding: 10,
	},
	countContainer: {
		alignItems: 'center',
		padding: 10,
	},
	countText: {
		color: '#FF00FF',
	},
});

export default TouchableHighlightExample;