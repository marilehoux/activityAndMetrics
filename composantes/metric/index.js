	import React, { useState, useEffect} from 'react';
	import { View, Text, FlatList, TouchableHighlight,  Button, Modal, TextInput} from 'react-native'
	import dashboardStyles from '../../ecrans/Activities/style';
	import DeleteMetricButton from './deleteMetricButton';  
	const Metrics = () => {
		const [metrics, setMetrics] = useState([]);
		const [selectedItem, setSelectedItem] = useState(null);
		const [modalVisible, setModalVisible] = useState(false);
		
		useEffect(() => {
			const fetchData = async () => {
				try {
					const fetchAndSetData = async (url, setter) => {
						const response = await fetch(url);
						const data = await response.json();
						setter(data);
						console.log(response, 'response');
				console.log(data, 'data');
					};
					
					await Promise.all([
						fetchAndSetData('https://api.pebble.solutions/v5/metric/variable/', setMetrics),
					]);
				} catch (error) {
					console.error('Erreur lors de la récupération des données:', error);
				}
			};
			
			fetchData();
		}, []);
	const handleItemClick = (item) => {
		setSelectedItem(item);
		setModalVisible(true);
	};
	const handleModalClose = () => {
		setModalVisible(false);
	};

	const modifyActivityButton = () => {
        return (
            <View>
                <Button title="enregistrer"></Button>
            </View>
        )
    }
	const renderModal = () => {
		if (!selectedItem) {
			return null;
		}
		
		return (
			<Modal
			animationType="slide"
			transparent={false}
			visible={modalVisible}
			onRequestClose={handleModalClose}
			>
				<View style={dashboardStyles.modalContainer}>
					<Text style={dashboardStyles.modalHeaderText}>Modification {'metrics'} #id:</Text>
					<View style={dashboardStyles.input}>
						<Text style={dashboardStyles.inputField}>Modification {'metrics'}</Text>
						<TextInput style={dashboardStyles.inputField} placeholder="libellé"></TextInput>
						<TextInput style={dashboardStyles.inputField} placeholder="question"></TextInput>
						<TextInput style={dashboardStyles.inputField} placeholder="motif"></TextInput>
						<TextInput style={dashboardStyles.inputField} placeholder="type"></TextInput>
						<TextInput style={dashboardStyles.inputField} placeholder="valeur mini"></TextInput>
						<TextInput style={dashboardStyles.inputField} placeholder="valeur max"></TextInput>
						<TextInput style={dashboardStyles.inputField} placeholder="val par défaut"></TextInput>
						<TextInput style={dashboardStyles.inputField} placeholder="référence interne"></TextInput>
					</View>
					<View style={dashboardStyles.modalButtonContainer}>
					<Button title="Annuler" color='#FF0000' onPress={handleModalClose} />
					{modifyActivityButton()}
					</View>
				</View>
			</Modal>
			);
		};
		const renderList = () => {
			if (!metrics) {
				return null;
			}
			return (
				<View >
					<FlatList horizontal={true}
					data={metrics}
					keyExtractor={(item) => item._id.toString()}
					renderItem={({ item }) => (
						<View style={dashboardStyles.itemContainer}>
							<TouchableHighlight onPress={() => handleItemClick(item)}>
								<View>
									<Text style={dashboardStyles.idText}>#{item._id}</Text>
									<Text style={dashboardStyles.headerListItemText}>{item.label}</Text>
									<Text style={dashboardStyles.text}>{item.status}</Text>
									<Text style={dashboardStyles.text}>question utilisateur{item.question}</Text>
									<Text style={dashboardStyles.text}>type: {item.type}</Text>
									<Text style={dashboardStyles.text}>valeur mini: {item.start}</Text>
									<Text style={dashboardStyles.text}>valeur maxi: {item.end}</Text>
									<Text style={dashboardStyles.text}>par défaut: {item.default}</Text>
									<Text style={dashboardStyles.text}>motif: {item.description}</Text>
									<Text style={dashboardStyles.text}>ref: {item.internal_description}</Text>
								</View>
							</TouchableHighlight>
							<DeleteMetricButton
							title={item.label}
							id={item._id} 
							/> 
						</View>	
						)}
					/>
				</View>
			);
		}
		return (
			<View>
				{/* début du liste des variables */}
					{renderList()}
				{/* fin du liste des variables */}
					{renderModal()}
			</View>
		)
		}
				
				
		export default Metrics
				
