import { View, Text, Image, ScrollView} from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import Activities from '../../composantes/activitie' 



const Home = () => {
	const Separator = () => <View style={dashboardStyles.separator} />;

	return (
		<ScrollView>
			<View>

			{/* début du header */}
			<View style={dashboardStyles.header}>
				<Text style={dashboardStyles.userName}>Amandine DOE</Text>
				<Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
			</View> 
			</View>
			{/* fin du header */}
			<View style={dashboardStyles.title}>
				<Text style={dashboardStyles.titleText}>Mes activités</Text>
			</View>
			<View>
				{/* début du liste des activités */}	
				<Activities/>
				{/* fin du liste des activités */}
				<Separator/>
				{/* <CreateActivity/> */}
			</View>
		</ScrollView>
	)
}

export default Home