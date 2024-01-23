import { View, Text, TextInput} from 'react-native'
import React, { useState } from 'react'
import metricStyles from'./style'




const ComponentText = () => {
    const [variable, setVariable] = useState('');

    const onChange = (event, selectedDate) => {
        console.log(selectedDate.toJSON());
        console.log(selectedDate.toLocaleDateString("fr"));
        console.log(event, 'event')
        
      }


    return (
			<View >
                <Text style={metricStyles.titleText}>Text {variable.question}</Text>
                <TextInput
                    style={metricStyles.inputField}
                    onChangeText={text => setVariable({...variable, question: text})}
                    value={variable.question}
                    placeholder="Question"
                />
			</View>
		
	)
}

export default ComponentText