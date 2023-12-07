import { set } from '@gluestack-style/react';
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { act } from 'react-test-renderer';

const ActivityForm = (initialActivity) => {
    console.log(initialActivity,'initial')
  const [activity, setActivity] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
  });
  const handleChange = (event) => {
    setActivity({
        ...activity,
        [event.target.name]: event.target.value,
        });
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API to update activity
    console.log(activity, 'acti');
    console.log(activity.name);
  };

  return (
    <View>
      <Text>Modifier l'activité</Text>
      <TextInput
        name="name"
        value={activity.name}
        onChange={handleChange}
        placeholder="Nom de l'activité"
      />
      <TextInput
        name="description"
        value={activity.description}
        onChange={handleChange}
        placeholder="Description de l'activité"
      />
      <TextInput
        name="startDate"
        value={activity.startDate}
        onChange={handleChange}
        placeholder="Date de début de l'activité"
      />
      <TextInput
        name="endDate"
        value={activity.endDate}
        onChange={handleChange}
        placeholder="Date de fin de l'activité"
      />
      <Button title="Modifier" onPress={handleSubmit} />
    </View>
  );
};

export default ActivityForm;