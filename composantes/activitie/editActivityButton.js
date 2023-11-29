import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

const TouchableHighlightExample = () => {

	const [activity, setActivity] = useState(0);
	
	const onPressButton = () => {
		Alert.alert('You tapped the button!');
		// la fonction envoie des données au serveur avec une requate post 
		// et enregistre la réponse (id) dans le state
		if(activity === 0) {
			
				const postActivity = async () => {
					let newActivity = {
						"name": "tuto react native",
						"description": "pour m'entraîner",
						
						"color": "#FF0000",
					};
					try {
						const response = await fetch('https://api.pebble.solutions/v5/activity', {
						method: 'POST',
						
						body: JSON.stringify(newActivity),
						
					});
					const data = await response.json();
					console.log(response, 'reponse');
					console.log(newActivity, 'newActivity');
					setActivity('ok');

				}
				catch (error) {
					console.error('Erreur lors de la récupération des données:', error);
				}
			}
			postActivity();
		}


	};


	


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