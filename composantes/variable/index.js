import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableHighlight,  Button, Modal, TextInput, Alert, TouchableWithoutFeedback } from 'react-native'
import appStyles from '../../outils/style';
import DeleteVarButton from '../variable/deleteVarButton';


const Variables = () => {
    const [variables, setVariables] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

	const [modifiedLabel, setModifiedLabel] = useState('');
	const [modifiedDescription, setModifiedDescription] = useState('');
	const [modifiedStart, setModifiedStart] = useState('');
	const [modifiedEnd, setModifiedEnd] = useState('');
	const [modifiedColor, setModifiedColor] = useState('');
	const [modifiedUrl_logo, setModifiedUrl_logo] = useState('');
	const [modifiedUrl_img, setModifiedUrl_img] = useState('');
	
	const handleModifiedLabelChange = (text) => {
		setModifiedLabel(text);
	};
	const handleModifiedDescriptionChange = (text) => {
		setModifiedDescription(text);
	};
	const handleModifiedStartChange = (text) => {
		setModifiedStart(text);
	};
	const handleModifiedEndChange = (text) => {
		setModifiedEnd(text);
	};
	const handleModifiedColorChange = (text) => {
		setModifiedColor(text);
	};
	


	

    useEffect(() => {
      const fetchData = async () => {
			try {
				const fetchAndSetData = async (url, setter) => {
				const response = await fetch(url);
				const data = await response.json();
				setter(data);
			
			};

			await Promise.all([
				fetchAndSetData('https://api.pebble.solutions/v5/metric/variable/', setVariables),
			]);
			} catch (error) {
				console.error('Erreur lors de la récupération des données:', error, error.message);
			}
      };

    fetchData();
    }, []);

    const handleItemClick = (item) => {
		setSelectedItem(item);
		// if((item.label === null) || (item.label === undefined)){
		// 	item.label = 'libellé';
		// }
		// setModifiedDescription(item.description || 'description');
		// if((item.description === null) || (item.description === undefined)){
		// 	item.description = 'date début';
		// }
		// setModifiedLabel(item.label || 'libellé');
		// if((item.label === null) || (item.label === undefined)){
		// 	item.label = 'description';
		// }
		setModifiedColor(item.color);
		if((item.color === null) || (item.color === undefined)){
			item.color = 'grey';
		}
		
		setModalVisible(true);
    };
    const handleModalClose = () => {
    	setModalVisible(false);
    };
    const modifyActivityButton = () => {

		const modifyVariable = async () => {
			let modifiedVariable = {
				"id": selectedItem._id,
				"label": modifiedLabel,
				"description": modifiedDescription,
				// "start": modifiedStart,
				// "end": modifiedEnd,
				"color": modifiedColor,
				
			}
			console.log(modifiedActivity, 'activity')
			try {
				const response = await fetch('https://api.pebble.solutions/v5/metric/variable'+modifiedVariable.id, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(modifiedActivity),
				});
				// let data = await response.json();
					if (response.status === 400 ||
						response.status === 403 ||
						response === 404 ||
						response === 422 ||
						response == 429 ||
						response === 500){
						Alert.alert(response.message, 'modification impossible');
						console.log(response, 'response');
						
					}
					else if(response.status === 204 ){
						Alert.alert('modification effectuée');
						console.log(response, 'response');
						
					}
					
			}
			catch (error) {
				console.error('Erreur lors de la récupération des données:', error);
				Alert.alert('modification a échoué', error);

			}
		}
		modifyVariable();
	


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
            <View style={appStyles.modalContainer}>
					<View style={appStyles.modalButtonContainer}>
                        <DeleteVarButton
                            title='Suppression '
                            id={selectedItem._id}
                        />
						<Button  title="Annuler" color="grey" onPress={handleModalClose} />
					</View>
				<View style={appStyles.modalHeader}>
					<Text style={appStyles.headerText}>MODIFICATION</Text>
					<Text style={appStyles.headerText}>{selectedItem.label}</Text>
					<Text style={appStyles.idText}># {selectedItem._id}</Text>
					<Text style={appStyles.idText}> {selectedItem.status}</Text>

				</View>
					<View style={appStyles.input}>
						<Text style={appStyles.idLabel}>Label</Text>
						<TextInput 
							style={appStyles.inputField}
							placeholder={selectedItem.label}
							value={modifiedLabel}
							onChangeText={handleModifiedLabelChange}>
						</TextInput>
						<Text style={appStyles.idLabel}>Description</Text>
						
						<TextInput
							style={appStyles.inputField}
							placeholder={selectedItem.description}
							value={modifiedDescription}					 	
							onChangeText={handleModifiedDescriptionChange}
							>
						</TextInput>
						<Text style={appStyles.idLabel}>Couleur</Text>
						<TextInput
							style={appStyles.inputField}
							placeholder={selectedItem.color}
							value={modifiedColor}
							onChangeText={handleModifiedColorChange}
							>
						</TextInput>
						{/* <Text style={appStyles.idLabel}>Début</Text>
						<TextInput
							style={appStyles.inputField}
							placeholder={selectedItem.start}
							value={setModifiedStart}
							onChange={handleModifiedStartChange}
							>
						</TextInput> */}
						{/* <Text style={dashboardStyles.idLabel}>Fin</Text>
						<TextInput
							style={dashboardStyles.inputField}
							placeholder={selectedItem.end}
							value={setModifiedEnd}
							onChange={handleModifiedEndChange}
							>
						</TextInput> */}
						
					</View>
				<View >
					<Button style={appStyles.button} title="enregistrer" onPress={modifyActivityButton} />
				</View>
					
			</View>
          </Modal>
        );
      };
      const renderList = () => {
		const formatageDate = (text) => {
			if (text) {
				let dateFormatee = new Date(text).toLocaleDateString('fr-FR');
				return dateFormatee;
			}	
			
		}
        if (!variables) {
          return null;
        }
    
        return (
            <View >
                <FlatList horizontal={false}
                  data={variables}
                  keyExtractor={(item) => item._id.toString()}
                  renderItem={({ item }) => (
					<View style={appStyles.itemContainer}>
						<Text style={appStyles.idText}>#{item._id}</Text>
						<TouchableHighlight onPress={() => handleItemClick(item)}>
							<View >
								<Text style={appStyles.headerListItemText}>{item.label}</Text>
								<Text style={appStyles.text}>{item.description}</Text>
                                <Text style={appStyles.boldText}><Text style={appStyles.idText}>Question :</Text>{item.question}</Text>
                                <Text style={appStyles.text}>type: {item.type}</Text>
                                <Text style={appStyles.text}>valeur par défaut:{item.default_value}</Text>
                                <Text style={appStyles.text}>exemple:{item.example}</Text>
                                <View style={appStyles.row}>
                                    <Text style={appStyles.text}><Text style={appStyles.idText}>validité du </Text>{formatageDate(item.start)}</Text>
                                    <Text style={appStyles.text}><Text style={appStyles.idText}> au </Text>{formatageDate(item.end)}</Text>
                                </View>
								{/* <Text style={appStyles.text}><Text style={appStyles.idText}>ref: </Text>{item.internal_description}</Text> */}
								<Text style={appStyles.text}><Text style={appStyles.idText}>min: </Text>{item.min_value}</Text>
								<Text style={appStyles.text}><Text style={appStyles.idText}>max: </Text>{item.max_value}</Text>
								<Text style={appStyles.text}>statut: {item.status}</Text>
							</View>
						</TouchableHighlight>
						
					</View>
                  )}
                />
            </View>
        );

      }


  return (
    <View>
        {/* début du liste des activités */}
        {renderList()}
        {/* fin du liste des variables */}
        {renderModal() }
    </View>

  )
}


export default Variables

