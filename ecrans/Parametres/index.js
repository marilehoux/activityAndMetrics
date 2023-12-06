import { View, Text,SafeAreaView, Image } from 'react-native'
import React from 'react'
import dashboardStyles from './style'


const Parametres = () => {
    return (
        <SafeAreaView>
          {/* début du header */}
          <View style={dashboardStyles.header}>
            <Text style={dashboardStyles.userName}>Amandine DOE</Text>
            <Image style={dashboardStyles.userImage} source={require('./../../assets/images/JaneDOE.jpg')} />
          </View> 
          <View style={dashboardStyles.title}>
			      <Text style={dashboardStyles.titleText}>Mes paramètres</Text>
		      </View>
          {/* fin du header */}
          {/* début du liste des paramètres */}
    
          {/* fin du liste des paramètres */}
    
        </SafeAreaView>
      )
}

export default Parametres