import { StyleSheet } from "react-native";
import { PADDING } from "../../outils/constantes";

const dashboardStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
        backgroundColor: 'white',
        
    },
    userName: {
        fontSize: 25,
    },  
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 50/2,
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical,
      },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "auto",
        backgroundColor: 'white',
        marginRight: 20,
        borderRadius: 15,

      },
    text: {
        fontSize: 20,
        marginBottom: 5,
      },

      idText: {
        fontSize: 10,
        fontStyle: 'italic',
      },
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      headerListItemText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
      },
      
      modalContainer: {
        flex: 1,
        justifyContent: 'space-between', // Utiliser l'espace entre les éléments
        alignItems: 'center',
        padding: 20,
      },
      modalHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Utiliser l'espace autour des éléments
        width: '100%',
      },
      inputField: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
      },
});

export default dashboardStyles;