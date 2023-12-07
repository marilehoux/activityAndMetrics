import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableHighlight,  Button, Modal, TextInput, Alert } from 'react-native'
import dashboardStyles from '../../ecrans/Activities/style';
import DeleteActivityButton from '../activitie/deleteActivityButton';
import { set } from '@gluestack-style/react';


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
	
	const handleModifiedLabelChange = (text) => {
		setModifiedLabel(text);
	};
	const handleModifiedDescriptionChange = (text) => {
		setModifiedDescription(text);
	};
	const handleModifiedStartChange = (date) => {
		setModifiedStart(date);
	};
	const handleModifiedEndChange = (date) => {
		setModifiedEnd(date);
	};
	const handleModifiedColorChange = (text) => {
		setModifiedColor(text);
	};
	const handleModifiedUrl_logoChange = (text) => {
		setModifiedUrl_logo(text);
	};
	const handleModifiedUrl_imgChange = (text) => {
		setModifiedUrl_img(text);
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
				console.error('Erreur lors de la récupération des données:', error, error.message);
			}
      };

    fetchData();
    }, []);

    const handleItemClick = (item) => {
		setSelectedItem(item);
		setModifiedLabel(item.label);
		setModifiedDescription(item.description);
		setModifiedStart(item.start || '');
		setModifiedEnd(item.end || '');
		setModifiedColor(item.color || '');
		setModifiedUrl_logo(item.url_logo || '');
		setModifiedUrl_img(item.url_img || '');
		setModalVisible(true);
    };
    const handleModalClose = () => {
    	setModalVisible(false);
    };
    const modifyActivityButton = () => {

		const modifyActivity = async () => {
			let modifiedActivity = {
				"id": selectedItem._id,
				"label": modifiedLabel,
				"description": modifiedDescription,
				"start": modifiedStart,
				"end": modifiedEnd,
				"color": modifiedColor,
				"url_logo": modifiedUrl_logo,
				"url_img": modifiedUrl_img
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
				// let data = await response.json();
					if (response.status === 400 || response.status === 403 || response === 404 || response === 422 || response == 429 || response === 500){
						Alert.alert(response.message, 'modification impossible');
						console.log(response, 'response');
						
					}
					else if(response.status === 204 ){
						Alert.alert('modification effectuée');
						console.log(response, 'response');
						
					}
					else {
						console.log(response.json(), 'ko');
						console.log(response, 'response');
						console.log (response.detail);
						console.log (response);
					}
					console.log(response, 'response');
					console.log (response.detail);
					console.log (response);
					// setActivity('ok');
			}
			catch (error) {
				console.error('Erreur lors de la récupération des données:', error);
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
							onChangeText={handleModifiedLabelChange}>
						</TextInput>
						<TextInput
							style={dashboardStyles.inputField}
							placeholder={selectedItem.description}
							value={setModifiedDescription}					 	
							onChangeText={handleModifiedDescriptionChange}
							>
						</TextInput>
						<TextInput
							dataDetectorTypes={'[calendarEvent]'}
							style={dashboardStyles.inputField}
							placeholder={selectedItem.start}
							value={setModifiedStart}
							onChange={handleModifiedStartChange}
							>
						</TextInput>
						<TextInput
							dataDetectorTypes={['calendarEvent']}
							style={dashboardStyles.inputField}
							placeholder={selectedItem.end}
							value={setModifiedEnd}
							onChange={handleModifiedEndChange}
							>
						</TextInput>
						<TextInput
							style={dashboardStyles.inputField}
							placeholder={selectedItem.color}
							value={setModifiedColor}
							onChange={handleModifiedColorChange}
							>
						</TextInput>
						<TextInput
							style={dashboardStyles.inputField}
							placeholder={selectedItem.url_logo}
							value={setModifiedUrl_logo}
							onChange={handleModifiedUrl_logoChange}
							>
						</TextInput>
						<TextInput
							style={dashboardStyles.inputField}
							placeholder={selectedItem.url_img}
							value={setModifiedUrl_img}
							onChange={handleModifiedUrl_imgChange}
							>
						</TextInput>
					</View>
				<View style={dashboardStyles.modalButtonContainer}>
					<Button title="Annuler" color="#FF0000" onPress={handleModalClose} />
					<Button title="enregistrer" onPress={modifyActivityButton} />
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
            <View >
                <FlatList horizontal={false}
                  data={activities}
                  keyExtractor={(item) => item._id.toString()}
                  renderItem={({ item }) => (
					<View style={dashboardStyles.itemContainer}>
						<TouchableHighlight onPress={() => handleItemClick(item)}>
							<View >
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
								<Text style={dashboardStyles.idText}>#{item._id}</Text>
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

