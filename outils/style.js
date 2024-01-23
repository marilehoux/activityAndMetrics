import { StyleSheet } from "react-native";
import { PADDING } from "./constantes";
import { COLORMAIN } from "./constantes";

const appStyles = StyleSheet.create({
	
    
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
		border : 'solid',
		borderColor: 'red',
		borderWidth: 3,
		alignItems: 'center',
		justifyContent: 'center',
		
		
	},
	rowInput :	{
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: 'gray',
		width: 250,
		borderWidth: 1,
		marginBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
	},

	row: {
		flexDirection: 'row',
		width: 250,
		justifyContent: 'space-between',
		borderColor: 'gray',
		
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
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 15,
		backgroundColor: COLORMAIN.bluet,		
	},
	create: {
		borderBottomWidth: 1,
		borderBottomColor: 'white',
		paddingVertical: 10,
		paddingHorizontal: 10,
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 15,
		backgroundColor: COLORMAIN.pinket,
		
	},
	text:{
		fontSize: 16,
		marginBottom: 5,
		color : 'grey',
	},
	boldText:{
		fontSize: 18,
        fontWeight: 'bold',
		marginBottom: 5,
		color : 'grey',
	},
	textWhite:{
		fontSize: 18,
		marginBottom: 5,
		color: 'white',
	},
	
	idText: {
		fontSize: 14,
		fontStyle: 'italic',
	},
	idLabel: {
		fontSize: 13,
		fontStyle: 'italic',
	},
	headerText: {
		fontSize: 16,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	headerListItemText: {
		fontSize: 20,
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
	
	formContainer: {
		flex: 1,
		margin: 10,
		justifyContent: 'space-between', // Utiliser l'espace entre les éléments
		alignItems: 'center',
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 15,
	},
	modalHeaderText: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	modalButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between', // Utiliser l'espace autour des éléments
		width: '100%',
	},
	input: {
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
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
	button: {
		flexDirection: 'row',
		backgroundColor: '#d46363',
		padding: 10,
	},
	
	
});

export default appStyles;