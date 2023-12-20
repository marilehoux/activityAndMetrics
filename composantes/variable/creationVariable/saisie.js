import { View, Text, ScrollView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from '../../../outils/style';

const SaisieScreen = () => {
    const listChoices = ["Texte", "Nombre", "Date", "Période", "Oui/Non"]

    const Item = ({item, onPress, backgroundColor, textColor}) => (
        <TouchableOpacity onPress={onPress} style={{backgroundColor : {backgroundColor}}}>
          <Text style={{color: textColor}}>{item}</Text>
        </TouchableOpacity>
    );

    const [selectedItem, setSelectedItem] = useState();

    const renderItem = ({item}) => {
        const backgroundColor = item === selectedItem ? '#6e3b6e' : '#f9c2ff';
        const color = item === selectedItem ? 'white' : 'black';

        return (
        <Item
            item={item}
            onPress={() => setSelectedItem(item)}
            backgroundColor={backgroundColor}
            textColor={color}
        />
        );
    };

    return (
        <ScrollView>
            <View style={Styles.create} >
                <FlatList
                    data={listChoices}
                    renderItem={renderItem}
                />
            </View>
        </ScrollView>
    )
}

export default SaisieScreen