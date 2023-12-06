import { View, Text, SafeAreaView, Image} from 'react-native'
import React from 'react'
import dashboardStyles from './style'
import Metrics from '../../composantes/metric'

const Screen2 = () => {
	const Separator = () => <View style={dashboardStyles.separator} />;

    return (
        <SafeAreaView>
				{/* début du header */}
				<View style={dashboardStyles.header}>
					<Text style={dashboardStyles.userName}>Amandine DOE</Text>
					<Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
				</View> 
				{/* fin du header */}
				{/* début du liste des variables */}
				<View style={dashboardStyles.title}>
					<Text style={dashboardStyles.titleText}>Mes variables</Text>
					</View>
					<Metrics/>
				{/* fin du liste des variables */}
				<Separator/>
			

        </SafeAreaView>
      )
}

export default Screen2