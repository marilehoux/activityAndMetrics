import { View, Text } from 'react-native'
import {Button} from 'react-native-paper'
import React, { createContext, useEffect, useState } from 'react'
import metricStyles from './style';
import ComponentDate from './date';
import ComponentTime from './time';
import ComponentDatetime from './dateTime';
import ComponentText from './text';
import ComponentNumber from './number';
import ComponentBoolean from './boolean';




const CreateSessionScreen = ({route, navigation}) => {
    const {page, createdSession} = route.params;
    const [session, setSession] = useState(route.key);

    console.log('session', session)
    console.log('route', route)
    console.log('navigation', navigation)
    console.log('route.params', route.params)
    console.log('route.params.id', route.params.id)
    console.log('page', page)   
    console.log('createdSession', createdSession)

    const [variables, setVariables] = useState([])
    useEffect(() => {
        const fetchData = async () => {
              try {
                  const fetchAndSetData = async (url, setter) => {
                  const response = await fetch(url);
                  const data = await response.json();
                  setter(data);
              
              };
  
              await Promise.all([
                  fetchAndSetData('https://api.pebble.solutions/v5/metric/variable/', setVariables),
              ]);
              } catch (error) {
                  console.error('Erreur lors de la récupération des données:', error, error.message);
              }
        };
  
      fetchData();
      }, []);

      const RenderElement = () => {
        switch(page){
            case 'text' :
                return <ComponentText />
            case 'number' :
                return <ComponentNumber />
            case 'boolean' :
                return <ComponentBoolean />
            case 'date' :
                return <ComponentDate />
            case 'time':
                return <ComponentTime />
            case 'datetime' :
                return <ComponentDatetime />
        }
    }
    
    const Retour = () => {
        console.log(route.params, 'retour')
        navigation.goBack()
    }
    const Valider = () => {
        console.log(session, 'session')
        console.log(variables, 'variables')
        for (let i = 0; i < variables.length; i++) {
            switch(page){
                case 'text' :
                    if(variables[i].type == 'text'){
                        setSession({...session, variables_id: variables[i].question})
                        console.log(session, 'session')
                navigation.push('createSession', { page: 'text', createdSession: variables_id })

                    }
                    break
                case 'number' :
                    if(variables[i].type == 'number'){
                        setSession({...session, variables_id: variables[i].id})
                    }
                    break
                case 'boolean' :
                    if(variables[i].type == 'boolean'){
                        setSession({...session, variables_id: variables[i].id})
                    }
                    break
                case 'date' :
                    if(variables[i].type == 'date'){
                        setSession({...session, variables_id: variables[i].id})
                    }
                    break
                case 'time':
                    if(variables[i].type == 'time'){
                        setSession({...session, variables_id: variables[i].id})
                    }
                    break
                case 'datetime' :
                    if(variables[i].type == 'datetime'){
                        setSession({...session, variables_id: variables[i].id})
                    }
                    break
            }
            
        }
        console.log(route.params, 'valider')
        // navigation.push('createSession', { page: 'recap', createdVariable: variable })
        console.log(session, 'session') 
        navigation.goBack()
    }
    
    return (
        <View style={metricStyles.listContainer}>
            <Text style={metricStyles.title}>Session: {route.params.title}</Text>
            <Text style={metricStyles.subTitle}>{route.params.id}</Text>
            <Text style={metricStyles.subTitle}>{route.params.page}</Text>
            <Text style={metricStyles.subTitle}>{route.params.createdSession}</Text>
            

            <ComponentDate />
            <ComponentDatetime />
            <ComponentTime />
            <ComponentText />
            <ComponentNumber />
            <ComponentBoolean />

            <View>
                <SessionContext.Provider value={{session, setSession, navigation}}>
                    <Text>{session}</Text>   
                    <RenderElement/> 
                </SessionContext.Provider>
            </View>

            <View style={metricStyles.buttonContainer}>
                    <Button
                        icon="arrow-left"
                        mode="outlined"
                        textColor='black'
                        onPress={Retour}>
                        Précedent
                    </Button>

                    {/* { page != 'recap' &&  } */}
                    <Button
                        icon="arrow-right"
                        mode="outlined"
                        textColor='black'
                        contentStyle={{flexDirection: 'row-reverse'}}
                        onPress={Valider}>
                        Valider
                    </Button>
                </View>
        </View>
    )

}
// export const VariableContext = createContext()
export const SessionContext = createContext()

export default CreateSessionScreen