import { View, Text, TextInput} from 'react-native'
import React, { useState } from 'react'
import metricStyles from'./style'




const ComponentNumber = ({navigation}) => {
    const [variable, setVariable] = useState('');

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
                <Text style={metricStyles.titleText}>Number {variable}</Text>
                
                <TextInput  
                    style={metricStyles.inputField}
                    onChangeText={text => setVariable({...variable, question: text})}
                    value={variable.question}
                    placeholder="Question"
                />
				
			</View>
		
	)
}

export default ComponentNumber