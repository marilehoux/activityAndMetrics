import { View, Text,ScrollView, Image, Separator } from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import Activities from '../../composantes/activitie' 
import Metrics from '../../composantes/metric' 
import TouchableHighlightExample from '../../composantes/activitie/createActivityButton'
import CreateActivity from '../../composantes/activitie/createActivity'
const Home = () => {
	const Separator = () => <View style={dashboardStyles.separator} />;
  return (
    <ScrollView>
      {/* début du header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>Amandine DOE</Text>
        <Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
      </View> 
      {/* fin du header */}
	  <Separator/>
      {/* début du liste des activités */}
		<View >
			<View style={dashboardStyles.title}>
				<Text style={dashboardStyles.titleText}>Activités</Text>
				<TouchableHighlightExample/>
			</View>
			<CreateActivity/>
			<Activities/>
		</View>
      	{/* fin du liste des activités */}
		<Separator/>
		{/* début du liste des metrics */}	
		<View >
			<View style={dashboardStyles.title}>
				<Text style={dashboardStyles.titleText}>Variables</Text>
				<TouchableHighlightExample/>
			</View>
			<Metrics/>	
		</View>
     	{/* fin du liste des metrics */}
    </ScrollView>
    
  )
}

export default Home