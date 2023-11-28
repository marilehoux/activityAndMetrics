import React, { useState, useEffect} from 'react';

import { View, Text, FlatList, TouchableHighlight, StyleSheet, Button, Modal, TextInput } from 'react-native'
import dashboardStyles from '../../ecrans/Home/style';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        try {
        const fetchAndSetData = async (url, setter) => {
            const response = await fetch(url);
            const data = await response.json();
            setter(data);
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
    setModalVisible(true);
    };
    const handleModalClose = () => {
    setModalVisible(false);
    };
    
    
    
    const deleteActivity = () => {
        return (
            <View>
                <Button title='supprimer une activité'></Button>
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
              <Text style={dashboardStyles.modalHeaderText}>Modification:</Text>
              <Text>libellé : </Text>
              
              {/* <TextInput
                style={dashboardStyles.inputField}
                placeholder='libellé'
                value={}
                onChangeText={handleFirstNameChange}
              /> */}
    
             <View style={dashboardStyles.modalButtonContainer}>
                <Button title="X" onPress={handleModalClose} />
                </View>
    
              <View style={dashboardStyles.modalButtonContainer}>
                {deleteActivity()}
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
            <View >
                <FlatList horizontal={true}
                  data={activities}
                  keyExtractor={(item) => item._id.toString()}
                  renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => handleItemClick(item)}>
                      <View style={dashboardStyles.itemContainer}>
                        <Text style={dashboardStyles.idText}>#{item._id}</Text>
                        <Text style={dashboardStyles.headerListItemText}>{item.name}</Text>
                        <Text style={dashboardStyles.text}>{item.description}</Text>
                        <Text style={dashboardStyles.text}>date début: {item.start}</Text>
                        <Text style={dashboardStyles.text}>date fin: {item.end}</Text>
                        <Text style={dashboardStyles.text}>couleur: {item.color}</Text>
                        <Text style={dashboardStyles.text}>logo: {item.url_logo}</Text>
                        <Text style={dashboardStyles.text}>image: {item.img}</Text>
                      </View>
                    </TouchableHighlight>
                  )}
                />
            </View>
        );

      }


  return (
    <View>
        {/* début du liste des activités */}
        {renderList()}
        {renderModal() }
    
    </View>

  )
}


export default Activities
