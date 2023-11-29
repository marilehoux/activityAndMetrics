import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TouchableHighlightExample = () => {

	const [activity, setActivity] = useState(0);
	
	const onPressButton = () => {
		Alert.alert('You tapped the button!');
		// la fonction envoie des données au serveur avec une requate post 
		// et enregistre la réponse (id) dans le state
		
			
			// const postActivity = async () => {
			// 	let newActivity = {
			// 		"name": "TRAVAIL",
			// 		"description": "DEVOPS",
			// 		// "start": "20/20/2023",
			// 		// "end": "21/10/2024",
			// 		// "color": "#4287f5",
			// 		// "url_logo": "",
			// 		// "url_img": "",
			// 		// "groups": [],
			// 	};
			// 		try {
			// 			fetch('https://api.pebble.solutions/v5/activity/', {
			// 			method: 'POST',
			// 			headers: {
			// 				'Content-Type': 'application/json',
			// 			},
			// 			body: JSON.stringify(newActivity),
						
			// 		});
			// 			if (data){
			// 				console.log(response.json, 'ok');
			// 			}
					
			// 		setActivity('ok');

			// 		}
			// 		catch (error) {
			// 			console.error('Erreur lors de la récupération des données:', error);
			// 		}
			// }
			// postActivity();

			const deleteActivity = async () => {
				let activity = {
					"id": "01HGB43XYCFT1X9HQHKXFKR4Q5",	
				}
				try {
					const response = await fetch('https://api.pebble.solutions/v5/activity/'+activity.id, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					});
					const data = await response.json();
					console.log (response);
					console.log (data);
					setActivity('ok');
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
					<Text>Ajouter</Text>
				</View>
			</TouchableHighlight>
			<View style={styles.countContainer}>
			<Text>test: {activity}</Text>
			{/* <Text>activities: {activities}</Text> */}
			</View>
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