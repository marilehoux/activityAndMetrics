import { View, Text, Image, ScrollView, Button} from 'react-native'
import React from 'react'
import appStyles from '../../outils/style'
import Variables from '../../composantes/variable'

import MaterialCommutyIcons from 'react-native-vector-icons/MaterialCommunityIcons'



const Home = ({navigation}) => {
	const Separator = () => <View style={appStyles.separator} />;

	return (
		<ScrollView>
			<View>

			
			</View>
			{/* fin du header */}
			<View style={appStyles.title}>
				<Text style={appStyles.titleText}>Mes variables</Text>
			</View>
			{/* <CreateVariable/> */}
			<View>
				<Button
					title='Création variable test'
					color='#0000FF'
					onPress={() => navigation.navigate('creationVariable')}
				/>
				<Variables/>
				<Separator/>
			</View>
		</ScrollView>
	)
}

export default Home