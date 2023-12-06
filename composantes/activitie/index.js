import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableHighlight,  Button, Modal, TextInput } from 'react-native'
import dashboardStyles from '../../ecrans/Activities/style';
import DeleteActivityButton from '../activitie/deleteActivityButton';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

	const [modifiedLabel, setModifiedLabel] = useState('');
	const [modifiedDescription, setModifiedDescription] = useState('');
	const [modifiedStart, setModifiedStart] = useState('');
	const [modifiedEnd, setModifiedEnd] = useState('');
	const [modifiedColor, setModifiedColor] = useState('');
	const [modifiedUrl_logo, setModifiedUrl_logo] = useState('');
	const [modifiedUrl_img, setModifiedUrl_img] = useState('');
	const [modifiedStatus, setModifiedStatus] = useState('');
	
	const handleModifiedLabelChange = (text) => {
		setModifiedLabel(text);
	};
	

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
				fetchAndSetData('https://api.pebble.solutions/v5/activity', setActivities),
			]);
			} catch (error) {
				console.error('Erreur lors de la récupération des données:', error);
			}
      };

    fetchData();
    }, []);

    const handleItemClick = (item) => {
		setSelectedItem(item);
		setModifiedLabel(item.label || '');
		setModifiedDescription(item.description || '');
		setModifiedStart(item.start || '');
		setModifiedEnd(item.end || '');
		setModifiedColor(item.color || '');
		setModifiedUrl_logo(item.url_logo || '');
		setModifiedUrl_img(item.url_img || '');
		setModifiedStatus(item.status || '');
		setModalVisible(true);
    };
    const handleModalClose = () => {
    	setModalVisible(false);
    };
    const modifyActivityButton = () => {

		const modifyActivity = async () => {
			let modifiedActivity = {
				"id": selectedItem._id,
				"label": "My name activity",
				"description": "une nouvelle description",
				"start": "2023-11-17T09:00:00",
				"end": "2023-11-17T09:00:00",
				// "color": selectedItem.color,
				// "url_logo": selectedItem.url_logo,
				// "url_img": selectedItem.url_img,
				// "status": "inactive",
			}
			console.log(modifiedActivity, 'activity')
			try {
				const response = await fetch('https://api.pebble.solutions/v5/activity/'+modifiedActivity.id, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(modifiedActivity),
					});
					if(response.message){
						let data = response.json();
						console.log(data, 'data');
					}
					else	{
						console.log(response.json(), 'ko');
					}
				const data = await response.json();
				console.log(response, 'response');
				console.log (response.detail);
				console.log (data);
				// setActivity('ok');
			}
			catch (error) {
				console.error('Erreur lors de la récupération des données:', error.json);
			}
		}
		modifyActivity();
	


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
				<View style={dashboardStyles.modalHeader}>
				</View>
							<Text style={dashboardStyles.textHeader}>Modification de {selectedItem.label}</Text>
					<View style={dashboardStyles.input}>
							<Text style={dashboardStyles.inputField}># {selectedItem._id}</Text>
							<TextInput 
								style={dashboardStyles.inputField}
								placeholder={selectedItem.label}
								value={setModifiedLabel}
								onChange={handleModifiedLabelChange}>
							</TextInput>
							<TextInput
								style={dashboardStyles.inputField}
								placeholder="description"
							 	value={selectedItem.description}
								// onChange={handleModifiedDescriptionChange}
								>
							</TextInput>
							<TextInput
								style={dashboardStyles.inputField}
								placeholder='start'
								value={selectedItem.start}
								// onChange={handleModifiedStartChange}
								>
							</TextInput>
							<TextInput
								style={dashboardStyles.inputField}
								placeholder='end'
								value={selectedItem.end}
								// onChange={handleModifiedEndChange}
								>
							</TextInput>
							<TextInput
								style={dashboardStyles.inputField}
								placeholder='color'
								value={selectedItem.color}
								// onChange={handleModifiedColorChange}
								>
							</TextInput>
							<TextInput
								style={dashboardStyles.inputField}
								placeholder='url_logo'
								value={selectedItem.url_logo}
								// onChange={handleModifiedUrl_logoChange}
								>
							</TextInput>
							<TextInput
								style={dashboardStyles.inputField}
								placeholder='url_img'
								value={selectedItem.url_img}
								// onChange={handleModifiedUrl_imgChange}
								>
							</TextInput>
							<TextInput
								style={dashboardStyles.inputField}
								placeholder='status'
								value={selectedItem.status}
								// onChange={handleModifiedStatusChange}
								>
							</TextInput>
						</View>
            
    
              <View style={dashboardStyles.modalButtonContainer}>
					<Button title="Annuler" color="#FF0000" onPress={handleModalClose} />
					<Button title="enregistrer" onPress={modifyActivityButton} />
						{/* <Button title="Supprimer" onPress={handleDeleteData} /> */}
						{/* <Button title="Save" onPress={handleSaveData} /> */}
              </View>
			</View>
          </Modal>
        );
      };
      const renderList = () => {
        if (!activities) {
          return null;
        }
    
        return (
            <View  >
                <FlatList horizontal={true}
                  data={activities}
                  keyExtractor={(item) => item._id.toString()}
                  renderItem={({ item }) => (
					<View style={dashboardStyles.itemContainer}>
						<TouchableHighlight onPress={() => handleItemClick(item)}>
							<View >
								<Text style={dashboardStyles.idText}>#{item._id}</Text>
								<Text style={dashboardStyles.headerListItemText}>{item.label}</Text>
								<Text style={dashboardStyles.text}>{item.description}</Text>
								<Text style={dashboardStyles.text}>début: {item.start}</Text>
								<Text style={dashboardStyles.text}>fin: {item.end}</Text>
								<Text style={dashboardStyles.text}>couleur: {item.color}</Text>
								<Text style={dashboardStyles.text}>logo: {item.url_logo}</Text>
								<Text style={dashboardStyles.text}>image: {item.img}</Text>
								<Text style={dashboardStyles.text}>statut: {item.status}</Text>
							</View>
						</TouchableHighlight>
						<DeleteActivityButton 
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
        {/* début du liste des activités */}
        {renderList()}
        {/* fin du liste des variables */}
        {renderModal() }
    </View>

  )
}


export default Activities

