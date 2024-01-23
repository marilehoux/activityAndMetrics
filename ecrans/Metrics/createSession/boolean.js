import { View, Text, TextInput} from 'react-native'
import React, { useState } from 'react'
import metricStyles from'./style'
import { Switch } from 'react-native-paper'



const ComponentBoolean = ({navigation}) => {
    const [variable, setVariable] = useState('');

    const onChange = (event, selectedDate) => {
        
        console.log(event, 'event')
        
        
        setVariable({...variable, start: selectedDate.toJSON()})
      }


    return (
			<View >
                <Text style={metricStyles.titleText}>Booléen {variable}</Text>
                
                <Switch
                    value={variable}
                    onValueChange={value => setVariable(value)}
                />
				
			</View>
		
	)
}

export default ComponentBoolean