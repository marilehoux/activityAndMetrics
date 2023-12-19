import { View, Text,  Image, ScrollView } from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import Metrics from '../../composantes/metric'

const Metric = () => {
	const Separator = () => <View style={dashboardStyles.separator} />;

    return (
        <ScrollView>
				{/* début du header */}
				<View style={dashboardStyles.header}>
					<Text style={dashboardStyles.userName}>Amandine DOE</Text>
					<Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
				</View> 
				{/* fin du header */}
				{/* début du liste des variables */}
				<View style={dashboardStyles.title}>
					<Text style={dashboardStyles.titleText}>Mes relevés/ sessions/ metric</Text>
				</View>
				<View>
					<Metrics/>
				{/* fin du liste des variables */}
					<Separator/>	
				</View>
        </ScrollView>
    )
}

export default Metric