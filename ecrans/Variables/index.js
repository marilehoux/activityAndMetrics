import { View, Text, Image, ScrollView, Button} from 'react-native'
import React from 'react'
import appStyles from '../../outils/style'
import Variables from '../../composantes/variable'

import MaterialCommutyIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CreateVariable from '../../composantes/variable/createVariable'



const Home = ({navigation}) => {
	const Separator = () => <View style={appStyles.separator} />;

	return (
		<ScrollView>
			<View>

			{/* début du header */}
			<View style={appStyles.header}>
				<MaterialCommutyIcons name="menu" color={'black'} size={30} />	
				<Text style={appStyles.userName}>Amandine DOE</Text>
				<Image style={appStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
			</View> 
			</View>
			{/* fin du header */}
			<View style={appStyles.title}>
				<Text style={appStyles.titleText}>Mes variables</Text>
			</View>
			{/* <CreateVariable/> */}
			<View>
				<Button
					title='Création nouvelle variable'
					color='#0000FF'
					onPress={() => navigation.navigate('creationVariable')}
				/>
				{/* début du liste des activités */}	
				<Variables/>
				{/* fin du liste des activités */}
				<Separator/>
				{/* <CreateActivity/> */}
			</View>
		</ScrollView>
	)
}

export default Home