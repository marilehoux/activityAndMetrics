import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import Activities from '../../composantes/activitie' 
import Metrics from '../../composantes/metric' 
import DeleteActivityButton from '../../composantes/activitie/deleteActivityButton'
import CreateActivity from '../../composantes/activitie/createActivity'


const Home = () => {
	const Separator = () => <View style={dashboardStyles.separator} />;
  return (
    <View>
		{/* début du header */}
		<View style={dashboardStyles.header}>
			<Text style={dashboardStyles.userName}>Amandine DOE</Text>
			<Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
		</View> 
		{/* fin du header */}
		<View style={dashboardStyles.title}>
			<Text style={dashboardStyles.titleText}>Mes activités</Text>
		</View>
		<ScrollView>
			{/* début du liste des activités */}	
			<Activities/>
			{/* fin du liste des activités */}
			<Separator/>
			{/* <CreateActivity/> */}

		</ScrollView>

		

		
		
		
		
    </View>
    
  )
}

export default Home