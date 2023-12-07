import React, { useState} from 'react';
import { StyleSheet, Text, TouchableHighlight, Alert, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const DeleteActivityButton = ({title, id}) => {

	const [activity, setActivity] = useState(0);
	
	const onPressButton = () => {
			const deleteActivity = async () => {
				let activity = {
					id: id,
				}
				
					const response = await fetch('https://api.pebble.solutions/v5/activity/'+activity.id, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					});
					if (response .status ==202){
						Alert.alert('suppression effectuée');
						console.table(response, 'response');
						console.log(response.status, 'responseStatus');
						let data = await response.json();
						console.log(data, 'data');
						console.log(data.status, 'data');
						console.table(data, 'datatable');

					}
					else if (error)	{
						console.error('Erreur lors de la récupération des données:', error);
					}

					
				
				// else (error) {
				// 	console.error('Erreur lors de la récupération des données:', error);
				
				// finally {
				// 	console.log('ok');
				// }
			}	
			deleteActivity();
		}
	return (
		<View style={styles.container}>
			<TouchableHighlight onPress={onPressButton}>
				<View style={styles.button}>
					<Text style={styles.text}>{title}</Text>
					<MaterialCommunityIcons name="trash-can" color={'white'} size={25} />
				</View>
			</TouchableHighlight>
		</View>
);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'start',
		
	},
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: '#d46363',
		padding: 10,
		borderRadius: 15,
	},
	
	text: {
		color: 'white',
	},
});

export default DeleteActivityButton;