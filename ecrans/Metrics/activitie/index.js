import React, { useState, useEffect} from 'react';
import { View, Text, } from 'react-native'
import appStyles from '../../../outils/style';
import CreateSessionButton from '../createSession/createSessionButton';
import { Button } from 'react-native-paper';



const Activities = ({navigation}) => {
    const [activities, setActivities] = useState([]);
	const Separator = () => <View style={appStyles.separator} />;
    const [visible, setVisible] = useState(false);
	
    
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
                console.error('Erreur lors de la récupération des données:', error, error.message);
			}
        };
        
        fetchData();
    }, []);
    
    const RenderItem = ({ item }) => {
    
        return (
            <View style={appStyles.itemContainer}>
                {/* <Text style={appStyles.idText}>#{item._id}</Text> */}
                <View >
                    <Text style={appStyles.headerListItemText}>{item.label}</Text>
                    <Text style={appStyles.text}>{item.description}</Text>
                    <Text style={appStyles.text}>statut: {item.status}</Text>
                    <Text style={appStyles.text}>id {item._id}</Text>
                </View>
                <View style={appStyles.buttonContainer}>

                <Text style={appStyles.text}>Variables associées:</Text>
                <Button
                icon="eye"
                onPress={renderAssociated(item._id)}/>
                </View>
                <Separator/>
                {visible && <AssociatedVariables id={item._id}/>}
                
                    <CreateSessionButton
                    navigation={navigation}
                    id={item._id}
                    title={item.label}/>
            </View>
        );
    };
    
      

      if (!activities) {
        return null;
      }
      return (
        <View>
            <View>
                {activities.map((item) => 
                <RenderItem
                key={item._id}
                item={item}
                />
                )}
        
            </View>
        </View>
    );
}
export default Activities

