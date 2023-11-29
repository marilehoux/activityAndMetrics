import { View, Text, Button} from 'react-native'
import React from 'react';
import dashboardStyles from '../../ecrans/Home/style';


const CreateActivity = () => {
    //une fonction fléchée  save pour enregistrer les informations du formulaire
    const save = () => {
         dispatch(createActivity({modifiedFirstName, modifiedLastName, modifiedRegistrationNumber}));
         checkout();
      } 
   //une fonction fléchée  checkout pour quitter le formulaire
    const checkout = () => {
        // setModifiedFirstName('');
        // setModifiedLastName('');
        // setModifiedRegistrationNumber('');
        // setModalVisible(false);
      }

    //une fonction fléchée  renderView pour afficher le formulaire

    
    const renderView = () => {
    
        return (
         
            <View style={dashboardStyles.modalContainer}>
              <Text style={dashboardStyles.modalHeaderText}>Modification:</Text>
              
              <Text>libellé : </Text>
              {/* <TextInput
                style={dashboardStyles.inputField}
                placeholder='libellé'
                value={}
                onChangeText={handleFirstNameChange}
              /> */}
    
              {/* <Text>Nom : </Text>
              <TextInput
                style={dashboardStyles.inputField}
                placeholder="Modification du nom de famille"
                value={modifiedLastName}
                onChangeText={handleLastNameChange}
              />
    
              <Text>itm2 :</Text>
              <TextInput
                  style={dashboardStyles.inputField}
                  placeholder="Modification du maticule"
                  value={modifiedRegistrationNumber}
                  onChangeText={handleRegistrationNumberChange}
                /> */}
    
              <View style={dashboardStyles.modalButtonContainer}>
                <Button title="enregister" onPress={save} />
                <Button title="quiter" onPress={checkout} />

                {/* <Button title="Supprimer" onPress={handleDeleteData} /> */}
                {/* <Button title="Save" onPress={handleSaveData} /> */}
              </View>
            </View>
        );
      };
  return (
    <View>
      {renderView()}
    </View>
  )
}

export default CreateActivity