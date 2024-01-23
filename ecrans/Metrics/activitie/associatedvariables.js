import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableHighlight} from 'react-native'
import appStyles from '../../../outils/style';


const AssociatedVariables = () => {
    const [variables, setVariables] = useState([]);
	
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


    const RenderItem = ({ item }) => {
        return (
            <View style={appStyles.itemContainer}>
                <Text style={appStyles.idLabel}>{item.label}</Text>
                <Text style={appStyles.idLabel}>{item.type}</Text>
            </View>
        );
    };
    
     


  return (
    <View>
        {variables.map((item) => 
            <RenderItem
            key= {item.id}
            item={item}/>
        )}
    
    </View>

  )
}


export default AssociatedVariables

