import { View, Text, Image, ScrollView, Button} from 'react-native'
import React from 'react'
import appStyles from'../../../outils/style'




const CreateSessionButton = ({navigation, title, id}) => {
	const Separator = () => <View style={appStyles.separator} />;

	return (
			<View>
				<Button
					title={title}
                    id={id}
					color='#0000FF'
					onPress={() => {navigation.navigate('creationSession', {id: id, title: title})}}
				/>
				<Separator/>
			</View>
		
	)
}

export default CreateSessionButton