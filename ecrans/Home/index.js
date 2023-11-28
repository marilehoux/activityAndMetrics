import { View, Text,ScrollView, Image } from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import Activities from '../../composantes/activitie' 
import Metrics from '../../composantes/metric' 
import AddActivityButton from '../../composantes/activitie/addActivityButton'
const Home = () => {
  return (
    <ScrollView>
      {/* début du header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>Amandine DOE</Text>
        <Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
      </View> 
      {/* fin du header */}
      {/* début du liste des activités */}
		<View >
			<View style={dashboardStyles.title}>
				<Text style={dashboardStyles.titleText}>Activités</Text>
				<AddActivityButton/>
			</View>
			<Activities/>
		</View>
      	{/* fin du liste des activités */}
		{/* début du liste des metrics */}	
		<View >
			<View style={dashboardStyles.title}>
				<Text style={dashboardStyles.titleText}>Variables</Text>
				<AddActivityButton/>
			</View>
			<Metrics/>	
		</View>
     	{/* fin du liste des metrics */}
    </ScrollView>
    
  )
}

export default Home