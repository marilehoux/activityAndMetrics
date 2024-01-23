import { View, Text, TextInput} from 'react-native'
import React, { useState } from 'react'
import metricStyles from'./style'
import DateTimePicker from '@react-native-community/datetimepicker';




const ComponentTime = ({navigation}) => {
    const [variable, setVariable] = useState('');
    const [openPicker, setOpenPicker] = useState(false);


    const onChange = (event, selectedDate) => {
        console.log(selectedDate.toJSON());
        console.log(selectedDate.toLocaleDateString("fr"));
        console.log(event, 'event')
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setVariable({...variable, start: selectedDate.toJSON()})
      }


    return (
			<View >
                <Text style={metricStyles.titleText}
                onPress={() => setOpenPicker(true)}
                >heure:  __:__</Text>
                {openPicker && 
                <DateTimePicker
                    mode="time"
                    testID="dateTimePicker"
                    value={variable.start ? new Date(variable.start) : new Date()}
                    is24Hour={true}
                    display="clock"
                    onChange={onChange}
                    style={metricStyles.inputField}
                />
                }
			</View>
		
	)
}

export default ComponentTime