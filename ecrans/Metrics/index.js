import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import Activities from './activitie'
import appStyles from '../../outils/style'
import CreateSessionButton from './createSession/createSessionButton'

const Metric = ({navigation}) => {

    return (
        <View>
            <View style={appStyles.title}>
                <Text style={appStyles.titleText}>Mes sessions</Text>
            </View>
            <ScrollView>
                <CreateSessionButton
                    navigation={navigation}
                    id='1'
                    title='session de test'/>
            
                <Activities
                navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

export default Metric